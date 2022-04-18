import { FC } from "react";
import { useLocation } from "react-router-dom";
import * as S from "./style";

const Error: FC = () => {
    const location = useLocation();
    const state: any = location.state;
    console.log(state)
    return (
        <S.Container>
            <S.Title>{"Oops... Some Error Happend"}</S.Title>
            <S.Code>{state.code || 500}</S.Code>
            <S.Message>{state.message || "Network Error, Please try Again"}</S.Message>
        </S.Container>
    )
 };

export default Error;