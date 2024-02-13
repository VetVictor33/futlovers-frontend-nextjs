import Link from "next/link";

export default function team() {
    return (
      <main className="size-96 my-20 mx-auto">
        <Link href={'/'} className="text-sm text-gray-500 hover:underline my-5">
          {'< voltar'}
        </Link>
        <form>
        <h2 className="text-xl font-bold">Inserir Time</h2>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col">
              <label htmlFor="nome" className="text-sm font-medium">Nome</label>
              <input type="text" id="nome" name="nome" className="border border-gray-300 rounded-md p-2" />
            </div>
          </div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white rounded-md p-2 mt-4">SALVAR</button>
        </form>
      </main>
    )
}