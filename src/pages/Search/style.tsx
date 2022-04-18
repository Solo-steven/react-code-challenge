import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap:24px;
    grid-row-gap:24px;
    margin: auto;
    padding: 24px;
    width: 100%;
`;