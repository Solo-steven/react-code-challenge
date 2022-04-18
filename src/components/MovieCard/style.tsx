import styled from "styled-components";
import { Link } from "react-router-dom";

export const Root = styled(Link)`
    text-decoration: none;
    width: 320px;
    padding: 0px 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #292c32;
    height: 100%;
    border-radius: 10px;
    box-shadow: 2px 2px 2px 2px #292c32;
    padding: 12px;
    cursor: pointer;
    &:hover {
        box-shadow: 
            2px 2px 2px 2px #292c32,
            4px 4px 4px 4px #292c32;
    }
`;

export const Img = styled.img`
    vertical-align: middle;
    width: 200px;
    height: auto;
    margin-bottom: 14px;
`;

export const Title = styled.h2`
    font-size: 20px;
    line-height: 24px;
    color: #EEEEEE;
    margin-bottom: 8px;
`;

export const Year = styled.p`
    font-size: 14px;
    line-height: 26px;
    color: #eeeeeec1;
`;