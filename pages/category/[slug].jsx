import { useRouter } from "next/router";
import { getCategories, getCategoryProduct } from "../../services";
import { Loader, Newsletter, Pagination, Product } from "../../components";
import { BsChevronRight } from "react-icons/bs";
import { useEffect, useState } from "react";

const CategoryProduct = ({ products }) => {
  const router = useRouter();
  const [categories, setCategories] = useState([]);

  if (router.isFallback) {
    return <Loader />;
  }

  useEffect(() => {
    getCategories().then((newCategory) => setCategories(newCategory));
  }, []);

  return (
    <>
      <div className="container mx-auto p-4 flex">
        <div>
          <div className="space-y-4">
            <div className="flex items-center text-sm space-x-2">
              <span>Categorias</span>
              <BsChevronRight />
              <span className="font-semibold">
                {products[0].node.categories[0].name}
              </span>
            </div>
            <div className="text-xl">
              <span>Exibindo categoria de: </span>
              <span className="font-semibold">
                {products[0].node.categories[0].name}
              </span>
            </div>
          </div>
          <div className="py-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
            {products.map((product) => (
              <Product key={product.slug} product={product.node} />
            ))}
          </div>

          <Pagination products={products} />
        </div>
      </div>

      <Newsletter />
    </>
  );
};

export default CategoryProduct;

export async function getStaticProps({ params }) {
  const products = await getCategoryProduct(params.slug);
  return {
    props: { products },
  };
}

export async function getStaticPaths() {
  const categories = await getCategories();
  return {
    paths: categories.map(({ slug }) => ({ params: { slug } })),
    fallback: true,
  };
}
