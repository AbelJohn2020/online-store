import React from 'react';
import { Link } from 'react-router-dom';
import { Container, FirstBox, Table, TdBody, TdBodyLink, ThHeader, TrBody, TrHeader } from '../TableBuyers/TableBuyersStyles';
import { getDateToStringBuyers } from '../utils/filterData';
import '../UI/styles.css';

const TableOfDates = ({id, buyers, shadow}) => {
    const dataBuyersWithDate = () => {
        return buyers.map( buyer => {
            return {
                id: buyer.id,
                date: getDateToStringBuyers(buyer.id),
                name: buyer.name,
                age: buyer.age
            }
        })
    }
    const dataBuyersDate = dataBuyersWithDate();
    const date = getDateToStringBuyers(id)

    const filterBuyersByData = () => {
        return dataBuyersDate.filter( buyer => date.includes(buyer.date))
    };

    const buyersDate = filterBuyersByData();

    return (
        <Container>
            <FirstBox>
                <h1 className={shadow ? 'title shadowTitle' : 'title lightTitle'}>
                    Names of Partners that buy same day: {date}
                </h1>
                <Table shadow={shadow}>
                    <thead>
                        <TrHeader>
                            <ThHeader cope="col">date</ThHeader>
                            <ThHeader cope="col">name</ThHeader>
                            <ThHeader cope="col">age</ThHeader>
                        </TrHeader>
                    </thead>
                    <tbody>
                    {
                        buyersDate.map( ({id, date, name, age}) => (
                            <TrBody key={id} shadow={shadow}>
                                <TdBody shadow={shadow}>
                                    {date}
                                </TdBody>
                                <TdBodyLink shadow={shadow}>
                                    <Link 
                                        to={`/buyer/${id}`} 
                                        className={shadow ? 'link shadowlink' : 'link lightlink'}
                                    >
                                        {name}
                                    </Link>
                                </TdBodyLink>
                                <TdBody>{age}</TdBody>
                            </TrBody>
                        ))
                    }
                    </tbody>
                </Table>
            </FirstBox>
        </Container>
    )
}

export default TableOfDates;
