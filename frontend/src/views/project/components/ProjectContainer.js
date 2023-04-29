import avatar from "../../../public/images/icons/avatar.svg"
import {Avatar} from "@mantine/core";
import {Link, useParams} from "react-router-dom";
import {IoMdArrowBack, IoMdClose} from "react-icons/io";
import {AiOutlineEdit} from "react-icons/ai";
import {useEffect, useState} from "react";
import {useMutation} from "react-query";
import {api} from "../../../api/ApiServices";
import {useNavigate} from "react-router";
import {useAuth} from "../../../context/AuthContext";
import Comments from "./Comments";

function ProjectContainer() {
    const {slug} = useParams();
    const [project, setProject] = useState({});
    const navigate = useNavigate();
    const {user} = useAuth();

    const previousView = () => {
        navigate(-1);
    }

    useEffect(() => {
        if (!slug) return;
        handleScrollToTop();
        projectMutation.mutate(slug);
    }, [slug]);

    const projectMutation = useMutation(api.getProjectById, {
        onSuccess: ({data}) => setProject(data),
    });

    function handleScrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    return (
        <div className="pt-10 h-[90vh]">
            <div className="h-full w-full rounded-lg bg-color-dark overflow-auto">
                <div className="bg-color-dark-light rounded-t-lg py-2 px-3">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <IoMdArrowBack className="text-color-main md:text-xl text-lg cursor-pointer"
                                           onClick={() => previousView()}/>
                            <h3 className="text-color-light text-sm md:text-base">PROJECT</h3>
                        </div>
                        {project?.host?.id === user?.id ? (
                            <>
                                <div className="flex items-center gap-2">
                                    <Link to={`/update-project/${project?.id}`}>
                                        <AiOutlineEdit className="text-color-light-gray md:text-xl text-lg cursor-pointer"/>
                                    </Link>
                                    <Link to={`/delete-project/${project?.id}`}>
                                        <IoMdClose className="text-color-light-gray md:text-xl text-lg cursor-pointer"/>
                                    </Link>
                                </div>
                            </>
                        ) : (
                            <></>
                        )}
                    </div>
                </div>
                <div className="md:py-4 md:px-6 py-3 px-4 flex flex-col gap-2">
                    <div className="flex justify-between flex-col sm:flex-row">
                        <div className="flex sm:items-center gap-2 sm:gap-10 flex-col sm:flex-row">
                            <div>
                                <p className="text-xs text-color-gray mb-1">NAME</p>
                                <h3 className="sm:text-3xl text-2xl text-color-main font-medium">{project?.name}</h3>
                            </div>
                            <div>
                                <p className="text-xs text-color-gray mb-1 hidden sm:block">TOPIC</p>
                                <div className="flex">
                                    <p className="bg-color-dark-light py-1.5 text-color-light px-4 rounded-3xl text-sm sm:text-base">
                                        {project?.topic}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-5 justify-between mt-2 sm:mt-0">
                            <span className="text-color-light-gray text-xs sm:text-base">{project?.timesince} ago</span>
                        </div>
                    </div>
                    <div className="flex items-center justify-between pr-10">
                        <div>
                            <p className="text-xs text-color-gray mb-1">HOSTED BY</p>
                            <div className="flex leading-normal items-center">
                                <Link to={`/profile/${project?.host?.id}`} className="flex items-center">
                                    <Avatar src={`${process.env.REACT_APP_API_URL}/images/${project?.host?.avatar}`}
                                            alt="Avatar"
                                            radius="xl"
                                            sx={{
                                                'cursor': "pointer", 'position': "static"
                                            }}
                                    />
                                    <p className="pl-3 text-sm text-color-main cursor-pointer">@{project?.host?.username}</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="h-28 overflow-auto mb-2">
                        <p className="text-xs text-color-gray mb-1">DESCRIPTION</p>
                        <div className="text-color-light-gray mb-2 text-sm sm:text-base">
                            {project?.description}
                        </div>
                    </div>
                    <div>
                        <p className="text-xs text-color-gray mb-1">COMMENTS</p>
                        <Comments/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectContainer;