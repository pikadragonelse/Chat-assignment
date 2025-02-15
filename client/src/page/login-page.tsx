import React from 'react';
import { LoginForm } from '../component/form/login-form';
import BG_LOGIN_PAGE from '../assets/bg-login-page.png';

export const LoginPage = () => {
  return (
    <div className="flex items-center justify-center h-full bg-[#009e84] relative">
      <div className="z-0 absolute w-full h-full">
        <img src={BG_LOGIN_PAGE} alt="" className="object-cover w-full h-full" />
        <div className="bg-black/75 absolute inset-0"></div>
      </div>
      <LoginForm />
    </div>
  );
};
