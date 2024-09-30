
import React , {useState} from 'react'


export default function TextForm(props){

    const [text, setText] = useState("Enter text here");


    const handleUppercaseClick = ()=>{

        console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("uppercase","success");
        console.log("uppercase converted");
    }

    const handleLowercaseClick = ()=>{

        let newText1 = text.toLowerCase();
        setText(newText1);

    }

    const [isDarkMode, setIsDarkMode] = useState(false);
    const DarkMode = ()=>{
    setIsDarkMode(!isDarkMode);
    }

    const handleOnchange = (event)=>{

        console.log(" Convert to Uppercase button click");
        setText(event.target.value);

    }





    return(


   

        <div className=' w-[900px] h-[500px] ml-40 mt-15  
             border-solid rounded-lg  hover:shadow-right-bottom" id="mybox"  rows= "5"  '>
            
            <div>
            <textarea  value={text} 
            onChange={handleOnchange} 
            className={`${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'} form-control w-[700px] h-[200px] ml-20 mt-5 border-2 border-black border-solid rounded-lg hover:shadow-right-bottom`}
            id="mybox"  
            rows= "5" ></textarea>
            </div>

           <button className='btn btn-primary w-[190px] h-[45px] border-2 border-blue ml-20 mt-5  bg-blue-300  hover:bg-blue-400' onClick={handleUppercaseClick}  >Convert to Uppercase</button>
           <button className='btn btn-primary w-[190px] h-[45px] border-2 border-blue ml-14 mt-5  bg-blue-300   hover:bg-blue-400' onClick={handleLowercaseClick}  >Click here</button>
           <button className='btn btn-primary w-[190px] h-[45px] border-2 border-blue ml-14 mt-5  bg-blue-300   hover:bg-blue-400' onClick={DarkMode}  >Dark mode</button>


            <div className="w-[300px] h-[150px] ml-20 mt-5">
             <h2 className="font-extrabold">Text summary</h2>
            <p>{text.split(" ").length} words and {text.length} character</p>
            <p>{0.008 *text.split(" ").length}  Minute to read</p>
            <h3 className='mt-5 font-extrabold'>Preview</h3>
            <p>{text}</p>
            </div>

        </div>

        
       

    )
}