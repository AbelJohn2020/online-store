import { getBuyersData } from "./utils";

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