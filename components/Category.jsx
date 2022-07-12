import Link from "next/link";
import { useEffect, useState } from "react";
import { getCategories } from "../services";

const Category = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategory) => setCategories(newCategory));
  }, []);

  return (
    <section className="bg-slate-50 py-4 border-t">
      <div className="container mx-auto p-4">
        <span className="text-3xl">Categorias</span>
        <div className="py-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((category) => (
            <Link key={category.slug} href={`category/${category.slug}`}>
              <div className="card cursor-pointer hover:opacity-70 hover:bg-slate-200 relative">
                <img
                  className="max-h-[260px] w-full object-contain"
                  src={category.thumb.url}
                  alt={category.slug}
                />
                <span className="textCategory hidden justify-center items-center text-7xl font-bold uppercase absolute top-0 bottom-0 left-0 right-0 shadow shadow-white text-white">
                  {category.name}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Category;
