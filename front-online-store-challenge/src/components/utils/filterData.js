import { getBuyersData, getProductsData, getTransactionsData } from "./utils";

export const getIdsBuyers = async () => {
    return getBuyersData()
                .then(dataB => filterDataB(dataB))
                .catch(error => error);
}

export const filterDataB = (dataB) => {
    if(dataB !== 0) {
      const findIdsNoRepeated = Array.from(new Set(dataB.map( buyers => buyers.id)));
      const removeRepeatObjects = findIdsNoRepeated.map(id => { return dataB.find( buyers => buyers.id === id )});
      return removeRepeatObjects;
    } else {
      return dataB;
    }
}

export const transactionsTable = async (setTransactions) => {
    return getTransactionsData()
                .then(res => setTransactions({
                    dataT: res,
                    loadingT: false,
                }))
                .catch(e => e);
}

export const ProductsTable = async (setProducts) => {
    return getProductsData()
                .then(res => setProducts({
                    dataP: res,
                    loadingP: false,
                }))
                .catch(e => e);
}

export const BuyerRequest = async (setBuyers) => {
    return getBuyersData()
                .then(res => setBuyers({
                    dataB: res,
                    loadingB: false,
                }))
                .catch(e => e);
}

export const getDateToString = (date) => {
    const timestamp = parseInt(date.replace('#0000', ''), 16);
    const convertDate = new Date(timestamp*1000);
    const stringDate = convertDate.toDateString()
    return stringDate;
}

export const getDateToStringBuyers = (date) => {
    const timestamp = parseInt(date, 16);
    const convertDate = new Date(timestamp*1000);
    const stringDate = convertDate.toDateString()
    return stringDate;
}