import { FC } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Navbar } from "components/Navbar";
import { Footer } from "components/Footer";
import { Home } from "pages/Home";
import { Search } from "pages/Search";
import { Movie } from "pages/Movie";
import { Error } from "pages/Error";
import { Global } from "system/global";
import * as S from "system/style";

const App: FC = () => {
    return (
        <BrowserRouter>
            <S.Root>
                <Global/>
                <Navbar />
                <S.Container>
                    <Routes>
                        <Route path="/" element={<Home/>} />
                        <Route path="/search" element={<Search/>} />
                        <Route path="/movie/:id" element={<Movie/>} />
                        <Route path="error" element={<Error/>} />
                        <Route path="*" element={<Navigate to="error" replace state={{ code: 404 }}/>} />
                    </Routes>
                </S.Container>
                <Footer/>
            </S.Root>
        </BrowserRouter>
    );
};

export default App;