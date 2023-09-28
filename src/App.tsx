import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Users from "./page/Users.tsx";
import Todos from "./page/Todos.tsx";
import Navigation from "./components/Navigation.tsx";
import UserPage from "./page/ItemPage/UserPage.tsx";

function App() {

  return (
    <BrowserRouter>
        <Navigation/>
        <Routes>
            <Route path={'/users'} element={<Users/>}/>
            <Route path={'/todos'} element={<Todos/>}/>
            <Route path={'/users/:id'} element={<UserPage/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App
