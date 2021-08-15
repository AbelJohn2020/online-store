import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { colors } from '../UI/colors';

export const Ul = styled.ul`
    list-style-type: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
`;

export const Li = styled.li( ({shadow}) => css`
    width: 100%;
    margin: 0;
    padding: 4px 8px;
    box-sizing: border-box;
    color: ${ shadow ? colors.white : colors.lightBlack};
`);