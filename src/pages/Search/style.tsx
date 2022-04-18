import styled  from "styled-components";
import { Skleton } from "components/Skleton";

export const Container = styled.div`
    display: grid;
    grid-column-gap:24px;
    grid-row-gap:24px;
    margin: auto;
    padding: 24px;
    width: 100%;

    @media (min-width: 0px) {
        grid-template-columns: repeat(1, 1fr);
    }
    @media (min-width: 1080px) {
        grid-template-columns: repeat(3, 1fr);
    }
    @media (min-width: 1440px) {
        grid-template-columns: repeat(4, 1fr);
    }
`;

export const SkletonCard = styled(Skleton)`
    border-radius: 10px;
    width: 320px;
    padding: 0px 30px;
    min-height: 400px;  
`;

export const PageContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 24px;
`;

export const CurrentPage = styled.div`
    border-radius: 50%;
    padding: 12px;
    font-size: 16px;
    height: 42px;
    width: 42px;
    color: #EEEEEE;
    border: 1px solid #EEEEEE;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ControlButton = styled.button`
    margin: 0px 12px;
    border-radius: 12px;
    color: #EEEEEE;
    background-color: #00000000;
    border: 1px solid #EEEEEE;
    padding: 8px 12px;
    font-size: 14px;
    cursor: pointer;

    &:disabled {
        border: 1px solid #eeeeee4c;
        color: #eeeeee4c;
    }
`;