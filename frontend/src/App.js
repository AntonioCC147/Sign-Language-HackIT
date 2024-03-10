import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home/Home';
import Webp from './pages/webp/Webp';
import Search from './pages/search/Search';
import Login from './pages/Login/Login';
import Register from './pages/Login/Register'
import CreateArticle from './pages/createArticle/CreateArticle'
import Articles from './pages/Articles/Articles'
import ArticlePage from './pages/ArticlePage/ArticlePage';
import Browser from './pages/browser/Browser';
import AppProvider from './AppProvider';

function App() {
  return <AppProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/webp" element={<Webp />} />
        <Route path="/search" element={<Search />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/create" element={<CreateArticle/>}/>
        <Route path="/articles" element={<Articles/>}/>
        <Route path="/article" element={<ArticlePage/>}/>
        <Route path="/browser" element={<Browser/>}/>
      </Routes>
    </BrowserRouter>
  </AppProvider>;
}

export default App;
