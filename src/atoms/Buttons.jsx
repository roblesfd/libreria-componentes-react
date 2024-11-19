/*
    Lista de componentes
    -Boton Normal
    -Boton con texto e icono
    -Boton de enlace
    -Boton Flotante
    -Boton con icono
*/


//Boton normal
//Props:
// color,
// bgColor,
// padding,
// fontSize,
// border,
// text,
// onClick,
const Button = ({bgColor, color, text, size})=>{
    const buttonClasses = `bg-${bgColor} hover:bg-${bgColor}-700 text-${color} text-${size} font-semibold py-2 px-4 rounded-xl`;
    return <button type="button" className={buttonClasses}>{text}</button>
}

const ButtonSubmit = ({bgColor, color, text, size})=>{
  const buttonClasses = `bg-${bgColor} hover:bg-${bgColor}-700 text-${color} text-${size} font-semibold py-2 px-4 rounded-xl`;
  return <button type="submit" className={buttonClasses}>{text}</button>
}

//Boton con texto e icono
const ButtonTextIcon = (props) => {
    const buttonClasses = `justify-center  p-${props.padding} text-${props.fontSize} border-${props.border} bg-${props.bgColor} text-${props.color} rounded-lg font-semibold cursor-pointer transition duration-300 hover:bg-${props.bgColor}-700 active:bg-${props.bgColor}-900 disabled:opacity-60 disabled:cursor-not-allowed`;
  
    return (
      <button className={buttonClasses} onClick={props.onClick} disabled={props.disabled}>
        <span className="mr-4">{props.icon}</span>
        {props.text}
      </button>
    );
  };
//Boton de enlace
const ButtonLink = (props) => {
    const buttonClasses = `inline-block p-${props.padding} text-${props.fontSize} text-black border-none cursor-pointer transition duration-300 ${props.disabled ? 'opacity-60 cursor-not-allowed' : ''}`;
  
    return (
      <a href={props.href} className={buttonClasses} onClick={props.onClick} disabled={props.disabled}>
        {props.text}
      </a>
    );
  };
//Boton flotante
const ButtonFloating = (props) => {
    const buttonClasses = `flex items-center justify-center w-${props.widthHeight} h-${props.widthHeight} fixed bottom-5 right-5 rounded-full bg-${props.bgColor} text-${props.color} text-${props.fontSize} cursor-pointer shadow-md focus:outline-none z-10 hover:bg-${props.bgColor}-700`;
  
    return (
      <button className={buttonClasses} onClick={props.onClick}>
        {props.text}
      </button>
    );
  };

  const ButtonIcon = (props) => {
    const buttonClasses = `flex items-center justify-center w-${props.widthHeight} h-${props.widthHeight} rounded-full  bg-${props.bgColor} text-${props.color} text-${props.fontSize} cursor-pointer shadow-lg focus:outline-none`;
  
    return (
      <button className={buttonClasses}>
        <span>{props.icon}</span>
      </button>
    );
  };

  

export {Button, ButtonSubmit, ButtonTextIcon, ButtonLink, ButtonFloating, ButtonIcon};