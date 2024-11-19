import { useState } from 'react'

/*
    Propiedades:
     - placeholder
     - value
     - onChange
     - disabled
     - size
     - tipo
     - borderColor


    Funciones:
     - Manejo de tamaño
     - Iconos antes o despues del input
     - Adaptabilidad
     - Evaluar input
     - otros eventos

    Tipos
     - text
     - email
     - password

     - checkbox
     - radio
     - number
     - url
     - date
     - file
     - submit

*/

// Componente para tipos text, email y password
const InputField = ({type,name, placeholder, value, onChange, onBlur, disabled, size, borderColor="#e5e7eb"}) => {
  const [nombre, setNombre] = useState("");  
  const getSizeClasses = () => {
        switch (size) {
            case 'small':
              return 'text-sm p-2';
            case 'medium':
                return 'text-md p-4';
            case 'large':
              return 'text-lg p-6';
            default:
              return 'p-3';
          }
    };


  return (
    <input type={type} name={name} id={name} placeholder={placeholder} value={value} onChange={onChange} onBlur={onBlur} disabled={disabled} 
        className={`border rounded ${getSizeClasses()}  ${disabled ? 'bg-gray-200' : 'bg-white'} border-${borderColor} w-full`} 
    />
  )
}

export {InputField};