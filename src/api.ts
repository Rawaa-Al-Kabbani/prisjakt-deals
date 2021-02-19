const SEARCH_URL =
  "https://search-pj-campaigns-index-oyaq7ruf3du2owxiiiuhyqcgcm.eu-west-1.es.amazonaws.com/campaign-se-4-deals/_search";

export type ProductCategory = {
  name: string;
};

export type ProductMedia = {
  product_images: {
    first: {
      [key: string]: string;
    };
  };
};

export type ProductInfo = {
  category: ProductCategory;
  media: ProductMedia;
  name: string;
};

export type ProductPrice = {
  compare: number;
  diff_percentage: number;
  display: {
    offer: string;
    previousPrice: string;
  };
  offer: number;
};

export type Product = {
  id: number;
  price: ProductPrice;
  product: ProductInfo;
};

export async function fetchProducts(query: any): Promise<Array<Product>> {
  const body = { query };
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  };
  const response = await fetch(SEARCH_URL, requestOptions);
  const { hits } = await response.json();
  return hits.hits.map((hit: any) => hit._source);
}

export async function fetchProductsByName(
  name: string
): Promise<Array<Product>> {
  return fetchProducts({
    match: {
      "product.name": name.toLowerCase(),
    },
  });
}

export async function fetchProductsByNamePrefix(
  prefix: string
): Promise<Array<Product>> {
  return fetchProducts({
    match_phrase_prefix: {
      "product.name": prefix.toLowerCase(),
    },
  });
}
