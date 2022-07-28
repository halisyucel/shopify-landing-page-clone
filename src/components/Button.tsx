import React from 'react';

export interface ButtonProps {
    children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children }) => {
    return (
        <button className={'h-[52px] px-8 center rounded bg-black text-white font-bold focus:shadow-button'}>
            {children}
        </button>
    )
}

export default Button;