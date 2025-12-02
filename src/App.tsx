import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import NotFound from './components/NotFound';
import Home from './components/Home';
import ArticleDetails from './components/ArticleDetails';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className="min-vh-100 d-flex flex-column">
        <NavBar />
        <div className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/details/:id" element={<ArticleDetails />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
