import { getBuyersData } from "./utils";

export const getIdsBuyers = async () => {
    return getBuyersData()
                .then(dataB => getDataBuyers(dataB))
                .catch(error => error);
}

const getDataBuyers = (dataB) => {
    if(dataB !== 0) {
        const ids = dataB.map( buyers => buyers.id)
        const removeRepeatIds = [...new Set(ids)];
        return removeRepeatIds;
    } else {
        return dataB;
    }
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