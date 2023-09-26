import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MainPage from './pages/MainPage/MainPage';
import BooksListsPage from './pages/BooksListPage/BooksListsPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/books" element={<BooksListsPage />} />
        </Routes>
        {/* <Footer /> */}
      </Router>
      
    </div>
  );
}

export default App;
