import { Link } from 'wouter'

import Logo from '../img/logo_fishup.png';

export function SignIn() {
    return (
    <>
        <div className="flex items-center min-h-screen p-6 bg-gray-50 dark:bg-neutral-900">
            <div className="flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-neutral-800">
                <div className="flex flex-col overflow-y-auto md:flex-row">
                    <div className="h-32 md:h-auto md:w-1/2">
                        <img
                            aria-hidden="true"
                            className="object-cover w-full h-full"
                            src={Logo}
                            alt="Fishup Logo"
                        />
                    </div>
                    <div className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
                        <div className="w-full">
                            <h1 className="mb-4 text-3xl text-center font-semibold text-neutral-400 dark:text-neutral-50">Login</h1>
                            <form>
                                <label className="block text-sm">
                                    <span className="text-gray-700 text-xl dark:text-neutral-400">Email</span>
                                    <input
                                        type="email"
                                        className="block w-full mt-1 text-sm dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-50 border-neutral-300 rounded-md shadow-sm dark:focus:ring-neutral-900 dark:focus:border-neutral-900 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"
                                        placeholder="example@mail.com"
                                    />
                                </label>
                                <label className="block mt-4 text-sm">
                                    <span className="text-gray-700 text-xl dark:text-neutral-400">Password</span>
                                    <input
                                        type="password"
                                        className="block w-full mt-1 text-sm dark:border-neutral-200 dark:bg-neutral-800 dark:text-neutral-50 border-neutral-300 rounded-md shadow-sm dark:focus:ring-neutral-900 dark:focus:border-neutral-900 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"
                                        placeholder="***************"
                                    />
                                </label>
                                <Link
                                    href='/Dashboard'
                                    className="block w-full py-2 mt-6 text-sm font-semibold text-center text-white bg-emerald-600 rounded-md shadow-sm hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-emerald-200 focus:ring-offset-2"
                                >
                                    Login
                                </Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    );
}