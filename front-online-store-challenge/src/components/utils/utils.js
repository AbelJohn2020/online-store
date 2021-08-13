import { base_uri } from "../../app/config"


export const getProductsData = async () => {
    const url = await fetch(`${base_uri}transactions`);
    const products = await url.json();
    console.console.log((products));
}