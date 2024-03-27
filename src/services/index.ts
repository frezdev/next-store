import { SHOPIFY_HOSTNAME, SHOPIFY_API_KEY } from '@/src/config';
import { type Product } from '../@types';

const fetchConfig: RequestInit = {
  headers: {
    'X-Shopify-Access-Token': SHOPIFY_API_KEY!
  }
}

export const getProducts = async () => {
  if (!SHOPIFY_HOSTNAME || !SHOPIFY_API_KEY) throw new Error('Missing Shopify hostname or api key');

  const url = new URL(`${SHOPIFY_HOSTNAME}/admin/api/2021-07/products.json`);
  try {
    const response = await fetch(url, fetchConfig);

    if (!response.ok) throw new Error(await response.text());

    const { products } = await response.json() as { products: Product[] };

    return products;
  } catch (error) {
    console.error('Error getting products', error)
  }
}