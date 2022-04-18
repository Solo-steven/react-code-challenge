import { FC } from "react";
import * as S from "./style";

interface MovieCardProps {
    img: string;
    title: string;
    year: string;
}

const MovieCard: FC<MovieCardProps> = (props) => {
    return (
        <S.Root to={`/movie/${props.title}`}>
            <S.Img src={props.img}/>
            <S.Title>{props.title}</S.Title>
            <S.Year>{props.year}</S.Year>
        </S.Root>
    );
};

export default MovieCard;