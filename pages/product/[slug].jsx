import {
  Description,
  Newsletter,
  ProductDetail,
  ProductWidget,
  Ratings,
  RatingsForm,
} from "../../components";
import { BsChevronRight } from "react-icons/bs";
import { getProducts, getProductDetails } from "../../services";

const ProductsDetails = ({ product }) => {
  return (
    <>
      <div className="titles flex items-center space-x-2 container mx-auto px-4 mt-4 text-sm">
        <span>Categorias</span>
        <BsChevronRight />
        <span>{product.categories[0].name}</span>
        <BsChevronRight />
        <span className="font-semibold capitalize">{product.slug.split("-").join(" ")}</span>
      </div>

      <ProductDetail
        product={product}
        author={product.author}
        slug={product.slug}
        desc={product.desc}
      />

      <div className="container mx-auto p-4 space-y-4">
        <hr />
        <Description product={product} />

        <hr />
        <Ratings slug={product.slug} />
      </div>

      <RatingsForm slug={product.slug} />

      <ProductWidget slug={product.slug} categories={product.categories[0]} />

      <Newsletter />
    </>
  );
};

export default ProductsDetails;

export async function getStaticProps({ params }) {
  const data = await getProductDetails(params.slug);

  return {
    props: { product: data },
  };
}

export async function getStaticPaths() {
  const products = await getProducts();

  return {
    paths: products.map(({ node: { slug } }) => ({ params: { slug } })),
    fallback: false,
  };
}
