import { Link as ScrollLink } from "react-scroll";

import { Navbar } from './navbar';
import { ContactForm } from './contact';

import { Server, BarChart4Icon, AlarmClock, ActivitySquare} from 'lucide-react';

import hero from '../img/hero.jpg';
import pricingImg from '../img/pricingImg.png';

import Marco from '../img/team/Marco.jpeg';
import Alex from '../img/team/Alex.jpeg';
import Chary from '../img/team/Chary.jpeg';


export function Landing() {
  return (
    <>
    <header className="fixed w-full z-10">
    <Navbar />
    </header>
    <section className="mb-10">
  <div className="px-6 py-12 text-center md:px-12 lg:text-left">
    <div className="w-100 mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl xl:px-32">
        <br />
        <br />
      <div className="grid items-center lg:grid-cols-2">
        <div className="mb-12 2xs:mt-22 xs:mt-2 sm:mt-10 md:mt-10 lg:mt-0 lg:mb-0">
          <div
            className="block rounded-lg bg-[hsla(0,0%,100%,0.55)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-[hsla(0,0%,5%,0.55)] dark:shadow-black/20 md:px-12 lg:-mr-14 backdrop-blur-[30px]">
            <h1 className="mt-2 mb-16 text-4xl font-bold tracking-tight md:text-5xl xl:text-6xl">
              Caring for your fishes <br /><span className="text-emerald-600">has never been easier</span>
            </h1>
            <a className="mb-2 inline-block rounded bg-emerald-600 px-12 pt-4 pb-3.5 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#aaffaa] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_#aaffaaf0, 0_4px_18px_0_#aaffaa30] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_#aaffaa30] md:mr-2 md:mb-0"
              data-te-ripple-init data-te-ripple-color="light" href="#!" role="button">Get Started</a>
            <ScrollLink to={"elements"} spy={true} smooth={true} offset={-70} duration={300} className="inline-block rounded px-12 pt-4 pb-3.5 text-sm font-medium uppercase leading-normal text-primary transition duration-150 ease-in-out hover:bg-neutral-500 hover:bg-opacity-10 hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700 dark:hover:bg-neutral-700 dark:hover:bg-opacity-40"
              data-te-ripple-init data-te-ripple-color="light" href="#elements" role="button">Learn more</ScrollLink>
          </div>
        </div>
        <div className="md:mb-12 lg:mb-0">
          <img src= {hero}
            className="w-full rounded-lg shadow-lg dark:shadow-black/20" alt="" />
        </div>
      </div>
    </div>
  </div>
    </section>
    <section id='elements'>
        <div className="items-center max-w-screen-xl px-4 py-8 mx-auto lg:grid lg:grid-cols-4 lg:gap-16 xl:gap-24 lg:py-24 lg:px-6">
            <div className="col-span-2 mb-8">
                <p className="text-lg font-medium text-emerald-600 dark:text-emerald-400">The new way to care for your fishies!</p>
                <h2 className="mt-3 mb-4 text-3xl font-extrabold tracking-tight text-gray-900 md:text-3xl dark:text-white">Our device helps pet-fish owners at keeping track of it's enviroment.</h2>
                <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">By keeping track of the state of your fishtank, you can stop stressing about your little goldfish!</p>
                <div className="pt-6 mt-6 space-y-4 border-t border-gray-200 dark:border-gray-700">
                    <div>
                      <ScrollLink to={"download"} spy={true} smooth={true} offset={-70} duration={500} className="inline-flex items-center text-base font-medium text-emerald-600 hover:text-emerald-600 dark:text-emerald-400 dark:hover:text-emerald-600 cursor-pointer">
                        Download our app
                        <svg className="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                      </ScrollLink>
                    </div>
                    <div>
                      <ScrollLink to={"pricing"} spy={true} smooth={true} offset={-70} duration={500} className="inline-flex items-center text-base font-medium text-emerald-600 hover:text-emerald-600 dark:text-emerald-400 dark:hover:text-emerald-600 cursor-pointer">
                          Buy the device
                          <svg className="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                      </ScrollLink>
                      </div>
                </div>
            </div>
            <div className="col-span-2 space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0">
                <div>
                    <Server size={48} color="#059669" />
                    <h3 className="mb-2 text-2xl font-bold dark:text-white">99.99% Up-time</h3>
                    <p className="font-light text-gray-500 dark:text-gray-400">Low server down-time.</p>
                </div>
                <div>
                    <BarChart4Icon size={48} color="#059669" />
                    <h3 className="mb-2 text-2xl font-bold dark:text-white">Data readings</h3>
                    <p className="font-light text-gray-500 dark:text-gray-400">Sensors allow the device to capture temperature and pH readings.</p>
                </div>
                <div>
                    <AlarmClock size={48} color="#059669" />
                    <h3 className="mb-2 text-2xl font-bold dark:text-white">Automatic feeding</h3>
                    <p className="font-light text-gray-500 dark:text-gray-400">Set the feeding hours of your fish.</p>
                </div>
                <div>
                    <ActivitySquare size={48} color="#059669" />
                    <h3 className="mb-2 text-2xl font-bold dark:text-white">In-depth monitoring.</h3>
                    <p className="font-light text-gray-500 dark:text-gray-400">Graphs display the data.</p>
                </div>
            </div>
        </div>
      </section>
    <section className="bg-gray-50 dark:bg-neutral-700" id='quotes'>
    <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-24 lg:px-6">
      <div className="max-w-screen-md mx-auto mb-4 text-center lg:mb-12">
        <h2 className="mb-4 pt-12 text-3xl text-center font-extrabold tracking-tight text-gray-900 dark:text-white">Here are some reviews</h2>
        <p className="mb-2 font-light text-center text-gray-500 sm:text-xl dark:text-gray-400">From previous customers of <span className='text-emerald-600 font-bold'>FISHUP</span></p>
      </div>
      <div className="items-center max-w-screen-xl px-4 pb-8 mx-auto lg:grid lg:grid-cols-4 lg:gap-16 xl:gap-24 lg:py-8 lg:px-6">
        <div className="col-span-2 mb-8">
        <figure className="max-w-screen-md mx-auto">
                <svg className="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="#059669"/>
                </svg> 
                <blockquote>
                    <p className="text-xl text-center font-medium text-gray-900 md:text-2xl dark:text-white">"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ullam possimus corporis omnis, laboriosam obcaecati beatae ducimus? Et odit quas earum esse officia voluptates! Perferendis adipisci doloremque nobis ab dolorum."</p>
                </blockquote>
                <figcaption className="flex items-center justify-center mt-6 space-x-3">
                    <img className="w-8 h-8 rounded-full" src="https://pm1.aminoapps.com/7707/0d88ff120e503da55a1cf8de010ae296e3f89a1cr1-720-794v2_00.jpg" alt="profile picture"/>
                    <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                        <div className="pr-3 font-medium text-gray-900 dark:text-white">Pancho Linazas</div>
                        <div className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">Manager of the "Buscando a Memo" pt-store</div>
                    </div>
                </figcaption>
            </figure>
        </div>
          <div className="col-span-2 mb-8">
          <figure className="max-w-screen-md mx-auto">
                <svg className="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="#059669"/>
                </svg> 
                <blockquote>
                    <p className="text-xl text-center font-medium text-gray-900 md:text-2xl dark:text-white">"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, quae. Iusto laudantium, modi perferendis sequi, quis nihil nisi minus animi aliquam voluptatum maiores mollitia molestias, soluta atque beatae quidem commodi."</p>
                </blockquote>
                <figcaption className="flex items-center justify-center mt-6 space-x-3">
                    <img className="w-8 h-8 rounded-full" src="https://images.milenio.com/bFpy7HL5-yMTS4pGXfGFYoOutiY=/345x237/uploads/media/2020/11/14/alejo-garza-el-valiente-ve_125_0_924_575.jpg" alt="profile picture"/>
                    <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                        <div className="pr-3 font-medium text-gray-900 dark:text-white">Ramiro Suarez</div>
                        <div className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">CEO of Hoteles Ramiro (y dueño de un gran acuario en su casa)</div>
                    </div>
                </figcaption>
            </figure>
          </div>
    </div>
    </div>
    </section>
    <section className="bg-white dark:bg-neutral-800" id='pricing'>
        <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-24 lg:px-6">
            <div className="max-w-screen-md mx-auto mb-8 text-center lg:mb-12">
                <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">Buy the device</h2>
                <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">For only <span className='text-emerald-600 font-bold'>$XXX</span>, you can get FISHUP at any of our authorized distributers</p>
                <div className="max-w-screen-md mx-auto text-center lg:mb-12">
                <img src={ pricingImg } alt="Device sold" />
                </div>
            </div>
        </div>
      </section>
      <section className="bg-white dark:bg-neutral-700" id='team'>
        <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-24 lg:px-6">
            <h2 className="mb-4 text-3xl text-center font-extrabold tracking-tight text-gray-900 dark:text-white">Meet the Team</h2>
            <p className="mb-5 font-light text-center text-gray-500 sm:text-xl dark:text-gray-400">Hi!, we're the team behind <span className='text-emerald-600 font-bold'>FISHUP</span></p>
        <div className="grid-cols-1 sm:grid md:grid-cols-3 ">
  <div
    className="mx-3 mt-6 flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 sm:shrink-0 sm:grow sm:basis-0">
      <img
        className="rounded-t-lg"
        src={ Marco }
        alt="Marco Antonio Duarte Corona" />
    <div className="p-6">
      <h5
        className="mb-2 text-xl font-medium font-bold text-center leading-tight text-neutral-800 dark:text-neutral-50">
        Marco Antonio Duarte Corona
      </h5>
      <p className="mb-4 text-base text-center text-neutral-600 dark:text-neutral-200">
        Back-end Developer & Dashboard Designer 
      </p>
    </div>
  </div>
  <div
    className="mx-3 mt-6 flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 sm:shrink-0 sm:grow sm:basis-0">
      <img
        className="rounded-t-lg"
        src={ Alex }
        alt="Jesús ALejandro González Luján" />
    <div className="p-6">
      <h5
        className="mb-2 text-xl text-center font-bold font-medium leading-tight text-neutral-800 dark:text-neutral-50">
        Jesús Alejandro González Luján
      </h5>
      <p className="mb-4 text-base text-center text-neutral-600 dark:text-neutral-200">
        Front-end Developer & Designer
      </p>
    </div>
  </div>
  <div
    className="mx-3 mt-6 flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 sm:shrink-0 sm:grow sm:basis-0">
      <img
        className="rounded-t-lg"
        src={ Chary }
        height={ 1024 }
        alt="Carlos Abraham Jiménez Carrera" />
    <div className="p-6">
      <h5
        className="mb-2 text-xl text-center font-bold font-medium leading-tight text-neutral-800 dark:text-neutral-50">
        Carlos Abraham Jiménez Carrera
      </h5>
      <p className="mb-4 text-base text-center text-neutral-600 dark:text-neutral-200">
        IoT Specialist and Back-end Developer
      </p>
    </div>
  </div>
</div>        
</div>
</section>
    <section className="bg-gray-50 dark:bg-neutral-800" id='contact'>
      <ContactForm />
    </section>

    <section className="bg-gray-50 dark:bg-neutral-700" id='download'>
        <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-16 lg:px-6">
            <div className="max-w-screen-sm mx-auto text-center">
                <h2 className="mb-4 text-3xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white">Download the App</h2>
                <p className="mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg">Get the <span className='text-emerald-600 font-bold'>FISHUP</span> app here!</p>
                <a href="#" className="text-white bg-emerald-600 hover:bg-emerald-600 focus:ring-4 focus:ring-emerald-600 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-emerald-600 dark:hover:bg-emerald-600 focus:outline-none dark:focus:ring-emerald-600">DOWNLOAD NOW!</a>
            </div>
        </div>
    </section>
    <footer className="bg-white dark:bg-neutral-800">
        <div className="max-w-screen-xl p-4 py-6 mx-auto lg:py-16 md:p-8 lg:p-10">
            <div className="text-center">
                <span className="block text-sm text-center text-gray-500 dark:text-gray-400">©2023 FISHUP™. Built with <a href="https://es.react.dev" className="text-emerald-600 hover:underline dark:text-emerald-400">React</a> and <a href="https://tailwindcss.com" className="text-emerald-600 hover:underline dark:text-emerald-400">Tailwind CSS</a>.
                </span>
                <ul className="flex justify-center mt-5 space-x-5">
                    <li>
                        <a href="https://github.com/Nyanduck72/FISHUP-Web" className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" /></svg>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clip-rule="evenodd" /></svg>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </footer>
    </>
  )
}