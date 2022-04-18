import { FC } from "react";
import * as S from "./style";
import Vector from "asset/vector.svg";

const Navbar: FC = () => {
    return (
        <S.Root>
            <S.Logo src={Vector} />
            <S.Title>Movies Looker</S.Title>
        </S.Root>
    );
};

export default  Navbar;