import React from 'react';
import { useForm } from 'react-hook-form';
import './StyleSign.css';

const SignUp = ({ onSubmit }) => {
  const { register, handleSubmit, formState: { errors }, watch } = useForm();

  const onInternalSubmit = (data) => {
    onSubmit(data); // Form ma'lumotlarini otasiga o'tkazish
  };

  const password = watch('password', '');
  const passwordConfirmation = watch('passwordConfirmation', '');

  return (
    <>
      <h1 className='title-Sign'>Sign Up</h1>
      <form onSubmit={handleSubmit(onInternalSubmit)}>
        <article className="wrapper-form">
          <input
            className="emails"
            type="text"
            placeholder="Email kiriting..."
            {...register('email', {
              required: 'Email is required',
              minLength: {
                value: 10,
                message: 'Email must be at least 10 characters',
              },
            })}
          />
          {errors.email && (
            <p className="error-message">{errors.email.message}</p>
          )}

          <input
            className="password1"
            type="password"
            placeholder="Password kiriting ..."
            {...register('password', {
              required: 'Password is required',
              minLength: {
                value: 8,
                message: 'Password must be at least 8 characters',
              },
            })}
          />
          {errors.password && (
            <p className="error-message">{errors.password.message}</p>
          )}

          <input
            className="password2"
            type="password"
            placeholder="Passwordni Takrorlang..."
            {...register('passwordConfirmation', {
              validate: (value) =>
                value === password || 'Passwords do not match',
            })}
          />
          {errors.passwordConfirmation && (
            <p className="error-message">
              {errors.passwordConfirmation.message}
            </p>
          )}
        </article>
        <button type="submit" className='btn'>Sign Up</button>
      </form>
    </>
  );
};

export default SignUp;
