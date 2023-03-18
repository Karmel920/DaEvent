import Header from "./Header";
import {Grid} from "@mantine/core";
import Topics from "../components/Topics";
import ProjectsListHeader from "../views/home/components/ProjectsListHeader";
import Feed from "../components/Feed";
import Activities from "../components/Activities";

function Container({children}) {
    return (
        <div className="w-11/12 max-w-[1440px] mx-auto">
            {children}
        </div>
    );
}

export default Container;