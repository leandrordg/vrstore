import { IoIosSend } from "react-icons/io";

const Newsletter = () => {
  return (
    <div className="newsletter py-4 bg-blue-500">
      <div className="container mx-auto p-4 text-white ">
        <div className="flex flex-col lg:flex-row">
          <div className="titles flex-1">
            <h1 className="text-3xl">Inscreva-se no nosso Newsletter</h1>
            <p className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore
              ut maxime esse est molestias totam? Veritatis modi nam eum
              placeat?
            </p>
          </div>

          <div className="input flex flex-col space-y-4 md:flex-row md:items-center md:space-y-0 md:space-x-2 w-full flex-1">
            <input
              className="px-4 py-2 outline-none rounded-lg md:flex-1 text-black"
              type="email"
              placeholder="Digite seu email"
            />
            <button className="bg-slate-500 flex items-center justify-center px-4 py-2 text-white rounded-lg">
              <IoIosSend className="mr-2" />
              <span className="">Inscrever-se</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
