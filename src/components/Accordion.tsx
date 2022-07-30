import React,{useEffect, useRef, useState} from 'react';

export interface AccordionProps {
    title: string;
    children: React.ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({ title, children }) => {
    const virtualContentRef = useRef<HTMLDivElement>(null);
    const [contentIsOpen, setContentIsOpen] = useState(false);
    const [virtualHeight, setVirtualHeight] = useState(0);
    useEffect(() => {
        if (virtualContentRef.current)
            setVirtualHeight(virtualContentRef.current.offsetHeight + 14);
    }, [virtualContentRef]);
    return (
        <React.Fragment>
            <div className={'w-full border-b-[1px] border-gray-300 mt-6'}>
                <div 
                    onClick={() => setContentIsOpen(!contentIsOpen)}
                    className={'font-helvatica font-medium text-lg mb-4 flex items-center justify-start cursor-pointer'}
                >
                    {title}
                    <span className={'flex-1'} />
                    <button className={'w-4 h-4'}>
                        <img 
                            className={'h-full w-full'}
                            src={`/accordion-${contentIsOpen ? 'minus' : 'plus'}-icon.svg`}
                        /> 
                    </button>
                </div>
                <div 
                    className={`accordion-content w-full font-helvatica font-normal pt-2 transition-all duration-[400ms] overflow-clip`}
                    style={{ height: contentIsOpen ? `${virtualHeight}px` : '0' }}    
                >
                    {children}
                </div>
            </div>
            <div ref={virtualContentRef} className={'fixed accordion-content z-[-1] opacity-0'}>
                {children}
            </div>
        </React.Fragment>
    );
}

export default Accordion;