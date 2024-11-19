import {useFormik} from 'formik';
import * as yup from 'yup';
import { InputField } from '../atoms/Inputs';
import { Children, cloneElement } from 'react';

/*
  pasos

  1. crear esquema de checkout para cada campo x 
  2. crear initial values x
  3. añadir props faltantes a campos x
  4. añadir contenedores para campos conforme al valor de colNumbers x
  5. añadir header y footer (el footer contiene buttons y links) x
*/

const FormHeader = ({children}) => {
  return <div className='text-center mt-5 mb-7'>
    {children}
  </div>
}

const FormFooter = ({children}) => {
  return <div className='flex flex-col justify-center gap-5 mt-5 mb-3'>
    {children}
  </div>
}

const Form = ({children, colNumbers}) => {

  // children.forEach(item => console.log(item));

  const filteredInputs = children.filter(element => element.type.name == "InputField" );
  const filteredHeader = children.filter(element => element.type.name == "FormHeader" );
  const filteredFooter = children.filter(element => element.type.name == "FormFooter" );

  const phoneRegExp =
    /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

  // 1. crear esquema validacion
  const inputSchema = {};

  filteredInputs.forEach(input => {
    const key = input.props.name;
    Object.defineProperty(inputSchema, key, {
      value: yup.string().required('Campo requerido'),
      writable: true,
      enumerable: true,
      configurable: true,
    });
  });

  const checkoutSchema = yup.object(inputSchema);

  // 2. crear initial values
  const initialValues = {};

  filteredInputs.forEach(input => {
    const key = input.props.name;
    Object.defineProperty(initialValues, key, {
      value:"",
      writable: true,
      enumerable: true,
      configurable: true,
    });
  });

  // Configura objeto formik para realizar las validaciones del form
  const formik = useFormik({
    initialValues,
    validationSchema:checkoutSchema,
    onSubmit: (values) => {
      console.log(values);
    }
  })

  // Añade los valores de props restantes de los InputFields y envuelve los inputs en contenedores
  const childrenWithAddedProps = Children.map(filteredInputs, child => {
    const modifiedChild = cloneElement(child, {
      value: formik.values[child.props.name],
      onChange: formik.handleChange,
      onBlur: formik.handleBlur,
    });
    
    return <div className={`${colNumbers == 2 ? 'sm:col-span-2 md:col-span-1' : 'sm:col-span-1' }`}>
        {modifiedChild}
        {formik.touched[[child.props.name]] && formik.errors[child.props.name] ? (
          <p className="text-red-500">{formik.errors[child.props.name]}</p>
        ):null}
    </div>
  });

  return (
    <div className=" w-auto mx-auto p-6 bg-white rounded-md shadow-md md:m-20 sm:m-8">
    <form onSubmit={formik.handleSubmit}>
        {filteredHeader}
        <div className={`${colNumbers == 2 ? 'grid gap-4 grid-cols-2' : 'flex flex-col gap-4'}`}>
          {childrenWithAddedProps}
        </div>
        {filteredFooter}
      </form>
    </div>
  );
};

export  {Form, FormHeader, FormFooter};
