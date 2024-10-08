import './App.css';
import Content from './Content';
import Header from './Header';
import Footer from './Footer';
//imported routes and navbar
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './Navbar';

function App() {
  return (
    //Added navigation routes to display content
    <div>
      <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Content/>} />
        <Route path="/read" element={<Footer/>} />
        <Route path="/create" element={<Header/>} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
