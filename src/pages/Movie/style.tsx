import styled from "styled-components";
import { Skleton } from "components/Skleton";

export const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    max-width: 1080px;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    @media (min-width: 0px) {
        grid-template-columns: repeat(1, 1fr);
    }
    @media (min-width: 1080px) {
        grid-template-columns: repeat(2, 1fr);
    }
`;

export const Item = styled.div`
    padding: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const Img = styled.img`
    max-width: 350px;
    width: 100%;
    height: auto;
`;

export const Title = styled.h2`
    font-size: 28px;
    line-height: 32px;
    color: #EEEEEE;
    margin-bottom: 6px;
`;
export const Year = styled.p`
    font-size: 12px;
    line-height: 14px;
    color: #eeeeee9f;
    margin-bottom: 16px;
`;

export const Plot = styled.p`
    font-size: 16px;
    line-height: 18px;
    color: #EEEEEE;
    height: 150px;
    padding: 8px 12px;
`;

/** Skleton Style */

export const SkletonImg = styled(Skleton)`
    min-width: 350px;
    min-height: 550px;
`;

export const SkletonTitle = styled(Skleton)`
    width: 100%;
    min-height: 32px;
    margin-bottom: 6px;
`;

export const SkletonYear = styled(Skleton)`
    width: 80%;
    min-height: 14px;  
    margin-bottom: 16px;
`;

export const SkletonPlot = styled(Skleton)`
    width: 100%;
    min-height: 150px;
    padding: 8px 12px;
`;