import React from "react";
export function Card() {
  return (
    <div className="w-full bg-white border border-emerald-600 rounded-lg shadow dark:bg-neutral-700 dark:border-none p-2 md:p-4">
      <div className="items-center justify-between">
        <h5 className="text-lg md:text-xl font-bold leading-none text-emerald-600 uppercase text-center pb-2">
          FISHTANKS
        </h5>
      </div>
      <div id="id">
        <ul className="uppercase divide-y divide-gray-200 dark:divide-gray-700">
          <li className="flex flex-col md:flex-row md:items-center md:justify-between">
            <h1
              className="mb-2 md:mb-0 mr-2 md:mr-4 text-sm md:text-base"
              id="nombrePecera"
            >
              NAME
            </h1>
            <div className="flex-1 text-gray-900 dark:text-white md:flex md:items-center">
              <div className="mr-2 md:mr-4">
                <p className="text-sm md:text-base">TEMP</p>
                <p id="temp" className="text-base md:text-lg dark:text-emerald-400">
                  8
                </p>
              </div>
              <div>
                <p className="text-sm md:text-base">pH</p>
                <p id="ph" className="text-base md:text-lg dark:text-emerald-400">
                  7
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

