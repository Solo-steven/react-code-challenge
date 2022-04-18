import { FC } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "components/Navbar";
import { Footer } from "components/Footer";
import { Home } from "pages/Home";
import { Search } from "pages/Search";
import { Movie } from "pages/Movie";
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
                        <Route path="/movie/:title" element={<Movie/>} />
                        <Route path="*" element={<div>error</div>} />
                    </Routes>
                </S.Container>
                <Footer/>
            </S.Root>
        </BrowserRouter>
    );
};

export default App;