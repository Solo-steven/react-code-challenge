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