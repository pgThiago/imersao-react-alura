import React from 'react';

const FormField = ({ onChange, type, name, label, value }) => {

    return(
        <div>
           
            <label>
            
            {label}:

            {

                (type === 'areaDoTexto' ?                                                       // É do tipo textArea? Se sim
                <textarea name={name} value={value} onChange={onChange} /> :                   // retorna isso, se não
                <input type={type} name={name} value={value} onChange={onChange} />)         // retorna isso

            }             

            </label>

        </div>
    )
    
}

export default FormField;