import {useFormik} from 'formik';
import * as yup from 'yup';
import { InputField } from '../atoms/Inputs';

const Form = ({children}) => {

  const phoneRegExp =
    /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

  const checkoutSchema = yup.object({
    firstName: yup.string().required("Campo requerido"),
    lastName: yup.string().required("Campo requerido"),
    email: yup.string().required("Campo requerido"),
    password: yup.string().min(8, "La contraseña debe contener al menos 8 caracteres").required("Campo requerido"),
    contact: yup.string().matches(phoneRegExp, 'El teléfono no es válido').required('Campo requerido'),
    address: yup.string().required('Campo requerido'),
  });


  const initialValues = {
    firstName: "",
    lastName:"",
    email:"",
    password:"",
    contact:"",
    address:""
  };

  const formik = useFormik({
    initialValues,
    validationSchema:checkoutSchema,
    onSubmit: (values) => {
      console.log(values);
    }
  })



  return (
    <div className=" w-auto mx-auto p-6 bg-white rounded-md shadow-md md:m-20 sm:m-8">
    <form onSubmit={formik.handleSubmit}>
        <div className="grid gap-4 grid-cols-2">
          <div className="col-span-2 md:col-span-1">
            <InputField
              type="text"
              name="firstName"
              placeholder="Nombre"
              value={formik.values.firstName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              disabled={false}
              size="medium"
              borderColor="blue-500"
            />
            {formik.touched.firstName && formik.errors.firstName ? (
              <p className="text-red-500">{formik.errors.firstName}</p>
            ):null}
          </div>
          <div className="col-span-2 md:col-span-1">
            <InputField
              type="text"
              name="lastName"
              placeholder="Apellido"
              value={formik.values.lastName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              disabled={false}
              size="medium"
              borderColor="blue-500"
            />
            {formik.touched.lastName && formik.errors.lastName && (
              <p className="text-red-500">{formik.errors.lastName}</p>
            )}
          </div>
          <div className="col-span-2 md:col-span-1 sm:col-span-2">
            <InputField
              type="email"
              name="email"
              placeholder="Correo electrónico"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              disabled={false}
              size="medium"
              borderColor="blue-500"
            />
            {formik.touched.email && formik.errors.email && (
              <p className="text-red-500">{formik.errors.email}</p>
            )}
          </div>
          <div className="col-span-2 md:col-span-1 sm:col-span-2">
            <InputField
              type="password"
              name="password"
              placeholder="Password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              disabled={false}
              size="medium"
              borderColor="blue-500"
            />
            {formik.touched.password && formik.errors.password && (
              <p className="text-red-500">{formik.errors.password}</p>
            )}
          </div>
          <div className="col-span-2 md:col-span-1 sm:col-span-2">
            <InputField
              type="text"
              name="contact"
              placeholder="Teléfono"
              value={formik.values.contact}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              disabled={false}
              size="medium"
              borderColor="blue-500"
            />
            {formik.touched.contact && formik.errors.contact && (
              <p className="text-red-500">{formik.errors.contact}</p>
            )}
          </div>
          <div className="col-span-2 md:col-span-1 sm:col-span-2">
            <InputField
              type="text"
              name="address"
              placeholder="Dirección"
              value={formik.values.address}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              disabled={false}
              size="medium"
              borderColor="blue-500"
            />
            {formik.touched.address && formik.errors.address && (
              <p className="text-red-500">{formik.errors.address}</p>
            )}
          </div>
        </div>
        <div className="flex md:justify-end sm:justify-center mt-20">
          <button type="submit" className='bg-primary-500 hover:bg-primary-700 text-white text-${size} font-semibold py-2 px-4 rounded-xl w-full md:w-auto'>Enviar</button>        
        </div>
      </form>
    </div>
  );
};

export default Form;
