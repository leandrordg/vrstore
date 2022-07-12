import Link from "next/link";
import { Newsletter } from "../components";
import { FcGoogle } from "react-icons/fc";
import { BsApple } from "react-icons/bs";
import { ImFacebook2 } from "react-icons/im";

const signin = () => {
  return (
    <>
      <div className="container mx-auto p-4 my-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 text-center md:text-left">
          <div className="hidden lg:flex items-center justify-center">
            <img
              className="object-contain"
              src="https://cutewallpaper.org/24/working-png/remote-work-png-image-transparent-png-arts.png"
            />
          </div>
          <div className="flex flex-col space-y-4 my-4">
            <div className="title">
              <h1 className="text-3xl">Entrar</h1>
              <p className="text-lg mb-2">
                Faça login para comprar seus produtos favoritos!
              </p>
              <span>
                Se você ainda não possui uma conta,{" "}
                <Link href={`/signup`}>
                  <span className="text-blue-600 cursor-pointer">
                    clique aqui{" "}
                  </span>
                </Link>
                para criar agora.
              </span>
            </div>
            <span className="text-slate-600">Digite seu email e senha</span>
            <div className="inputs flex flex-col space-y-4">
              <input
                className="bg-slate-200 px-4 py-2 rounded-lg text-gray-900 outline-none"
                type="text"
                placeholder="Endereço de email"
              />
              <input
                className="bg-slate-200 px-4 py-2 rounded-lg text-gray-900 outline-none"
                type="text"
                placeholder="Digite sua senha"
              />
            </div>
            <button className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow">
              Entrar
            </button>

            <div className="others text-center space-y-4">
              <span>Ou entre utilizando</span>
              <div className="text-sm flex flex-col items-center justify-around xl:flex-row space-y-4 xl:space-y-0 xl:space-x-4">
                <button className="p-2 w-full font-medium text-gray-500 rounded-lg shadow flex items-center justify-center">
                  <FcGoogle className="mr-2" />
                  Entrar com Google
                </button>
                <button className="p-2 w-full font-medium bg-black text-white rounded-lg shadow flex items-center justify-center">
                  <BsApple className="mr-2" />
                  Entrar com Apple
                </button>
                <button className="p-2 w-full font-medium bg-blue-700 text-white rounded-lg shadow flex items-center justify-center">
                  <ImFacebook2 className="mr-2" />
                  Entrar com Facebook
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Newsletter />
    </>
  );
};

export default signin;
