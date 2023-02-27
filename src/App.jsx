import { Route, Routes } from "react-router-dom";
import './App.css';
import ProtectedHome from "./components/ProtectedHome";
import ProtectedRoutes from "./components/ProtectedRoutes";
import Config from "./pages/Config";
import Home from "./pages/Home";
import Pokedex from "./pages/Pokedex";
import Pokemon from "./pages/Pokemon";
import usePokedex from "./hooks/usePokedex";

function App() {

  const {changeTheme, theme} = usePokedex()
  
  return (
    <div className="App">
      <Routes>

        <Route element={<ProtectedHome/>}>
          <Route path="/" element={<Home/>} />
        </Route>

        <Route element={<ProtectedRoutes />}>
          <Route path="/pokedex" element={<Pokedex changeTheme={changeTheme} theme={theme}/>}/>
          <Route path="/pokedex/:id" element={<Pokemon/>}/>
          <Route path="/config" element={<Config/>}/>
        </Route>

      </Routes>
    </div>
  )
}

export default App
