import Link from "next/link";
import React from "react";
import { Newsletter } from "../components";
import { FcGoogle } from "react-icons/fc";
import { BsApple } from "react-icons/bs";
import { ImFacebook2 } from "react-icons/im";

const signup = () => {
  return (
    <>
      <div className="container mx-auto p-4 my-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 text-center md:text-left">
          <div className="flex flex-col space-y-4 my-4">
            <div className="title">
              <h1 className="text-3xl">Crie sua conta</h1>
              <p className="text-lg mb-2">
                Cadastre-se agora para poder adquirir nossos produtos, é rápido
                e fácil :)
              </p>
              <span>
                Se você já possui uma conta,{" "}
                <Link href={`/signin`}>
                  <span className="text-blue-600 cursor-pointer hover:underline">
                    clique aqui
                  </span>
                </Link>{" "}
                para entrar.
              </span>
            </div>
            <span className="text-slate-600">
              Vamos começar com seu nome, email e senha
            </span>
            <div className="flex flex-col space-y-4">
              <input
                className="bg-slate-200 px-4 py-2 rounded-lg text-gray-900 outline-none"
                type="text"
                placeholder="Nome"
              />
              <input
                className="bg-slate-200 px-4 py-2 rounded-lg text-gray-900 outline-none"
                type="email"
                placeholder="Digite aqui seu email"
              />
              <input
                className="bg-slate-200 px-4 py-2 rounded-lg text-gray-900 outline-none"
                type="password"
                placeholder="Agora, sua senha"
              />
              <span className="text-slate-600">
                Para finalizar, confirme sua senha
              </span>
              <input
                className="bg-slate-200 px-4 py-2 rounded-lg text-gray-900 outline-none"
                type="password"
                placeholder="Confirmar senha"
              />
            </div>
            <span>
              Ao criar uma conta, você aceita os{" "}
              <Link href={`#`}>
                <span className="text-blue-600 cursor-pointer hover:underline">
                  termos de serviço
                </span>
              </Link>{" "}
              e as{" "}
              <Link href={`#`}>
                <span className="text-blue-600 cursor-pointer hover:underline">
                  políticas de privacidade
                </span>
              </Link>
              !
            </span>
            <button className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow">
              Criar conta
            </button>

            <div className="others text-center space-y-4">
              <span>Ou cadastre-se utilizando</span>
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
          <div className="img hidden lg:flex items-center justify-center">
            <img
              className="object-contain"
              src="https://static.wixstatic.com/media/5d5702_4b2c1c766d704911aa9509a7e1fa246e~mv2.png/v1/fill/w_440,h_314,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Illustration.png"
            />
          </div>
        </div>
      </div>

      <Newsletter />
    </>
  );
};

export default signup;
