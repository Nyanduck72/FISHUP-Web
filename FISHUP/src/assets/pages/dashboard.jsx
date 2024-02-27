import Table from "./assets/components/Table";
import Card from "./assets/components/Card";
import GraphTm from "./assets/components/GraphTm";
import GraphPh from "./assets/components/GraphpH";
import Logo from "./assets/img/logo_fishup.png";

export function Dashboard() {
  return (
    <>
      <div
        className="bg-blend-normal absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: `url('https://c4.wallpaperflare.com/wallpaper/457/150/565/abstracto-oscuro-rayas-textura-wallpaper-thumb.jpg')`,
        }}
      >
        <div className="items-center max-w-24 ml-5">
          <nav>
            <img src={Logo} alt="Logo Fishup" />
          </nav>
        </div>
        <div className="p-8 m-6 border border-emerald-200 rounded-lg shadow dark:bg-emerald-950 dark:border-green-200 ">
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
                  <GraphTm />
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
