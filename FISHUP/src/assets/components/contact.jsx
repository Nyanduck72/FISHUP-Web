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
                    <h2 className="mb-12 text-3xl font-bold">Contact us</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="relative mb-6" data-te-input-wrapper-init>
                        <input
                            type="text"
                            className="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                            id="name"
                            placeholder="Name" />
                        <label
                            className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                            for="name"
                            >Name
                        </label>
                        </div>
                        <div className="relative mb-6" data-te-input-wrapper-init>
                        <input
                            type="email"
                            className="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                            id="email"
                            placeholder="Email address" />
                        <label
                            className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                            for="email"
                            >Email address
                        </label>
                        </div>
                        <ValidationError 
                            prefix="Email" 
                            field="email"
                            errors={state.errors}
                        />
                        <div className="relative mb-6" data-te-input-wrapper-init>
                        <textarea
                            className="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                            id="message"
                            rows="3"
                            placeholder="Your message"></textarea>
                        <label
                            for="message"
                            className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.1rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                            >Message
                            </label>
                        </div>
                        <ValidationError 
                            prefix="Message" 
                            field="message"
                            errors={state.errors}
                        />                
                        <button
                        type="button"
                        data-te-ripple-init
                        data-te-ripple-color="light"
                        disabled={state.submitting}
                        className="inline-block w-full rounded bg-emerald-600 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#333] transition duration-150 ease-in-out hover:bg-emerald-700 hover:shadow-[0_8px_9px_-4px_#333,0_4px_18px_0_#333] focus:bg-emerald-600 focus:shadow-[0_8px_9px_-4px_#333,0_4px_18px_0_#333] focus:outline-none focus:ring-0 active:bg-emerald-700 active:shadow-[0_8px_9px_-4px_#333,0_4px_18px_0_#333] dark:shadow-[0_4px_9px_-4px_#333] dark:hover:shadow-[0_8px_9px_-4px_#333,0_4px_18px_0_#333] dark:focus:shadow-[0_8px_9px_-4px_#333,0_4px_18px_0_#333] dark:active:shadow-[0_8px_9px_-4px_#333,0_4px_18px_0_#aaa] lg:mb-0">
                        Send
                        </button>
                    </form>
                    </div>
                </div>
                <div className="md:mb-12 lg:mb-0">
                    <div
                    className="relative h-[700px] rounded-lg shadow-lg dark:shadow-black/20">
                    <iframe
                        src="https://maps.google.com/maps?q=chihuahua&t=&z=13&ie=UTF8&iwloc=&output=embed"
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