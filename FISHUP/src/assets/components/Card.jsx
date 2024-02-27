import React from "react";
function Card() {
  return (
    <div class="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-2 md:p-4">
      <div class="items-center justify-between">
        <h5 class="text-lg md:text-xl font-bold leading-none text-teal-200 uppercase">
          Peceras
        </h5>
      </div>
      <div id="id">
        <ul class="uppercase divide-y divide-gray-200 dark:divide-gray-700">
          <li class="flex flex-col md:flex-row md:items-center md:justify-between">
            <h1
              class="mb-2 md:mb-0 mr-2 md:mr-4 text-sm md:text-base"
              id="nombrePecera"
            >
              Nombre
            </h1>
            <div class="flex-1 text-gray-900 dark:text-white md:flex md:items-center">
              <div class="mr-2 md:mr-4">
                <p class="text-sm md:text-base">Temperatura</p>
                <p id="temp" class="text-base md:text-lg dark:text-blue-500">
                  8
                </p>
              </div>
              <div>
                <p class="text-sm md:text-base">pH</p>
                <p id="ph" class="text-base md:text-lg dark:text-blue-500">
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

export default Card;
