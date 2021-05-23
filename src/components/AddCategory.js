import React, { useState } from 'react'


export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('')

    // el valor del input del e.target.value se lo pasas los valores al setInputValue
    const handleInputChange = (e) =>{        
        setInputValue(e.target.value);        
    }

   
    // La funcion escucha submit y le asigna a las categories con el setCategories por las props
    const handleSubmit = (e) => {
        e.preventDefault();

        if( inputValue.trim().length > 2){
            setCategories((cats) => [inputValue, ...cats ]); // 
            setInputValue(''); //Limpias el input
        }        
        
    }

    return (
      
           <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={inputValue}
                onChange={ handleInputChange }
            />
           </form>
            
        
    )
}
