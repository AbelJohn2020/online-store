import { base_uri } from "../../app/config";
import axios from 'axios';


export const getProductsData = async () => {
    const url = await axios(`${base_uri}products`);
    const products = await url.data;
    return products;
}

export const getBuyersData = async () => {
    const url = await axios(`${base_uri}buyers`);
    const buyers = await url.data;
    return buyers;
}

export const getTransactionsData = async () => {
    const url = await axios(`${base_uri}transactions`);
    const transactions = await url.data;
    return transactions;
}