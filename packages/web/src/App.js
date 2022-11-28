import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ArtworkListPage from './pages/ArtworkListPage';
import ArtworkPage from './pages/ArtworkPage';
import CreateAccountPage from './pages/CreateAccountPage';
import LoginPage from './pages/LoginPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <div id="page-body">
          <Routes>
            <Route path="/" element={ <HomePage /> } />
            <Route path="/about" element={ <AboutPage /> } />
            <Route path="/artwork" element={ <ArtworkListPage /> } />
            <Route path="/artwork/:artworkId" element={ <ArtworkPage /> } />
            <Route path="/create-account" element={ <CreateAccountPage /> } />
            <Route path="/login" element={ <LoginPage /> } />
            <Route path="*" element={ <NotFoundPage /> } />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
