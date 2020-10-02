import React, { useState } from 'react'


const Form =({onCountryChange})=>{

  const [inputCountry, setInputCountry] =useState('');
  
  const onFormSubmit =(event)=>{
    event.preventDefault();
    if(inputCountry.length>1){

      onCountryChange(inputCountry);
    }
  }

  
return (
    <>
    <form 
    onSubmit={onFormSubmit}
    className="col s8 " 
    style={{backgroundColor: "white", opacity: .6}}>
      <h2>Check the weather:</h2>
      <div className="row">
        <div className="input-field col s8 offset-s2">
          <input
          value ={inputCountry}
          onChange ={event =>setInputCountry(event.target.value)}
           id="City" 
           type="text" />
        </div>
      </div>
    </form>
    </>
);
}

export default Form