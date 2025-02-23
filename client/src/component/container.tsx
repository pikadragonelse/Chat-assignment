import React from 'react';
import BG_LOGIN_PAGE from '../assets/bg-login-page.png';

export type Container = { children: React.ReactNode };
export const Container = ({ children }: Container) => {
  return (
    <div className="flex items-center justify-center h-full bg-primary relative">
      <div className="z-0 absolute w-full h-full">
        <img src={BG_LOGIN_PAGE} alt="" className="object-cover w-full h-full" />
        <div className="bg-black/75 absolute inset-0"></div>
      </div>
      <div className="z-10">{children}</div>
    </div>
  );
};
