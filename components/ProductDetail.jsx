import {
  BsCartPlusFill,
  BsShareFill,
  BsStarFill,
  BsStarHalf,
  BsWhatsapp,
} from "react-icons/bs";
import Shipping from "./Shipping";
import { getOffers } from "../services";
import { useEffect, useState } from "react";

const ProductDetail = ({ product }) => {
  const [offers, setOffers] = useState({});

  useEffect(() => {
    getOffers().then((newOffer) => setOffers(newOffer));
  }, []);

  return (
    <section className="pb-4">
      <div className="container mx-auto p-4">
        <div className="mb-4">
          <h1 className="text-2xl">{product.title}</h1>
          <p className="my-3 text-justify text-slate-700">{product.excerpt}</p>
          <div className="flex justify-between items-center">
            <div className="flex items-center text-yellow-400">
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
              <BsStarHalf />
              <span className="text-black ml-2 text-sm font-light">
                4000 Avaliacoes
              </span>
            </div>

            <div className="buttons">
              <button className="p-2 hover:bg-slate-200 rounded-full hover:shadow transition">
                <BsShareFill className="text-gray-500" />
              </button>
              <button className="p-2 hover:bg-slate-200 rounded-full hover:shadow transition">
                <BsWhatsapp className="text-gray-500" />
              </button>
            </div>
          </div>
          <span className="text-md font-light">
            Vendido por{" "}
            <span className="text-red-500 font-bold">
              {product.author.name}
            </span>
          </span>
        </div>

        <div className="lg:flex lg:space-x-8">
          <div className="flex-[3]">
            <div className="bg-slate-200 rounded-lg relative">
              <img
                className="object-contain max-h-[350px] w-full md:max-h-[530px] "
                src={product.featuredImage.url}
                alt={product.title}
              />
              <div className="absolute top-2 right-2">
                {offers.length !== 0 && (
                  <button className="flex items-center bg-red-500 text-white py-2 px-4 rounded-full text-xl font-bold hover:bg-red-600 transition">
                    {offers[0]?.quantity}%
                    <span className="hidden md:inline-flex ml-2">OFF</span>
                  </button>
                )}
              </div>
            </div>
          </div>
          <div className="flex-[2]">
            <div className="my-4 flex items-center justify-between">
              <div className="flex flex-col">
                <del className="font-light md:text-xl">
                  {new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(product.lastPrice)}
                </del>
                <span className="text-4xl md:text-5xl font-bold text-green-600">
                  {new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(product.price)}
                </span>
                <span className="md:text-lg">À vista no PIX</span>
              </div>
            </div>

            {/* Calc frete */}
            <Shipping />

            {/* Buy button */}
            <div className="space-y-2 py-4">
              <button className="bg-blue-500 text-white p-2 rounded-lg w-full flex items-center justify-center transition hover:bg-blue-600 font-bold">
                Comprar
              </button>
              <button className="bg-red-500 text-white p-2 rounded-lg w-full flex items-center justify-center transition hover:bg-red-600">
                <BsCartPlusFill className="mr-2" />
                Adicionar ao carrinho
              </button>
            </div>

            <img
              className="object-cover rounded-lg"
              src="https://escolhaideal.org/wp-content/uploads/2021/09/1600092710480.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
