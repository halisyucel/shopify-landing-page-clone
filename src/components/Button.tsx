import React from 'react';

export interface ButtonProps {
    children: React.ReactNode;
    className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, className='' }) => {
    return (
        <button className={`h-[52px] px-8 center rounded bg-black text-white font-bold focus:shadow-button ${className}`.trim()}>
            {children}
        </button>
    )
}

export default Button;