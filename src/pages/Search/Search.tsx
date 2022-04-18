import { FC ,useState, useEffect } from "react";
import { useSearchParams, Navigate } from "react-router-dom";
import * as S from "./style";
import { MovieCard } from "components/MovieCard";
import axios from "axios";


const forkParam = (params: URLSearchParams) => {
    const newParam: { [key:string]: any } = {}; 
    params.forEach((value, key) => {
        newParam[key] = value
    });
    return newParam;
}

const Search: FC = () => {
    const [params, setSearchParams] = useSearchParams();
    const title = params.get("title");
    const year = params.get("year");
    const page = Number(params.get("page") || "1");
    const [data, setData] = useState<Array<any>>([]);
    const [error, setError] = useState<{ code: number, message: string} | null>(null);
    const [loading, setLoading] = useState(false);
    const [maxPage, setMaxPage] = useState(-1);
    useEffect(() => {
        if(title) {
            setLoading(true);
            axios.get(`http://www.omdbapi.com/?apikey=1e129794&s=${title}&page=${page}${year ? `&y=${year}`: ""}`)
                .then(response => { 
                    if(response.data.Response === "False") {
                        setError({ code: 500, message: response.data.Error || "Internal Error"});
                        return;
                    }
                    setLoading(false)
                    setData(response.data.Search);
                    setMaxPage(Math.ceil(response.data.totalResults / 10))
                })
                .catch(error => {
                    setError({ code: error.code || 404, message:  error.message || "not find" });
                })
        }
    }, [title, year, page]);
    if(error)
        return <Navigate to="/error" replace state={error} />
    return (
        <>
            <S.Container>
                {
                    data.length  === 0 || loading ? (
                        new Array(10).fill(1).map((_, i) =>  <S.SkletonCard key={i}/> )
                    ) :  data.map((item, index) => (
                        <MovieCard
                            key={item.imdbID + index }
                            id={item.imdbID}
                            img={item.Poster}
                            title={item.Title}
                            year={item.Year}
                        />
                    ))
                }
            </S.Container>
            <S.PageContainer>
                <S.ControlButton 
                    disabled={page === 1} 
                    onClick={()=> { 
                        const newParam = forkParam(params);
                        newParam["page"] = page -1;
                        setSearchParams(newParam); 
                    }}
                >
                    {"Pre"}
                </S.ControlButton>
                <S.CurrentPage>{page}</S.CurrentPage>
                <S.ControlButton 
                    disabled={  maxPage !== -1 && page === maxPage - 1 }
                    onClick={()=> { 
                        const newParam = forkParam(params);
                        newParam["page"] = page +1;
                        setSearchParams(newParam); 
                    }}
                >
                    {"Next"}
                </S.ControlButton>
            </S.PageContainer>
        </>
    );
};

export default Search;