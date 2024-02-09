import React from "react";
function Dashboard() {
  return (
    <div>
      <section className="flex flex-row">
        <table
          id="tablaD"
          className="border-2 border-lime-900 rounded-lg border-separate border-spacing-4 md:table-fixed bg-emerald-950/[.5]"
        >
          <thead>
            <tr>
              <th className="">Temperatura c°</th>
              <th className="">Nivel de PH</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="" id="temp">
                Temp
              </td>
              <td className="" id="ph">
                PH
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Dashboard;
