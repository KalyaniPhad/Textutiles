
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React, { useState } from 'react';
import Alert from './Components/Alert_text';





function App() {

  const [mode, setMode] = useState('#D3D3D3');
  const [alert, setAlert] = useState(null);

  const showAlert=(message, type)=>{

         setAlert({
          msg:message,
          type:type })   

         console.log(alert);  // Check if the alert state is updated


         setTimeout(() => {
    setAlert(null);
  }, 2000);
};






  const toggleMode = ()=>{

      if(mode==='#D3D3D3'){

        setMode('dark');
        document.body.style.backgroundColor = "white";
        showAlert("Dark mode has been enable", "success");
        document.title = "Textutiles - Dark mode"

      }else{

        setMode('#D3D3D3');
        document.body.style.backgroundColor = "#ffc080";
        showAlert("light mode has been enable","success"); 
        document.title = "Textutiles - light mode"
      } }
   
  

return (
  <>



<Navbar  title="TextUtiles"  mode={mode}  toggleMode={toggleMode} />
<Alert alert = {alert}/>

<div className='container my-3'>



 <TextForm showAlert={showAlert} ></TextForm>


</div>

</>
); 
};
export default App;
