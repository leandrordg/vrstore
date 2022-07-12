import React, { useState } from "react";
import { BsArrowDown, BsArrowUp } from "react-icons/bs";

const Description = ({ product }) => {
  const [showDesc, setShowDesc] = useState(false);

  const getContentFragment = (index, text, obj, type) => {
    let modifiedText = text;

    if (obj) {
      if (obj.bold) {
        modifiedText = <b key={index}>{text}</b>;
      }

      if (obj.italic) {
        modifiedText = <em key={index}>{text}</em>;
      }

      if (obj.underline) {
        modifiedText = <u key={index}>{text}</u>;
      }
    }

    switch (type) {
      case "heading-three":
        return (
          <h3 key={index} className="text-xl font-semibold mb-4">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h3>
        );
      case "paragraph":
        return (
          <p key={index} className="mb-8">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </p>
        );
      case "heading-four":
        return (
          <h4 key={index} className="text-md font-semibold mb-4">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h4>
        );
      case "image":
        return (
          <img
            key={index}
            alt={obj.title}
            height={obj.height}
            width={obj.width}
            src={obj.src}
          />
        );
      default:
        return modifiedText;
    }
  };

  return (
    <div className="description">
      <div className="title flex items-center justify-between pb-4">
        <h1 className="text-3xl">Descrição do produto</h1>
        <button
          onClick={() => setShowDesc(!showDesc)}
          className="p-2 hover:bg-slate-200 rounded-full hover:shadow transition"
        >
          {showDesc ? <BsArrowUp /> : <BsArrowDown />}
        </button>
      </div>
      {showDesc && (
        <div className="desc space-y-4 pb-4 text-gray-600 text-justify">
          {console.log(product.desc.raw)}
          {product.desc.raw.children.map((typeObj, index) => {
            const children = typeObj.children.map((item, itemIndex) =>
              getContentFragment(itemIndex, item.text, item)
            );

            return getContentFragment(
              index,
              children,
              typeObj,
              typeObj.type
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Description;
