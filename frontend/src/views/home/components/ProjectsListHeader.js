import {MdAdd, MdOutlineTopic} from "react-icons/md";
import {Button} from "@mantine/core";
import {Link, useParams} from "react-router-dom";

function ProjectsListHeader({totalProjects}) {
    const {slug} = useParams();

    return (
        <>
            <div className="hidden lg:block">
                <div className="flex justify-between items-center w-full pt-10 mb-5">
                    <div className="">
                        {
                            slug ? (
                                <h2 className="text-lg text-color-light">{slug.toUpperCase()} PROJECTS</h2>
                            ) : (
                                <h2 className="text-lg text-color-light">ALL PROJECTS</h2>
                            )
                        }
                        <p className="text-color-dark-light">{totalProjects} Projects available</p>
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
            </div>
            <div className="block lg:hidden">
                <div className="flex flex-col justify-between w-full pt-10 mb-5 gap-3">
                    <div className="flex justify-between">
                         <Link to='/topics'>
                        <Button color="color-dark.3" radius="md" size="sm" variant="filled"
                                // leftIcon={<MdOutlineTopic size="1.2rem" className="mt-0.5 mr-0.5 text-color-dark"/>}
                                sx={{
                                    'position': "static",
                                }}>
                            <p className="text-color-dark">Topics</p>
                        </Button>
                    </Link>
                    <Link to='/create-project'>
                        <Button color="color-main.4" radius="md" size="sm"
                                leftIcon={<MdAdd size="1.2rem" className="mt-0.5 mr-0.5 text-color-dark"/>}
                                sx={{
                                    'position': "static",
                                }}>
                            <p className="text-color-dark">Create Project</p>
                        </Button>
                    </Link>
                    </div>
                    <div className="">
                        {
                            slug ? (
                                <h2 className="text-lg text-color-light">{slug.toUpperCase()} PROJECTS</h2>
                            ) : (
                                <h2 className="text-lg text-color-light">ALL PROJECTS</h2>
                            )
                        }
                        <p className="text-color-dark-light">{totalProjects} Projects available</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProjectsListHeader;