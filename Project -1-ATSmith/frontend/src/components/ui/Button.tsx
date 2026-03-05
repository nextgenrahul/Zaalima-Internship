import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
};

const Button: React.FC<ButtonProps> = ({ children, onClick, type = 'button' }) => (
  <button
    type={type}
    onClick={onClick}
    className="px-4 py-2 bg-primary text-white rounded hover:bg-primary/90 transition"
  >
    {children}
  </button>
);

export default Button;