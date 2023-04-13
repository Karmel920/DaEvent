import {Route, Routes} from 'react-router';
import {QueryClient, QueryClientProvider} from "react-query";
import Home from './views/home/Home';
import Login from "./views/login/Login";
import Register from "./views/register/Register";
import Profile from "./views/profile/Profile";
import ProjectForm from "./views/project_form/ProjectForm";
import Project from "./views/project/Project";
import DeleteForm from "./views/delete_form/DeleteForm";
import UpdateUser from "./views/update-user/UpdateUser";
import TopicsList from "./views/topics_list/TopicsList";
import Settings from "./views/settings/Settings";
import UpdatePassword from "./views/update_password/UpdatePassword";

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/register' element={<Register/>}/>
                <Route path='/profile' element={<Profile/>}/>
                <Route path='/create-project' element={<ProjectForm/>}/>
                <Route path='/project' element={<Project/>}/>
                <Route path='/delete' element={<DeleteForm/>}/>
                <Route path='/topics' element={<TopicsList/>}/>
                <Route path='/settings' element={<Settings/>}/>
                <Route path='/update-user' element={<UpdateUser/>}/>
                <Route path='/update-password' element={<UpdatePassword/>}/>
            </Routes>
        </QueryClientProvider>
    );
}

export default App;
