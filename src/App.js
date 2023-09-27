import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MainPage from './pages/MainPage/MainPage';
import BooksListsPage from './pages/BooksListPage/BooksListsPage';
import BookPage from './pages/BookPage/BookPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/book-search" element={ <MainPage /> } />
          <Route path="/books" element={ <BooksListsPage /> } />
          <Route path="/book/:id" element={ <BookPage /> }/>
        </Routes>
        {/* <Footer /> */}
      </Router>
      
    </div>
  );
}

export default App;
