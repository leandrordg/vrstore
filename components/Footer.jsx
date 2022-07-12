import Image from "next/image";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="bg-slate-50 border-t shadow-lg pt-4">
      <div className="container mx-auto p-4 flex md:items-center flex-col justify-between space-y-4 md:flex-row mb-4">
        <div className="left flex items-center space-x-4 md:block md:space-x-0">
          <Image
            unoptimized
            className="cursor-pointer"
            src={`https://img001.prntscr.com/file/img001/IwW54G4dRBm_5mAWupGtHA.png`}
            width={64}
            height={64}
          />
          <div className="copy font-light">
            <span>Todos os direitos reservados.</span>
          </div>
        </div>
        <div className="right flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-8">
          <div className="info">
            <h1 className="text-xl font-light">Informações de contato</h1>
            <ul className="transition">
              <li className="hover:text-blue-500 cursor-pointer">Endereço</li>
              <li className="hover:text-blue-500 cursor-pointer">E-mail</li>
              <li className="hover:text-blue-500 cursor-pointer">Telefone</li>
            </ul>
          </div>
          <div className="about">
            <h1 className="text-xl font-light">Páginas institucionais</h1>
            <ul className="transition">
              <li className="hover:text-blue-500 cursor-pointer">Sobre</li>
              <li className="hover:text-blue-500 cursor-pointer">Contato</li>
              <li className="hover:text-blue-500 cursor-pointer">Serviços</li>
            </ul>
          </div>
          <div className="social">
            <h1 className="text-xl font-light">Redes Sociais</h1>
            <ul className="flex items-center space-x-4 my-2">
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
        </div>
      </div>
      <div className="since bg-slate-200 border-t-2">
        <div className="container mx-auto p-4 md:text-center flex items-center">
          <span>
            SINCE 2022 &copy; <b>VR STORE</b>{" "}
          </span>
          <img
            className="w-8 h-8 object-contain ml-2"
            src="https://upload.wikimedia.org/wikipedia/commons/0/05/Flag_of_Brazil.svg"
            alt=""
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
