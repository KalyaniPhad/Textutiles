import React from 'react';
import PropTypes from 'prop-types';


export default function Navbar(props){

 return( 
    <>
       

        <ul className={`w-full h-10 flex justify-end space-x-24 pr-7pt-4 ${props.mode === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-200 text-black'}`}>

          <li>

          <div className="from-check from-switch mt-3 -ml-20">
          <input className='from-input' onClick={props.toggleMode} type="checkbox" id="defaultcheckbox" />

          <label className={`from-label ml-2  text-${props.mode==='light' ?'white':'dark'}`} htmlFor='defaultcheckbox' >
          Enable mode
          </label></div>

          </li>

          <li className='mt-3'>
           <li className="text-decoration-none" >{props.title}</li> 
            
            </li>
          
          <li className='mt-3'>

          <li  className="text-decoration-none">About</li>
          </li>

          <li className='mt-3'>Contact</li>
          
        </ul>

       
      
   </>
       
    )


    
}

Navbar.propTypes= {
title:PropTypes.string

};
  
