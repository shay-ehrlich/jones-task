
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';

import { send } from 'emailjs-com';
import './Form.css';
import {toast } from 'react-toastify';
import Alert from './Alert.js';

export default function Form()
{

  const { register, handleSubmit, formState : {errors}, getValues } = useForm({defaultValues: {
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  }
});


const onSubmit = (e) => {
  // e.preventDefault();
  const values = getValues();
  send(
    'service_vu6bypf',
    'template_2cf835f',
    values,
    'Ucn8-gdQCNlTezZaY'
  )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      toast.success("The email was sent successfully!",{
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
        progress: undefined,
      });
    })
    .catch((err) => {
      toast.error("The email not sent Please try again!",{ position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      draggable: true,
      progress: undefined,
    });
    });
  };

  return (        
          <form className='FormJones' onSubmit={handleSubmit(onSubmit)}>
            <h1>Jones Form</h1>
            <div className='form-group'>            
              <label htmlFor='firstName'>
                <p>First Name:</p>                
              </label>
              <input {...register("firstName",{ required: 'you must input first name', minLength: {value: 2,  message: 'the name must be minimum 2 characters'}, pattern: { value: /^[a-zA-Z]+$/,
               message : 'only alphabet letters'}}) } />
               <ErrorMessage errors={errors} name="firstName" render={({ message }) => <p>{message}</p>}></ErrorMessage>
            </div> 
            <div className='form-group'>            
              <label htmlFor='lastName'>
                <p>Last Name:</p>                
              </label>
              <input {...register("lastName",{ required: 'you must input last name', minLength: {value: 2,  message: 'the name must be minimum 2 characters'}, pattern: { value: /^[a-zA-Z]+$/,
               message : 'only alphabet letters'}})} />
               <ErrorMessage errors={errors} name="lastName" render={({ message }) => <p>{message}</p>}></ErrorMessage>
            </div> 
            <div className='form-group'>            
              <label htmlFor='email'>
                <p>Mail:</p>                
              </label>             
              <input {...register("email",{ required: 'you must input email', pattern: {value: /^\S+@\S+\.[a-z]{2,7}$/, message : 'you need to insert valid mail'}})} />
              <ErrorMessage errors={errors} name="email" render={({ message }) => <p>{message}</p>}></ErrorMessage>
            </div> 
            <div className='form-group'>            
              <label htmlFor='phone'>
                <p>Phone:</p>                
              </label>
              <input {...register("phone",{ required: 'you must input email', minLength: {value: 10, message: "This number is too short"}, maxLength: {value: 10, message: "This number is too long"}, 
              pattern: {value: /^[0-9+-]+$/, message: "This is not a valid phone"}})} />
              <ErrorMessage errors={errors} name="phone" render={({ message }) => <p>{message}</p>}
              />
            </div>    
            <button name = 'button' type='submit'>Submit</button>
            <Alert/>
          </form>  
  );
}

