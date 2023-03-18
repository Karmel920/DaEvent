import { Route, Routes } from 'react-router';
import Home from './views/home/Home';
import Login from "./views/login/Login";
import Register from "./views/register/Register";
import Profile from "./views/profile/Profile";
import ProjectForm from "./views/project_form/ProjectForm";

function App() {
  return (
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='/create-project' element={<ProjectForm/>} />
      </Routes>
  );
}

export default App;
