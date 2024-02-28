import React from 'react';
import { useForm, ValidationError } from '@formspree/react';


export function ContactForm() {
    const [state, handleSubmit] = useForm("xoqgwakw");
    if (state.succeeded) {
        alert("Thanks for contacting us!");
    }        
    return (
        <>
        <div className="container my-24 mx-auto md:px-6">
        <section className="mb-32 text-center">
            <div className="py-12 md:px-12">
            <div className="container mx-auto xl:px-32">
                <div className="grid items-center lg:grid-cols-2">
                <div className="mb-12 md:mt-12 lg:mt-0 lg:mb-0">
                    <div
                    className="relative z-[1] block rounded-lg bg-[hsla(0,0%,100%,0.55)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] backdrop-blur-[30px] dark:bg-[hsla(0,0%,5%,0.7)] dark:shadow-black/20 md:px-12 lg:-mr-14">
                    <h2 className="mb-12 text-3xl font-bold text-emerald-600">Contact us</h2>
                        <form onSubmit={handleSubmit}>
                        <input
                            id="email"
                            type="email" 
                            name="email"
                            placeholder='Email address'
                            className='w-full p-2 my-2 border-1 transition ease-in-out rounded-md dark:border-transparent focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-transparent caret-emerald-600'
                        />
                        <ValidationError 
                            prefix="Email" 
                            field="email"
                            errors={state.errors}
                        />
                        <br />
                        <textarea
                            id="message"
                            name="message"
                            className='w-full p-2 my-2 border-1 transition ease-in-out rounded-md dark:border-transparent focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-transparent caret-emerald-600 resize-none h-32'
                        />
                        <ValidationError 
                            prefix="Message" 
                            field="message"
                            errors={state.errors}
                        />
                        <br />
                        <button type="submit" className='w-full p-2 my-2 border-1 transition ease-in-out rounded-md dark:border-transparent focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-transparent caret-emerald-600' disabled={state.submitting}>
                            Submit
                        </button>
                        </form>
                    </div>
                </div>
                <div className="md:mb-12 lg:mb-0">
                    <div
                    className="relative h-[700px] rounded-lg shadow-lg dark:shadow-black/20">
                    <iframe
                        src="https://maps.google.com/maps?q=28.736865,-106.096897&hl=es;t=&z=17&ie=UTF8&iwloc=&output=embed"
                        className="absolute left-0 top-0 h-full w-full rounded-lg"
                        frameborder="0"
                        allowfullscreen></iframe>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
        </div>
        </>
    )
}