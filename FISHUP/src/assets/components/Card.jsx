import React from "react";
function Card() {
  return (
    <div class="w-full max-w-96 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div class="items-center justify-between ">
        <h5 class="text-xl font-bold leading-none text-teal-200 uppercase">
          Peceras
        </h5>
      </div>
      <div id="id">
        <ul class="uppercase divide-y divide-gray-200 dark:divide-gray-700">
          <li class="">
            <div class="flex items-center">
              <h1 className="mr-10" id="nombrePecera">Nombre</h1>
              <div class="flex-1 text-gray-900 dark:text-white">
                <p className="text-xl">Temperatura</p>
                <p id="temp" className="text-lg">
                  8
                </p>
              </div>
              <div class="text-gray-900 dark:text-white">
                <p className="text-xl ">pH</p>
                <p id="ph" className="text-lg">
                  7
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div>Division</div>
    </div>
  );
}

export default Card;
