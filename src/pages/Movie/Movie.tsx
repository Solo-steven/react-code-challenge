import { FC, useState, useEffect } from "react";
import * as S from "./style";
import { useParams, Navigate } from "react-router-dom";
import axios from "axios";

const Movie: FC = () => {
    const { title } = useParams<{ title: string}>();
    const [data, setData ] = useState<any>(null);
    const [error, setError] = useState<{code: number, message: string} | null>(null);
    useEffect(() => {
        if(title) {
            axios.get(`http://www.omdbapi.com/?apikey=1e129794&t=${title}`)
                .then(response => { 
                    if(response.data.Response === "False") {
                        setError({ code: 500, message: response.data.Error || "Internal Error"});
                        return;
                    }
                    setData(response.data)
                })
                .catch(error => {
                    setError({ code: error.code || 404, message:  error.message || "not find" })
                })
        }
    }, [title]);
    if(error)
        return <Navigate to="error" replace state={error}/>
    return (
        <S.Container>
            {
                data === null  ? (
                    <>
                        <S.Item>
                            <S.SkletonImg />
                        </S.Item>
                        <S.Item>
                            <S.SkletonTitle />
                            <S.SkletonYear />
                            <S.SkletonPlot/>
                        </S.Item>
                    </>
                ) : (
                     <>
                        <S.Item>
                            <S.Img src={data.Poster}/>
                        </S.Item>
                        <S.Item>
                            <S.Title>{data.Title}</S.Title>
                            <S.Year>{data.Released}</S.Year>
                            <S.Plot>{data.Plot}</S.Plot>
                        </S.Item>
                    </>
                )
            }
        </S.Container>
    );
};

export default Movie;