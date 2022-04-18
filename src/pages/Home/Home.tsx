import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./style";
import Logo from "asset/logo.svg"

const Home: FC = () => {
    const navigation = useNavigate();
    const [title, setTitle] = useState("");
    const [year, setYear] = useState("");
    const [error, setError] = useState(false);
    return (
        <S.Container>
            <S.Item>
                <S.Logo  src={Logo}/>
                <S.Subtitle>{"all movie info is there"}</S.Subtitle>
            </S.Item>
            <S.Item>
                <S.Title>{"Movie Searcher"}</S.Title>
                <S.Input 
                    placeholder="title" 
                    value={title} 
                    onChange={(e) => { 
                        setError(false);
                        setTitle( e.target.value);
                    }} 
                />
                <S.Input 
                    placeholder="year" 
                    value={year}
                    onChange={(e) => { setYear( e.target.value); }} 
                    />
                <S.Button 
                    onClick={()=> { 
                        if(!title) {
                            setError(true);
                            return;
                        }
                        navigation(`/search?title=${title}${year ? `&year=${year}` : ""}`) 
                    }}
                >
                    {"Search"}
                </S.Button>
                <S.Error>{ error ? "Title Should Be Empty" : "" }</S.Error>
            </S.Item>
        </S.Container>
    );
};

export default Home;