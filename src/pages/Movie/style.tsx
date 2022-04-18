import styled, { keyframes } from "styled-components";

export const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    max-width: 1080px;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
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
const Loading = keyframes`
  0%{
    background-position: -315px 0px,  0px 0px;
  }

  100% {
     background-position: 315px 0px,  0px 0px;
  }
`;

export const SkletonImg = styled.div`
    min-width: 350px;
    min-height: 550px;
    background-image: 
        linear-gradient(-90deg, transparent , #6d748191,  transparent),
        linear-gradient(90deg, #484f5bb1 , #484f5bb1 90%);
    background-repeat: no-repeat;
    animation: ${Loading} 1.5s infinite linear;
`;

export const SkletonTitle = styled.h2`
    width: 100%;
    min-height: 32px;
    background-image: 
        linear-gradient(-90deg, transparent , #6d748191,  transparent),
        linear-gradient(90deg, #484f5bb1 , #484f5bb1 90%);
    background-repeat: no-repeat;
    animation: ${Loading} 1.5s infinite linear;
    margin-bottom: 6px;
`;

export const SkletonYear = styled.p`
    width: 80%;
    min-height: 14px;  
    background-image: 
        linear-gradient(-90deg, transparent , #6d748191,  transparent),
        linear-gradient(90deg, #484f5bb1 , #484f5bb1 90%);
    background-repeat: no-repeat;
    animation: ${Loading} 1.5s infinite linear;
    margin-bottom: 16px;
`;

export const SkletonPlot = styled.p`
    width: 100%;
    min-height: 150px;
    background-image: 
        linear-gradient(-90deg, transparent , #6d748191,  transparent),
        linear-gradient(90deg, #484f5bb1 , #484f5bb1 90%);
    background-repeat: no-repeat;
    animation: ${Loading} 1.5s infinite linear;
    padding: 8px 12px;
`;