import React from 'react';

function Alert_text(props){

    return(


    props.Alert_text && 
    <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert" >
        <strong>{props.alert.type}</strong>:{props.alert.msg}
    </div>

        
       
    )
}

export default Alert_text;