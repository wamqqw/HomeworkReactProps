import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Movie from './pages/movie';
import Resume from './pages/resume';
import Clock from './pages/clock';
import Pet from './pages/pet';

function App() {
  return (
    <Router>
    <Routes>
        <Route path="/movie" element ={<Movie 
        title = "Interstellar"
        director = "Christopher Nolan"
        year = "2014"
        studio = "Legendary Pictures"
        poster = "Interstellar.jpg"
        />}/>
        <Route path="/resume" element = {<Resume
        name = "Timur"
        city = "Astana, Kazakhstan"
        phone = "+12345678901"
        email = "timur.nurekenov01@gmail.com"
        experience = "No experience"
        skills = {["C#", "C++", "Unity2D/3D", "JavaScript"]}
        myphoto = "profile.png"
        />}/>
        <Route path="/clock" element={<Clock
        />}/>
        <Route path="/pet" element={<Pet
        catjpg = "catt.jpg"
        name = "Barsik"
        spec = "Cat"
        age = "3 Years old"
        breed = "Scottish fold"
        />}/>
    </Routes>
  </Router>    
  );
}

export default App;
