import { FC ,useState, useEffect } from "react";
import { useSearchParams, Navigate } from "react-router-dom";
import * as S from "./style";
import { MovieCard } from "components/MovieCard";
import axios from "axios";

const Search: FC = () => {
    const [params] = useSearchParams();
    const title = params.get("title");
    const year = params.get("year");
    const [data, setData] = useState<Array<any>>([]);
    const [error, setError] = useState(false);
    useEffect(() => {
        if(title) {
            axios.get(`http://www.omdbapi.com/?apikey=1e129794&s=${title}`)
                .then(response => { 
                    setData(response.data.Search);
                })
                .catch(error => {
                    setError(true);
                })
        }
    }, [title, year]);
    if(error)
        return <Navigate to="/error"/>
    return (
        <S.Container>
            {
                data.length  === 0  ? (
                    new Array(10).fill(1).map((_, i) =>  <S.SkletonCard key={i}/> )
                ) :  data.map(item => (
                    <MovieCard
                        key={item.imdbID}
                        img={item.Poster}
                        title={item.Title}
                        year={item.Year}
                    />
                ))
            }

        </S.Container>
    );
};

export default Search;