import React from "react";

import { Link as ScrollLink } from "react-scroll";

import { AlignJustify } from "lucide-react";

import Logo from "../img/logo_fishup.png";

export function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
 <nav
    className="relative flex w-full items-center justify-between bg-white py-2 shadow-sm shadow-neutral-700/10 dark:bg-neutral-900 dark:shadow-black/30 md:justify-between lg:flex-wrap lg:justify-start"
    data-te-navbar-ref>
    <div className="flex w-full flex-wrap items-center justify-between px-6">
      <div className="flex items-center">
        <button
          className="block border-0 bg-transparent py-2 pr-2.5 text-neutral-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
          type="button" data-te-collapse-init data-te-target="#navbarSupportedContentY"
          aria-controls="navbarSupportedContentY" aria-expanded="false" aria-label="Toggle navigation">
          <span className="w-7">
            <AlignJustify size={48} color="#059669"/>
          </span>
        </button>

       <a className="text-primary dark:text-primary-400 mr-4" href="#!">
        <img src={Logo} alt="Fishup" className="h-12 w-auto" />
        </a>
      </div>

      <div className="!visible hidden flex-grow basis-[100%] items-center lg:!flex lg:basis-auto"
        id="navbarSupportedContentY" data-te-collapse-item>
        <ul className="mr-auto lg:flex lg:flex-row" data-te-navbar-nav-ref>
          <li data-te-nav-item-ref>
            <ScrollLink to="elements" spy={true} smooth={true} offset={-70} duration={500} className="block py-2 pr-2 text-neutral-500 transition duration-150 ease-in-out hover:text-neutral-600 focus:text-neutral-600 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 dark:disabled:text-white/30 lg:px-2 [&.active]:text-black/80 dark:[&.active]:text-white/80 cursor-pointer">
            Why us?
            </ScrollLink>
          </li>
          <li data-te-nav-item-ref>
          <ScrollLink to="quotes" spy={true} smooth={true} offset={-65} duration={500} className="block py-2 pr-2 text-neutral-500 transition duration-150 ease-in-out hover:text-neutral-600 focus:text-neutral-600 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 dark:disabled:text-white/30 lg:px-2 [&.active]:text-black/80 dark:[&.active]:text-white/80 cursor-pointer">
            Recomendations
            </ScrollLink>
          </li>
          <li className="mb-2 lg:mb-0" data-te-nav-item-ref>
          <ScrollLink to="pricing" spy={true} smooth={true} offset={-65} duration={500} className="block py-2 pr-2 text-neutral-500 transition duration-150 ease-in-out hover:text-neutral-600 focus:text-neutral-600 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 dark:disabled:text-white/30 lg:px-2 [&.active]:text-black/80 dark:[&.active]:text-white/80 cursor-pointer">
            Pricing
            </ScrollLink>
          </li>
          <li className="mb-2 lg:mb-0" data-te-nav-item-ref>
          <ScrollLink to="team" spy={true} smooth={true} offset={-65} duration={500} className="block py-2 pr-2 text-neutral-500 transition duration-150 ease-in-out hover:text-neutral-600 focus:text-neutral-600 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 dark:disabled:text-white/30 lg:px-2 [&.active]:text-black/80 dark:[&.active]:text-white/80 cursor-pointer">
            The team
            </ScrollLink>
          </li>
          <li className="mb-2 lg:mb-0" data-te-nav-item-ref>
          <ScrollLink to="download" spy={true} smooth={true} offset={-65} duration={500} className="block py-2 pr-2 text-neutral-500 transition duration-150 ease-in-out hover:text-neutral-600 focus:text-neutral-600 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 dark:disabled:text-white/30 lg:px-2 [&.active]:text-black/80 dark:[&.active]:text-white/80 cursor-pointer">
            Download the app
            </ScrollLink>
          </li>
        </ul>
      </div>

      <div className="my-1 flex items-center lg:my-0 lg:ml-auto">
        <button type="button"
          className="inline-block rounded bg-emerald-600 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#afa] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_#afa, 0_4px_18px_0_#afaf0] focus:bg-emerald-400 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
          data-te-ripple-init data-te-ripple-color="light">
          Get started
        </button>
      </div>
    </div>
  </nav>    
  </>
  );
}