import React, { useState } from 'react';
import SignIn from './Form/SignIn'
import './Avtorizatsiya.css'

const Avtorizatsiya = () => {

  return (
    <div className="auth-wrapper">
      <div className="auth-profile">
        <h2>Sign Page </h2>
        <form>
          SIGN IN
          <SignIn/>
          <button type="submit" className='btn'>Yuborish</button>
        </form>
        <br />
        <br />
        {/* Ijtimoiy kirish tugmalarini yoki qo'shimcha komponentlarni qo'shing */}
      </div>
    </div>
  );
};

export default Avtorizatsiya;
