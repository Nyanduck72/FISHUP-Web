import React from "react";

function Table() {
  return (
    <div class="relative overflow-x-auto shadow-md">
      <table class=" w-full text-sm text-left rtl:text-right border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th id="id" scope="col" class="px-6 py-3">
              Nombre/Numero
            </th>
            <th id="localizacion" scope="col" class="px-6 py-3">
              Localizacion
            </th>
            <th id="estado" scope="col" class="px-6 py-3">
              Estado
            </th>
          </tr>
        </thead>
        <tbody>
          <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Pecera 1
            </th>
            <td class="px-6 py-4">Pasillo 2</td>
            <td class="px-6 py-4 font-medium text-blue-600 dark:text-blue-500">Activo</td>
          </tr>
          <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Pecera 2
            </th>
            <td class="px-6 py-4">Entrada a la izquierda</td>
            <td class="px-6 py-4 font-medium text-blue-600 dark:text-blue-500">Activo</td>
          </tr>
          <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Pirañas
            </th>
            <td class="px-6 py-4">Pasillo 5</td>
            <td class="px-6 py-4 font-medium text-blue-600 dark:text-blue-500">Activo</td>
          </tr>
          <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Pez payaso
            </th>
            <td class="px-6 py-4">Piso 2, pasillo 1</td>
            <td class="px-6 py-4 font-medium text-blue-600 dark:text-blue-500">Activo</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Table;
