import { BsFilter, BsSearch } from "react-icons/bs";

const search = ({ products }) => {
  return (
    <div className="container mx-auto p-4 space-y-4">
      <div className="flex items-center flex-col justify-center md:flex-row md:justify-between">
        <span className="text-lg">
          Exibindo resultados de: <span className="font-semibold">g403</span>
        </span>
        <div className="flex flex-col items-center space-y-2 md:flex-row md:space-y-0 md:space-x-4">
          <span className="flex items-center text-xl font-light">
            <BsFilter className="mr-2" />
            Filtros
          </span>

          <select
            className="p-2 outline-none rounded-md bg-slate-100"
            defaultValue={""}
          >
            <option value="">Nenhum filtro</option>
            <option value="wanted">Mais buscados</option>
            <option value="rating">Avaliações</option>
            <option value="offer">Em oferta</option>
            <option value="biggest">Maior preço</option>
            <option value="smaller">Menor preço</option>
            <option value="asc">a-Z</option>
            <option value="desc">z-A</option>
          </select>
        </div>
      </div>
      <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-2">
        <input
          className="px-4 py-2 outline-none rounded-lg md:flex-1 border"
          type="text"
          placeholder="ex. fone de ouvido"
        />
        <button className="min-w-[50px] bg-red-500 flex items-center justify-center px-4 py-2 text-white rounded-lg">
          <BsSearch className="mr-2" /> Buscar
        </button>
      </div>
    </div>
  );
};

export default search;
