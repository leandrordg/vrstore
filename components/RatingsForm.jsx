import { useEffect, useRef, useState } from "react";

import { submitRating } from "../services";

const RatingsForm = ({ slug }) => {
  const [error, setError] = useState(false);
  const [localStorage, setLocalStorage] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [formData, setFormData] = useState({
    name: null,
    email: null,
    rating: null,
    storeData: false,
  });

  useEffect(() => {
    setLocalStorage(window.localStorage);
    const initalFormData = {
      name: window.localStorage.getItem("name"),
      email: window.localStorage.getItem("email"),
      storeData:
        window.localStorage.getItem("name") ||
        window.localStorage.getItem("email"),
    };
    setFormData(initalFormData);
  }, []);

  const onInputChange = (e) => {
    const { target } = e;
    if (target.type === "checkbox") {
      setFormData((prevState) => ({
        ...prevState,
        [target.name]: target.checked,
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [target.name]: target.value,
      }));
    }
  };

  const handleRatingSubmission = () => {
    setError(false);
    const { name, email, rating, storeData } = formData;
    if (!name || !email || !rating) {
      setError(true);
      return;
    }
    const ratingObj = {
      name,
      email,
      rating,
      slug,
    };

    if (storeData) {
      window.localStorage.setItem("name", name);
      window.localStorage.setItem("email", email);
    } else {
      window.localStorage.removeItem("name");
      window.localStorage.removeItem("email");
    }

    submitRating(ratingObj).then((res) => {
      if (res.createRating) {
        if (!storeData) {
          formData.name = "";
          formData.email = "";
        }
        formData.rating = "";
        setFormData((prevState) => ({
          ...prevState,
          ...formData,
        }));
        setShowSuccessMessage(true);
        setTimeout(() => {
          setShowSuccessMessage(false);
        }, 3000);
      }
    });
  };

  return (
    <div className="bg-slate-200 border-t">
      <div className="container mx-auto p-4 space-y-4 text-center md:text-left">
        <h1 className="text-3xl">Avaliar este produto</h1>
        <span className="text-justify">
          Avalie este produto usando seu nome, e-mail, comentário e sua
          classificação para este produto!
        </span>
        <div className="flex flex-col space-y-4">
          <input
            value={formData.name}
            onChange={onInputChange}
            className="px-4 py-2 rounded-lg outline-none border border-slate-200"
            type="text"
            placeholder="Digite seu nome"
          />
          <div className="flex flex-col">
            <input
              value={formData.email}
              onChange={onInputChange}
              className="px-4 py-2 rounded-lg outline-none border border-slate-200"
              type="email"
              placeholder="Agora seu email"
            />
            <small className="font-light px-4">
              OBS: use o mesmo endereço de e-mail cadastrado no site, caso haja
              divergências, o comentário será removido.
            </small>
          </div>
          <textarea
            value={formData.rating}
            onChange={onInputChange}
            className="rounded-lg px-4 py-2 outline-none border border-slate-200 min-h-[100px] max-h-[300px]"
            placeholder="Deixe aqui sua avaliação"
          />
          <div className="checkbox flex items-center space-x-2 justify-center md:justify-start">
            <input
              checked={formData.storeData}
              onChange={onInputChange}
              type="checkbox"
              id="storeData"
              name="storeData"
              value="true"
            />
            <label htmlFor="storeData">
              Salvar meus dados para comentários futuros
            </label>
          </div>
        </div>
        <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:justify-between md:items-center">
          <div className="space-x-4 flex items-center justify-center md:justify-start">
            <label htmlFor="">Classifique:</label>
            <select
              className="px-4 py-2 outline-none rounded-lg border border-slate-200"
              defaultValue={0}
            >
              <option value="5">5 estrelas</option>
              <option value="4">4 estrelas</option>
              <option value="3">3 estrelas</option>
              <option value="2">2 estrelas</option>
              <option value="1">1 estrelas</option>
            </select>
            {error && (
              <p className="text-sm text-red-500">
                Ocorreu um erro ao avaliar!
              </p>
            )}
            {showSuccessMessage && (
              <p className="text-sm text-green-600">
                Comentario enviado para analize.
              </p>
            )}
          </div>
          <button
            onClick={handleRatingSubmission}
            className="px-8 py-2 bg-red-500 text-white rounded-lg"
          >
            Publicar
          </button>
        </div>
      </div>
    </div>
  );
};

export default RatingsForm;
