import {MdAdd} from "react-icons/md";
import {Button} from "@mantine/core";
import {Link} from "react-router-dom";

function ProjectsListHeader() {
    return (
        <div className="flex justify-between items-center w-full pt-10 mb-5">
            <div className="">
                <h2 className="text-lg text-color-light">PROJECTS</h2>
                <p className="text-color-dark-light">5 Projects available</p>
            </div>
            <Link to='/create-project'>
                <Button color="color-main.4" radius="md" size="md"
                        leftIcon={<MdAdd size="1.2rem" className="mt-0.5 mr-0.5 text-color-dark"/>}
                        sx={{
                            'position': "static",
                        }}>
                    <p className="text-color-dark">Create Project</p>
                </Button>
            </Link>
        </div>
    );
}

export default ProjectsListHeader;