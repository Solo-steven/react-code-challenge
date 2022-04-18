import styled from "styled-components";

export const Container = styled.div`
    max-width: 1080px;
    width: 100%;
    height: 100%;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(1, 1fr);;
`;

export const Item = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
`;

export const Logo = styled.img`
    max-width: 300px;
    width: 100%;
    margin-bottom: 1.2rem;
`;

export const Title = styled.div`
    font-weight: 400;
    font-size: 64px;
    line-height: 70px;
    color: #EEEEEE;
    margin-bottom: 3.2rem;
`;

export const Subtitle = styled.div`
    font-size: 18px;
    line-height: 20px;
    color: #eeeeeecd; 
    margin: .75rem 0 2.5rem 0px; 
`;

export const Input = styled.input`
    max-width: 320px;
    width: 100%;
    border-radius: 20px;
    border: 1px solid #EEEEEEB0;
    outline: none;
    background-color: #FFFFFF00 ;
    padding: 1rem;
    font-size: 18px;
    letter-spacing: .5px;
    color: #EEEEEE;
    margin-bottom: 2rem;
    &:focus {
        box-shadow: 0 0 4px 2px #EEEEEEB0;
    }
`;

export const Button = styled.button`
    background-color: #EEEEEE;
    color: #323232;
    font-size: 14px;
    line-height: 16px;
    padding: 1rem 2rem;
    outline: none;
    border: 1px solid #EEEEEE;
    border-radius: 10px;
    cursor: pointer;

    &:hover {
        box-shadow: 0 0 4px 2px #EEEEEEB0;
    }
    &:active {
        border: 1px solid #aaa8a8e6;
    }
`;