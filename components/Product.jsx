import {
  BsCartPlusFill,
  BsPersonFill,
  BsStarFill,
  BsStarHalf,
} from "react-icons/bs";
import Link from "next/link";

const Product = ({ product }) => {
  return (
    <Link href={`/product/${product.slug}`}>
      <div className="card cursor-pointer flex flex-col justify-between">
        <span>{product.title}</span>

        <img
          className="object-contain max-h-[220px] flex justify-center w-full"
          src={product.featuredImage.url}
          alt={product.title}
        />

        <span className="text-md font-light">
          Vendido por{" "}
          <span className="text-red-500 font-bold">{product.author.name}</span>
        </span>

        <div className="flex items-center space-x-2 text-yellow-400">
          <div className="flex items-center">
            <BsStarFill />
            <BsStarFill />
            <BsStarFill />
            <BsStarFill />
            <BsStarHalf />
          </div>
          <span className="text-black flex items-center">
            <BsPersonFill className="mr-2" />
            4000 Avaliações
          </span>
        </div>

        <div className="py-4 flex flex-col">
          <del>
            {new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(product.lastPrice)}
          </del>
          <span className="text-4xl md:text-2xl">
            {new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(product.price)}
          </span>
          <span>À vista no PIX</span>
        </div>

        <div>
          <button className="w-full bg-green-600 p-3 rounded-full text-white flex items-center justify-center hover:bg-green-700 transition">
            Adicionar ao carrinho <BsCartPlusFill className="ml-2" />
          </button>
        </div>
      </div>
    </Link>
  );
};

export default Product;
