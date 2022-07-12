import Link from "next/link";
import { useState } from "react";
import { BsFilter, BsSearch } from "react-icons/bs";

const Search = () => {
  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(search);
  };

  return (
    <div className="bg-slate-100 py-4">
      <div className="container mx-auto p-4 space-y-4">
        <div className="flex items-center flex-col justify-center md:flex-row md:justify-between">
          <h1 className="font-light text-xl mb-2 md:mb-0">
            Pesquise por um produto
          </h1>

          <div className="flex flex-col items-center space-y-2 md:flex-row md:space-y-0 md:space-x-4">
            <span className="flex items-center text-xl font-light">
              <BsFilter className="mr-2" />
              Filtros
            </span>

            <select className="p-2 outline-none rounded-md">
              <option>Nenhum filtro</option>
              <option>Mais buscados</option>
              <option>Avaliações</option>
              <option>Em oferta</option>
              <option>Maior preço</option>
              <option>Menor preço</option>
              <option>a-Z</option>
              <option>z-A</option>
            </select>
          </div>
        </div>
        <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-2">
          <input
            className="px-4 py-2 outline-none rounded-lg md:flex-1"
            type="text"
            value={search}
            required
            onChange={(e) => setSearch(e.target.value)}
            placeholder="ex. fone de ouvido"
          />
          <Link href={`/search`}>
            <button
              href={`/search?${search}`}
              type="submit"
              onClick={handleSubmit}
              className="min-w-[50px] bg-red-500 flex items-center justify-center px-4 py-2 text-white rounded-lg"
            >
              <BsSearch className="mr-2" /> Buscar
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Search;
