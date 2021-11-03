import React, { useState } from "react";
import PropTypes from "prop-types";
export const AddCategory= ({setCategories})=>{

    const [inputValue,setInputValue] = useState('');
    const handlerInputChange = (e) =>{
        setInputValue(e.target.value);
    }
    const handlerSubmit= (e) =>{
        //evitar que se refresque el navegador.
        e.preventDefault();
        //console.log('Submit Hecho');
        if(inputValue.trim().length > 2){
            setCategories(catey => [ inputValue , ...catey]);
            setInputValue('');
        }
        
    }
    return (
        <form onSubmit={handlerSubmit}>
         <input
            type="text"
            value={inputValue}
            onChange={handlerInputChange}
         />
        </form>
    );
}

AddCategory.propTypes={
    setCategories: PropTypes.func.isRequired
}
