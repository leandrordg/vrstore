import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  BsFillChatDotsFill,
  BsCaretRightFill,
  BsXLg,
  BsCartFill,
  BsSearch,
  BsInstagram,
  BsFacebook,
  BsTwitter,
  BsList,
  BsFillCaretDownFill,
  BsArrowUp,
} from "react-icons/bs";
import { getCategories } from "../services";

const Header = () => {
  const [isOpened, setIsOpened] = useState(false);
  const [categories, setCategories] = useState([]);
  const [scrollUp, setScrollUp] = useState(false);

  useEffect(() => {
    getCategories().then((newCategory) => setCategories(newCategory));
  }, []);

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        setScrollUp(true);
      } else {
        setScrollUp(false);
      }
    });
  }

  return (
    <nav className="shadow-sm sticky top-0 bg-white h-20 flex items-center z-50">
      <div className="container mx-auto p-4 flex justify-between">
        <div className="flex items-center space-x-4 md:space-x-8">
          <Link href="/">
            <img
              className="cursor-pointer w-16 h-16"
              src={`https://img001.prntscr.com/file/img001/IwW54G4dRBm_5mAWupGtHA.png`}
            />
          </Link>

          <ul className="hidden md:flex items-center space-x-4 md:space-x-8">
            <Link href="#">
              <li className="cursor-pointer transition hover:text-red-500">
                Produtos
              </li>
            </Link>
            <Link href="#">
              <li className="cursor-pointer transition hover:text-red-500">
                Oferta
              </li>
            </Link>
          </ul>

          {/* Dropdown */}
          <div className="relative hidden md:inline-block group">
            <button className="bg-red-500 px-4 py-2 text-white rounded-lg shadow hover:bg-red-600 transition flex items-center">
              Categorias <BsFillCaretDownFill className="ml-2" />
            </button>

            <ul className="flex-col z-10 absolute bg-slate-100 rounded shadow-xl w-44 hidden group-hover:inline-flex">
              {categories.map((category) => (
                <Link key={category.slug} href={`/category/${category.slug}`}>
                  <li className="cursor-pointer transition hover:bg-slate-200 px-4 py-2 rounded border-b">
                    {category.name}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex items-center space-x-2 md:space-x-4 lg:space-x-8">
          <ul className="hidden md:flex">
            <li className="flex items-center cursor-pointer">
              <BsFillChatDotsFill className="mr-2" />
              <span>Ajuda</span>
            </li>
          </ul>
          <Link href={`/signin`}>
            <button className="hidden hover:bg-red-500 px-6 py-2 hover:text-white rounded-lg md:flex items-center border border-red-500 text-red-500 transition">
              <span>Entrar</span>
            </button>
          </Link>
          <div className="menu md:hidden cursor-pointer">
            <BsList
              className="text-2xl"
              onClick={() => setIsOpened(!isOpened)}
            />
          </div>
        </div>
      </div>

      <div
        className={`fixed flex flex-col justify-between overflow-y-auto bottom-0 bg-slate-100 border-l w-[250px] sm:w-[350px] p-4 h-full z-50 duration-500 ${
          isOpened ? "right-0" : "right-[-100%]"
        }`}
      >
        <div className="top">
          <BsXLg
            className="my-4 cursor-pointer"
            onClick={() => setIsOpened(!isOpened)}
          />
          <div className="relative mt-3 md:hidden">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <BsSearch />
            </div>
            <input
              type="text"
              className="block p-2 pl-10 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 outline-none"
              placeholder="Buscar..."
            />
          </div>

          <ul className="flex flex-col space-y-4 py-4 border-b ">
            <Link href="#">
              <li className="cursor-pointer transition hover:text-red-500">
                Produtos
              </li>
            </Link>
            <Link href="#">
              <li className="cursor-pointer transition hover:text-red-500">
                Oferta
              </li>
            </Link>
          </ul>

          <div className="title mt-4">
            <span className="text-xl font-semibold">Categorias</span>
          </div>
          <ul className="flex flex-col space-y-4 py-4 border-b">
            {categories.map((category) => (
              <Link key={category.slug} href={`/category/${category.slug}`}>
                <li className="cursor-pointer hover:text-red-500 transition">
                  {category.name}
                </li>
              </Link>
            ))}
          </ul>
        </div>

        <div className="bottom space-y-4">
          <div className="social">
            <ul className="flex items-center w-full space-x-4 justify-around">
              <li className="cursor-pointer hover:text-pink-400">
                <BsInstagram />
              </li>
              <li className="cursor-pointer hover:text-blue-600">
                <BsFacebook />
              </li>
              <li className="cursor-pointer hover:text-blue-400">
                <BsTwitter />
              </li>
            </ul>
          </div>
          <ul className="flex flex-col">
            <li>
              <a
                href="#"
                className="px-4 py-2 border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white rounded-lg flex justify-between items-center"
              >
                Meu carrinho <BsCartFill className="ml-2" />
              </a>
            </li>
          </ul>
          <Link href={`/signin`}>
            <button className="hover:bg-red-500 px-4 py-2 hover:text-white rounded-lg w-full flex justify-between items-center border border-red-500 text-red-500 transition">
              <span>Entrar</span>
              <BsCaretRightFill />
            </button>
          </Link>
        </div>
      </div>
      {scrollUp && (
        <button
          onClick={() => window.scroll(0, 0)}
          className=" bg-red-500 p-2 text-white rounded-full text-3xl fixed bottom-8 right-8 shadow hover:bg-red-600 transition"
        >
          <BsArrowUp />
        </button>
      )}
    </nav>
  );
};

export default Header;
