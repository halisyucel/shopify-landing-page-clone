import React from 'react';
import Button from './Button';
import TextInput from './TextInput';

export interface FreeTrailProps {
    className?: string;
}

const FreeTrail: React.FC<FreeTrailProps> = ({ className='' }) => {
    return (
        <section className={`center-col mb-8 ${className}`}>
            <div className={'center w-full'}>
                <TextInput
                    label={'Email address'}
                    placeholder={'Enter your email address'}
                    className={'mr-4 flex-1'}
                />
                <Button>
                    Start free trail
                </Button>
            </div>
            <p className={'font-helvatica text-xs text-center mt-8'}>
                Try Shopify free for 14 days, no credit card required. By entering your email, you agree to receive marketing emails from Shopify.
            </p>
        </section>
    )
};

export default FreeTrail;