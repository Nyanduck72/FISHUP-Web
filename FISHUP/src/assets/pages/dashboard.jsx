import Table from "./assets/components/Table";
import Card from "./assets/components/Card";
import Graph from "./assets/components/graph";

export function Dashboard() {
  return (
    <>
      <div className="flex flex-row container md:container md:mx-auto">
        <div className="basis-1/4 mr-10">
          <Card />
        </div>
        <div className="basis-1/2">
          <Table />
        </div>
      </div>
      <div className="container md:container md:mx-auto">
        <Graph />
      </div>
    </>
  );
}