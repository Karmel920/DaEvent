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
import {useEffect} from "react";
import {useAuth} from "./context/AuthContext";
import GuestOutlet from "./router/GuestRouting";
import UserOutlet from "./router/UserRouting";

const queryClient = new QueryClient();

function App() {
    const {me} = useAuth();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            me(token);
        }
    }, []);

    return (
        <QueryClientProvider client={queryClient}>
            <Routes>
                <Route path="/" element={<UserOutlet/>}>
                    <Route index element={<Home/>}/>
                    <Route path='/projects' element={<Home/>}/>
                    <Route path='/projects/:slug' element={<Home/>}/>
                    <Route path='/profile/:slug' element={<Profile/>}/>
                    <Route path='/create-project' element={<ProjectForm/>}/>
                    <Route path='/update-project/:slug' element={<ProjectForm/>}/>
                    <Route path='/project/:slug' element={<Project/>}/>
                    <Route path='/delete-project/:slug' element={<DeleteForm/>}/>
                    <Route path='/delete-comment/:slug' element={<DeleteForm/>}/>
                    <Route path='/delete-user' element={<DeleteForm/>}/>
                    <Route path='/topics' element={<TopicsList/>}/>S
                    <Route path='/settings' element={<Settings/>}/>
                    <Route path='/update-user' element={<UpdateUser/>}/>
                    <Route path='/update-password' element={<UpdatePassword/>}/>
                </Route>
                <Route path="/" element={<GuestOutlet/>}>
                    <Route path='/login' element={<Login/>}/>
                    <Route path='/register' element={<Register/>}/>
                </Route>
            </Routes>
        </QueryClientProvider>
    );
}

export default App;
