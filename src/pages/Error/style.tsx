import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;
    max-height: 1280px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const Title = styled.h1`
    font-size: 36px;
    line-height: 40px; 
    color: #EEEEEE;
    margin-bottom: 16px;
`;

export const Code = styled.h4`
    font-size: 40px;
    font-weight: bold;
    letter-spacing: 1px;
    line-height: 44px;
    color: #EEEEEE;
    margin-bottom: 12px;
`;

export const Message = styled.div`
    font-size: 24px;
    line-height: 26px;
    color: #EEEEEE;
`;