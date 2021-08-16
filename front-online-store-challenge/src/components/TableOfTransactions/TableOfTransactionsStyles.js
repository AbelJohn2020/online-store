import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { colors } from "../UI/colors";
import '../UI/styles.css';

export const TableT = styled.table(({shadow}) => css`
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

export const TdBodyT = styled.td`
    box-sizing: border-box;
    padding: 12px 16px;
`;

export const Td = styled.td`
    box-sizing: border-box;
    padding: 12px 16px;
    @media(max-width: 416px) {
        display: none;
    }
`;

export const TdBodyLinkT = styled.td( ({shadow}) => css`
    box-sizing: border-box;
    padding: 12px 16px;

    &:hover {
        background: ${shadow ? colors.midGray : colors.cColor};
    }
`);

export const TdBodyCapitalizeT = styled.td`
    box-sizing: border-box;
    padding: 0;
    text-transform: capitalize;
    font-weight: bold;

    @media(max-width: 416px) {
        display: none;
    }
`;

export const DivTdBody = styled.div`
    display: none;

    @media(max-width: 416px) {
        display: flex;
        font-weight: bold;
        text-transform: capitalize;
        margin: 0 0 8px 0;
    }
`;

export const ThHeaderT = styled.th`
    box-sizing: border-box;
    padding: 12px 16px;
    text-align: left;
    text-transform: capitalize;

    @media(max-width: 416px) {
        display: none;
    }
`;