import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { colors } from "../UI/colors";
import '../UI/styles.css';

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    box-sizing: border-box;
`;

export const FirstBox = styled.div`
    width: 74%;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;

    @media(max-width: 788px) {
        width: 96%;
    }
`;

export const SecondBox = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    margin: 16px 0 0 0;
`;

export const BoxButtons = styled.div`
    width: 20%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;

    @media(max-width: 1240px) {
        width: 24%;
    }

    @media(max-width: 1050px) {
        width: 22%;
    }

    @media(max-width: 970px) {
        width: 26%;
    }

    @media(max-width: 800px) {
        width: 30%;
    }

    @media(max-width: 788px) {
        width: 24%;
    }

    @media(max-width: 700px) {
        width: 34%;
    }

    @media(max-width: 416px) {
        width: 40%;
    }
`;

export const ThirdBox = styled.div`
    width: 100%;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
`;

export const Table = styled.table(({shadow}) => css`
    width: 100%;
    border-collapse: collapse;
    box-sizing: border-box;
    margin: 0;
    font-size: 16px;
    overflow: hidden;
    box-shadow: ${shadow ? `0 3px 16px 4px ${colors.lightLightGray}` :  `0 0 16px 4px ${colors.shadow}`};
    border-radius: 8px 8px 0 0;
    font-family: 'Roboto';

    @media(max-width: 400px) {
        font-size: 12px;
    }
`);

export const TrHeader = styled.tr`
    width: 100%;
    background: ${colors.blue};
    color: ${colors.white};
    text-align: left;
    box-sizing: border-box;
    font-weight: bold;
`;

export const ThHeader = styled.th`
    box-sizing: border-box;
    padding: 12px 16px;
    text-align: left;
    text-transform: capitalize;
`;

export const TdBody = styled.td`
    box-sizing: border-box;
    padding: 12px 16px;
`;

export const TdBodyLink = styled.td( ({shadow}) => css`
    box-sizing: border-box;
    padding: 12px 16px;

    &:hover {
        background: ${shadow ? colors.midGray : colors.cColor};
    }
`);

export const TdBodyCapitalize = styled.td`
    box-sizing: border-box;
    padding: 12px 16px;
    text-transform: capitalize;
    font-weight: bold;
`;

export const TrBody = styled.tr(({shadow}) => css`
    border-bottom: 1px solid ${colors.lightGray};
    color: ${ shadow ? colors.white : colors.lightBlack};
    box-sizing: border-box;
    background: ${shadow ? colors.gray : colors.darkDarwhite};

    &:nth-of-type(even) {
        background: ${shadow ? colors.lightBlack : colors.darkWhite};
    }

    &:last-of-type {
        border-bottom: 2px solid ${colors.blue};
    };
`);

export const Input = styled.input(({shadow}) => css`
    box-sizing: border-box;
    width: 72%;
    border: none;
    border-radius: 6px;
    padding: 0 12px;
    outline: none;
    background: ${shadow ? colors.gray : colors.darkDarwhite};
    color: ${ shadow ? colors.white : colors.lightBlack};

    @media(max-width: 970px) {
        width: 64%;
    }

    @media(max-width: 788px) {
        width: 56%;
    }
`);