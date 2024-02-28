import React from "react";

export function Table() {
  return (
    <>
    <div className="relative overflow-x-auto shadow-md rounded-lg">
      <table className=" w-full text-sm text-left rtl:text-right border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-neutral-900 dark:text-gray-400">
          <tr>
            <th id="id" scope="col" className="px-6 py-3">
              Nombre/Numero
            </th>
            <th id="localizacion" scope="col" className="px-6 py-3">
              Localizacion
            </th>
            <th id="horario" scope="col" className="px-6 py-3">
              Prox. comida
            </th>
            <th id="estado" scope="col" className="px-6 py-3">
              Estado
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="odd:bg-white odd:dark:bg-neutral-700 even:bg-gray-50 even:dark:bg-neutral-600 border-b dark:border-gray-700">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Pecera 1
            </th>
            <td className="px-6 py-4">Pasillo 2</td>
            <td className="px-6 py-4" id="comida">
              3:00 PM
            </td>
            <td className="px-6 py-4 font-medium text-blue-600 dark:text-blue-500">
              Activo
            </td>
          </tr>
          <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Pecera 2
            </th>
            <td className="px-6 py-4">Entrada a la izquierda</td>
            <td className="px-6 py-4" id="comida">
              3:00 PM
            </td>
            <td className="px-6 py-4 font-medium text-blue-600 dark:text-blue-500">
              Activo
            </td>
          </tr>
          <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Pirañas
            </th>
            <td className="px-6 py-4">Pasillo 5</td>
            <td className="px-6 py-4" id="comida">
              3:00 PM
            </td>
            <td className="px-6 py-4 font-medium text-blue-600 dark:text-blue-500">
              Activo
            </td>
          </tr>
          <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Pez payaso
            </th>
            <td className="px-6 py-4">Piso 2, pasillo 1</td>
            <td className="px-6 py-4" id="comida">
              3:00 PM
            </td>
            <td className="px-6 py-4 font-medium text-blue-600 dark:text-blue-500">
              Activo
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    </>
  );
}
