import moment from "moment";
import "moment/locale/pt-br";
import { useEffect, useState } from "react";
import { getOffers } from "../services";

const Offers = () => {
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    getOffers().then((newOffer) => setOffers(newOffer));
  }, []);

  return (
    <>
      {offers.length !== 0 ? (
        <div className="offer bg-red-500 border-t border-b">
          <div className="container mx-auto p-4 font-light text-white space-x-2">
            {offers.map((offer) => (
              <div
                className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4"
                key={offer.slug}
              >
                <div className="flex flex-col items-center md:items-start">
                  <h2 className="text-2xl">Chegou a promoção</h2>
                  <h1 className="text-6xl sm:text-7xl font-bold">
                    {offer.title}
                  </h1>
                  <span className="text-base my-4 text-center md:text-left">
                    {offer.desc}
                  </span>
                  <button className="bg-white mb-4 px-8 py-2 rounded-lg text-black shadow">
                    Participar
                  </button>
                  <span>
                    Promoção encerra{" "}
                    <span className="font-bold">
                      {moment(offer.startFinish).endOf("day").fromNow()}
                    </span>
                  </span>
                </div>
                <div className="right hidden md:flex items-center justify-center md:justify-end">
                  <img
                    className="object-contain max-h-[220px]"
                    src={offer.banner.url}
                    alt={offer.title}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="bg-red-500 text-white">
          <div className="container mx-auto p-4">
            <span>
              Fique de olho em nosso site para nao perder nenhuma oferta!
            </span>
          </div>
        </div>
      )}
    </>
  );
};

export default Offers;
