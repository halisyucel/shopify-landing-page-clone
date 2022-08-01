import React from 'react';
import Accordion from './Accordion';

const Faqs: React.FC = () => {
    return (
        <section className={'center-col mt-28 mb-28 w-[1025px] lg:w-full lg:px-36 md:!px-14'}>
            <h2 className={'font-helvatica text-shopify-black font-extrabold text-5xl mb-14'}>FAQs</h2>
            <Accordion title={'What is Shopify and how does it work?'}>
                <p>
                    Shopify is a complete commerce platform that lets you start, grow, and manage a business.
                </p>
                <p>
                    With Shopify, you can:
                </p>
                <ul>
                    <li>Create and customize an online store</li>
                    <li>Sell in multiple places, including web, mobile, social media, online marketplaces, brick-and-mortar locations, and pop-up shops</li>
                    <li>Manage products, inventory, payments, and shipping</li>
                </ul>
                <p>
                    Shopify is completely cloud-based and hosted, which means you don’t have to worry about upgrading or maintaining software or web servers. This gives you the flexibility to access and run your business from almost anywhere, including your mobile device.
                </p>
            </Accordion>
            <Accordion title={'How much does Shopify cost?'}>
                <p>
                    Try Shopify free for 14 days, no credit card required.
                </p>
                <p>
                    After your trial expires, choose a pricing plan that suits the size and stage of your business.
                </p>
            </Accordion>
            <Accordion title={'Can I use my own domain name with Shopify?'}>
                <p>
                    Yes, you can use your own domain name with Shopify.
                </p>
                <p>
                    If you have an existing domain name, you can connect it to Shopify from your store’s admin.
                </p>
                <p>
                    If you don’t have a domain name yet, you can either buy one through Shopify or a third-party provider.
                </p>
            </Accordion>
            <Accordion title={'Do I need to be a designer or developer to use Shopify?'}>
                <p>
                    No, you don’t need to be a designer or developer to use Shopify.
                </p>
                <p>
                    Signing up for Shopify allows you to:
                </p>
                <ul>
                    <li>
                        Customize the look and feel of your store with the online store builder and themes.
                    </li>
                    <li>
                        Add features and functionality to your store with apps.
                    </li>
                </ul>
                <p>
                    If you need extra help,&nbsp;
                    <a 
                        href={'https://help.shopify.com/en/questions'}
                        target={'_blank'} 
                        rel={'noopener noreferrer'}
                        className={'text-green-600 underline'}    
                    >
                        you can contact our support team
                    </a>,
                    or visit the&nbsp; 
                    <a 
                        href={'https://experts.shopify.com/'} 
                        target={'_blank'} 
                        rel={'noopener noreferrer'}
                        className={'text-green-600 underline'}   
                    >
                        Shopify Expert Marketplace
                    </a>&nbsp;
                    to search for and hire a certified Shopify expert.
                </p>
            </Accordion>
        </section>
    );
}

export default Faqs;