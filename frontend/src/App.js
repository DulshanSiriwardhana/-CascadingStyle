import './App.css';
import NavBar from './components/navbar';
import HomePage from './pages/HomePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PlayGround from './pages/PlayGround';
import LeaderBoard from './pages/LearderBoard';

function App() {
  return (
    <div className='bg-black h-full font-mono'>
      <Router>
        <NavBar/>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/playground' element={<PlayGround/>}/>
          <Route path='/leaderboard' element={<LeaderBoard/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
