import React, { useState } from "react";

const Shipping = () => {
  const [showFrete, setShowFrete] = useState(false);

  return (
    <div className="pb-2">
      <div className="title flex items-center justify-between">
        <span className="text-xl mb-2">Calcular o frete</span>
        <button
          onClick={() => setShowFrete(!showFrete)}
          className="md:hidden px-4 py-2 bg-blue-500 flex items-center justify-center text-white rounded-lg transition hover:bg-blue-600"
        >
          Calcular
        </button>
      </div>

      <div className="input flex py-2">
        <input
          type="text"
          className="border border-slate-200 p-3 outline-none w-full rounded-lg md:rounded-none md:rounded-l-lg"
        />
        <button
          onClick={() => setShowFrete(!showFrete)}
          className="w-[150px] bg-blue-500 md:flex items-center justify-center text-white rounded-r-md transition hover:bg-blue-600 hidden"
        >
          Calcular
        </button>
      </div>

      {showFrete && (
        <div className="p-4 bg-slate-200 rounded ">
          <div className="one flex justify-between">
            <div className="left font-light">
              <b>Transportadora LMC</b>
              <span> - </span>
              <span>até 30 dias úteis</span>
            </div>
            <div className="right font-bold text-green-600">R$ 49,99</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Shipping;
