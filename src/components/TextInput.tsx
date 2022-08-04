import React, { useState } from 'react';

export interface TextInputProps {
	label: string;
	placeholder: string;
	className?: string;
}

const TextInput: React.FC<TextInputProps> = ({ label, placeholder, className = '' }) => {
	const [value, setValue] = useState('');
	return (
		<label className={`relative ${className}`}>
			<span
				className={`absolute left-4 top-2 transition-all font-helvatica text-xs text-gray-600 overflow-hidden ${
					value === '' ? 'h-0' : 'h-4'
				}`}
			>
				{label}
			</span>
			<input
				value={value}
				type={'text'}
				spellCheck={false}
				autoComplete={'off'}
				placeholder={placeholder}
				onChange={(e) => setValue(e.target.value)}
				className={`h-[52px] w-full font-helvatica transition-all bg-white shadow-input rounded p-4 outline-none ${
					value === '' ? 'pt-4' : 'pt-8'
				}`}
			/>
		</label>
	);
};

export default TextInput;
