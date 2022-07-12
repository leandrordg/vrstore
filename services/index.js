import { request, gql } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getProducts = async () => {
  const query = gql`
    query MyQuery {
      productsConnection {
        edges {
          node {
            author {
              name
              id
            }
            createdAt
            slug
            title
            price
            lastPrice
            excerpt
            featuredImage {
              url
            }
            categories {
              name
              slug
              thumb {
                url
              }
            }
          }
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query);
  return result.productsConnection.edges;
};

export const getProductDetails = async (slug) => {
  const query = gql`
    query GetProductDetails($slug: String!) {
      product(where: { slug: $slug }) {
        author {
          name
        }
        categories {
          name
          slug
        }
        desc {
          raw
        }
        excerpt
        featuredImage {
          url
        }
        price
        lastPrice
        slug
        title
      }
    }
  `;

  const result = await request(graphqlAPI, query, { slug });

  return result.product;
};

export const getRecentProducts = async () => {
  const query = gql`
    query GetProductDetails() {
      products(
        orderBy: createdAt_ASC
        last: 3
      ) {
        title
        featuredImage {
          url
        }
        createdAt
        slug
        price
        lastPrice
        excerpt
      }
    }
  `;

  const result = await request(graphqlAPI, query);
  return result.products;
};

export const getSimilarProducts = async ({ categories, slug }) => {
  const query = gql`
    query GetProductDetails($slug: String!, $categories: [String!]) {
      products(
        where: {
          slug_not: $slug
          AND: { categories_some: { slug_in: $categories } }
        }
        last: 3
      ) {
        title
        featuredImage {
          url
        }
        createdAt
        slug
        price
        lastPrice
        excerpt
      }
    }
  `;

  const result = await request(graphqlAPI, query, { categories, slug });
  return result.products;
};

export const getCategories = async () => {
  const query = gql`
    query GetCategories {
      categories {
        name
        slug
        thumb {
          url
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query);
  return result.categories;
};

export const getOffers = async () => {
  const query = gql`
    query GetOffer {
      offers {
        banner {
          url
        }
        createdAt
        desc
        startFinish
        slug
        title
        quantity
      }
    }
  `;

  const result = await request(graphqlAPI, query);
  return result.offers;
};

export const getCategoryProduct = async (slug) => {
  const query = gql`
    query GetCategoryProduct($slug: String!) {
      productsConnection(where: { categories_some: { slug: $slug } }) {
        edges {
          cursor
          node {
            author {
              name
            }
            createdAt
            excerpt
            price
            lastPrice
            slug
            title
            featuredImage {
              url
            }
            categories {
              name
              slug
            }
          }
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query, { slug });
  return result.productsConnection.edges;
};
