import { FC } from "react";
import * as S from "./style";
import { useNavigate } from "react-router-dom";
import Vector from "asset/vector.svg";

const Navbar: FC = () => {
    const navigation = useNavigate();
    return (
        <S.Root onClick={()=> { navigation("/") }}>
            <S.Logo src={Vector} />
            <S.Title>Movies Search</S.Title>
        </S.Root>
    );
};

export default  Navbar;