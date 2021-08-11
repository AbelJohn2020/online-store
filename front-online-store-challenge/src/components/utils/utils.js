import { base_uri } from "../../app/config"


export const getProductsData = async () => {
    const url = await fetch(`${base_uri}buyers`);
    const products = await url.json();
    console.console.log((products));
}