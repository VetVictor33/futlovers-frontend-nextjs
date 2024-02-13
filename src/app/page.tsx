import { AddButton } from "./components/add-button";
import { Table } from "./components/table/table";

export default function Home() {
  return (
    <main className="bg-white overflow-hidden grow">
      <div className="flex justify-between m-6 content-center">
          <h1 className="font-bold text-2xl">Jogadores</h1>
          <div className="flex flex-col gap-1">
            <AddButton url="/player/new" text="+ Adicionar Jogador" />
            <AddButton url="/team/new" text="+ Adicionar Time" />
          </div>
      </div>
      <Table/>
    </main>
  )
}
