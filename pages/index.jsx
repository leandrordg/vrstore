import Head from "next/head";
import {
  Category,
  Product,
  Search,
  Newsletter,
  ProductWidget,
  Offers,
} from "../components";
import { getProducts } from "../services";

const Home = ({ products }) => {
  return (
    <>
      <Head>
        <title>VR Store - Loja de gamers digital</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Offers />

      <Search />

      <section className="bg-slate-50 border-t">
        <div className="container mx-auto p-4">
          <h1 className="text-3xl">Todos os produtos</h1>
          <div className="py-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
            {products.map((product) => (
              <Product key={product.slug} product={product.node} />
            ))}
          </div>
        </div>
      </section>

      <ProductWidget />
      <Category />

      <Newsletter />
    </>
  );
};

export async function getStaticProps() {
  const products = (await getProducts()) || [];

  return {
    props: { products },
  };
}

export default Home;
