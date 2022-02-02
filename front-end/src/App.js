import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Songs from './pages/Songs/Songs';
import Menubar from './pages/Menubar/Menubar';
import AddSong from './pages/AddSong/AddSong';

// This is test comment
// This is test comment
// This is test comment
// This is test comment

function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Menubar/>
          <Routes>
            <Route path="/Songs" element={<Songs />} />
            <Route path="/AddSong" element={<AddSong />} />
          </Routes>
       
      </BrowserRouter>
    </div>
  );
}

export default App;
