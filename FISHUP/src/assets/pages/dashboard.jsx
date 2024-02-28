import { Table } from "../components/Table";
import { Card } from "../components/Card";
import { Graph } from "../components/GraphTm";
import { GraphPh } from "../components/GraphpH";
import Logo  from "../img/logo_fishup.png";

export function Dashboard() {
  return (
    <>
      <div
        className="bg-blend-normal absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('https://c4.wallpaperflare.com/wallpaper/457/150/565/abstracto-oscuro-rayas-textura-wallpaper-thumb.jpg')",
          backdropFilter: "blur(15px)",
        }}
      >
        <div className="items-center max-w-24 ml-5">
          <nav>
            <img src={Logo} alt="Logo Fishup" />
          </nav>
        </div>
        <div className="p-8 m-6 border border-emerald-600 rounded-lg shadow dark:bg-neutral-800 dark:border-green-200 ">
          <div className="flex flex-col md:flex-row">
            <div className="p-2 shadow-xl">
              <Card />
            </div>
            <div className="md:w-3/4 shadow-inner shadow-xl">
              <div className="mb-4 shadow-xl">
                <Table />
              </div>
              <div className="grid gap-8 md:grid-cols-2 shadow-inner">
                <div className="min-w-full bg-gray-800 border border-green-200 rounded-lg p-1 shadow-xl">
                  <h1 className="m-1 text-base italic font-sans text-center">
                    Promedio Temperatura
                  </h1>
                  <Graph />
                </div>
                <div className="min-w-full bg-gray-800 border border-green-200 rounded-lg p-1 shadow-xl">
                  <h1 className="m-1 text-base italic font-sans text-center">
                    Promedio pH
                  </h1>
                  <GraphPh />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
