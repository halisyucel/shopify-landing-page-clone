import React, { useEffect, useRef, useState } from 'react';

export interface AccordionProps {
	title: string;
	children: React.ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({ title, children }) => {
	const panelRef = useRef<HTMLDivElement>(null);
	const [contentIsOpen, setContentIsOpen] = useState(false);
	useEffect(() => {
		if (panelRef.current)
			if (contentIsOpen)
				panelRef.current.style.maxHeight = `${panelRef.current.scrollHeight}px`;
			else panelRef.current.style.maxHeight = '0px';
	}, [contentIsOpen, panelRef]);
	return (
		<div className={'w-full border-b-[1px] border-gray-300 mt-6'}>
			<div
				onClick={() => setContentIsOpen(!contentIsOpen)}
				className={
					'font-helvatica font-medium text-lg mb-4 flex items-center justify-start cursor-pointer md:text-base md:font-bold'
				}
			>
				{title}
				<span className={'flex-1'} />
				<button className={'w-4 h-4 ml-4'}>
					<img
						className={'h-full w-full'}
						src={`/accordion-${contentIsOpen ? 'minus' : 'plus'}-icon.svg`}
					/>
				</button>
			</div>
			<div
				ref={panelRef}
				className={
					'accordion-content w-full font-helvatica font-normal pt-2 overflow-hidden max-h-0'
				}
				style={{ transition: 'max-height 0.2s ease-out' }}
			>
				{children}
			</div>
		</div>
	);
};

export default Accordion;
