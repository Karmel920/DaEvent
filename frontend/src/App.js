import { Route, Routes } from 'react-router';
import Home from './views/home/Home';
import Login from "./views/login/Login";
import Register from "./views/register/Register";
import Profile from "./views/profile/Profile";
import ProjectForm from "./views/project_form/ProjectForm";
import Project from "./views/project/Project";
import DeleteForm from "./views/delete_form/DeleteForm";
import UpdateUser from "./views/update-user/UpdateUser";

function App() {
  return (
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='/create-project' element={<ProjectForm/>} />
        <Route path='/project' element={<Project/>} />
        <Route path='/delete' element={<DeleteForm/>} />
        <Route path='/update-user' element={<UpdateUser/>} />
      </Routes>
  );
}

export default App;
