import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Loading from '../Loaging/Loading';
import { filterDataB } from '../utils/filterData';
import { getBuyersData } from '../utils/utils';
import { FirstBox, Container, Table, TdBody, ThHeader, TrBody, TrHeader, ThirdBox, SecondBox, BoxButtons, Input } from './TableBuyersStyles';
import '../UI/styles.css';
import '../Buttons/button.css';

const TableBuyers = ({shadow}) => {
    const [buyers, setBuyers] = useState({
        dataB:[],
        loadingB: true,
    });
    const [pagination, setPagination] = useState(0)
    const [inputValue, setInputValue] = useState('');
    const { dataB, loadingB } = buyers;
    
    useEffect(() => {
        getBuyersData()
        .then(res => setBuyers({
            dataB: res,
            loadingB: false,
        }))
        .catch(e => e);
    }, []);

    
    const findPartnerts = (data) => {
        return data.filter( ({name}) => name.includes(inputValue));
    }

    const filterDataBuyers = () => {
        const data = filterDataB(dataB);
        if(inputValue.length === 0) {
            return data.slice(pagination, pagination+10)
        } else {
            const findPartnert = findPartnerts(data)
            return findPartnert.slice(pagination, pagination+10)
        }
    }

    const dataBuyers = filterDataBuyers()

    const dataPartnert = () => {
        const data = filterDataB(dataB);
        return findPartnerts(data);
    }

    const handleNextBlock = () => {
        const findPartner = dataPartnert()
        if(findPartner.length - 1 > pagination + 10) {
            setPagination(pagination+10)
        } else {
            setPagination(0)
        }
    }

    const handlePreviousBlock = () => {
        if(pagination > 0) {
            setPagination(pagination-10)
        } else {
            const findPartner = dataPartnert()
            setPagination(findPartner.length - 1)
        }
    }

    const handleChange = (e) => {
        setPagination(0);
        const input = e.target.value;
        setInputValue( input );
    }

    return (
        <Container>
            {
                loadingB
                    ?   <Loading/>
                    :   <FirstBox>
                            <h1 className={shadow ? 'title shadowTitle' : 'title lightTitle'}>
                                Table of Clients that made purchases on the plataform
                            </h1>
                            <hr />

                            <SecondBox>
                                <Input 
                                    type="text"
                                    placeholder="Search partnert name"
                                    value={inputValue}
                                    onChange={(e) => handleChange(e)}
                                    shadow={shadow}
                                />
                                <BoxButtons>
                                    <button 
                                        onClick={() => handlePreviousBlock()}
                                        className={shadow ? 'button shadowButton' : 'button lightButton'}
                                    >
                                        previous
                                    </button>
                                    <button 
                                        onClick={() => handleNextBlock()}
                                        className={shadow ? 'button shadowButton' : 'button lightButton'}
                                    >
                                        next
                                    </button>
                                </BoxButtons>
                            </SecondBox>
                            <ThirdBox>
                                <Table shadow={shadow}>
                                    <thead>
                                        <TrHeader>
                                            <ThHeader cope="col">Name</ThHeader>
                                            <ThHeader cope="col">Age</ThHeader>
                                        </TrHeader>
                                    </thead>
                                    <tbody>
                                    {
                                        dataBuyers.map( ({id, name, age}) => (
                                            <TrBody key={id} shadow={shadow}>
                                                <TdBody>
                                                    <Link 
                                                        to={`/buyer/${id}`} 
                                                        className={shadow ? 'link shadowlink' : 'link lightlink'}
                                                    >
                                                        {name}
                                                    </Link>
                                                </TdBody>
                                                <TdBody>{age}</TdBody>
                                            </TrBody>
                                        ))
                                    }
                                    </tbody>
                                </Table>
                            </ThirdBox>
                        </FirstBox>
            }
        </Container>
    )
}

export default TableBuyers;
