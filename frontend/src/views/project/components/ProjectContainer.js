import avatar from "../../../public/images/icons/avatar.svg"
import {Avatar, Button, TextInput} from "@mantine/core";
import {Link, useParams} from "react-router-dom";
import {IoMdArrowBack, IoMdClose} from "react-icons/io";
import {AiOutlineEdit} from "react-icons/ai";
import {BsPersonAdd} from "react-icons/bs";
import {useEffect, useState} from "react";
import {useMutation} from "react-query";
import {api} from "../../../api/ApiServices";
import {useNavigate} from "react-router";
import {useAuth} from "../../../context/AuthContext";

function ProjectContainer() {
    const {slug} = useParams();
    const [project, setProject] = useState({});
    const [activities, setActivities] = useState([]);
    const navigate = useNavigate();
    const {user} = useAuth();

    const previousView = () => {
        navigate(-1);
    }

    useEffect(() => {
        if (!slug) return;
        projectMutation.mutate(slug);
        activitiesMutation.mutate(slug);
    }, [slug]);

    const projectMutation = useMutation(api.getProjectById, {
        onSuccess: ({data}) => setProject(data),
    });

    const activitiesMutation = useMutation(api.getProjectActivities, {
        onSuccess: ({data}) => setActivities(data)
    })

    return (
        <div className="pt-10 h-[90vh]">
            <div className="h-full w-full rounded-lg bg-color-dark">
                <div className="bg-color-dark-light rounded-t-lg py-2 px-3">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <IoMdArrowBack className="text-color-main text-xl cursor-pointer"
                                           onClick={() => previousView()}/>
                            <h3 className="text-color-light">PROJECT</h3>
                        </div>
                        {project?.host?.id === user?.id ? (
                            <>
                                <div className="flex items-center gap-2">
                                    <Link to={`/update-project/${project?.id}`}>
                                        <AiOutlineEdit className="text-color-light-gray text-xl cursor-pointer"/>
                                    </Link>
                                    <Link to={`/delete-project/${project?.id}`}>
                                        <IoMdClose className="text-color-light-gray text-xl cursor-pointer"/>
                                    </Link>
                                </div>
                            </>
                        ) : (
                            <></>
                        )}
                    </div>
                </div>
                <div className="py-4 px-6 flex flex-col gap-2">
                    <div className="flex justify-between">
                        <div className="flex items-center gap-10">
                            <div>
                                <p className="text-xs text-color-gray mb-1">NAME</p>
                                <h3 className="text-3xl text-color-main font-medium">{project?.name}</h3>
                            </div>
                            <div>
                                <p className="text-xs text-color-gray mb-1">TOPIC</p>
                                <div className="flex">
                                    <p className="bg-color-dark-light py-1.5 text-color-light px-4 rounded-3xl">
                                        {project?.topic}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-5 justify-between">
                            <span className="text-color-light-gray">{project?.timesince} ago</span>
                        </div>
                    </div>
                    <div className="flex items-center justify-between pr-10">
                        <div>
                            <p className="text-xs text-color-gray mb-1">HOSTED BY</p>
                            <div className="flex leading-normal items-center">
                                <Link to={`/profile/${project?.host?.id}`} className="flex items-center">
                                    <Avatar src={avatar} alt="Avatar"
                                            sx={{
                                                'cursor': "pointer", 'position': "static"
                                            }}
                                    />
                                    <p className="pl-3 text-sm text-color-main cursor-pointer">@{project?.host?.username}</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="h-32 overflow-auto mb-2">
                        <p className="text-xs text-color-gray mb-1">DESCRIPTION</p>
                        <div className="text-color-light-gray mb-2">
                            {project?.description}
                        </div>
                    </div>
                    <div>
                        <p className="text-xs text-color-gray mb-1">COMMENTS</p>
                        <div className="bg-color-bg h-48 overflow-auto">
                            <div className="py-2 px-4">
                                {activities.map(item =>
                                    <div key={item?.id} className="border-solid border-l border-color-gray mb-2">
                                        <div className="pl-3 py-2 flex flex-col gap-1">
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center">
                                                    <Link to={`/profile/${item?.user?.id}`}>
                                                        <div className="flex leading-normal items-center">
                                                            <Avatar src={avatar} alt="Avatar" size="sm"
                                                                    sx={{
                                                                        'cursor': "pointer", 'position': "static"
                                                                    }}
                                                            />
                                                            <p className="pl-2 text-sm text-color-main cursor-pointer">@{item?.user?.username}</p>
                                                        </div>
                                                    </Link>
                                                    <p className="ml-3 text-sm text-color-light-gray">{item?.timesince} ago</p>
                                                </div>
                                                {/*<div>*/}
                                                {/*    <Link to='/delete'>*/}
                                                {/*        <IoMdClose className="text-color-light-gray text-sm cursor-pointer mr-2"/>*/}
                                                {/*    </Link>*/}
                                                {/*</div>*/}
                                            </div>
                                            <p className="text-color-light-gray">{item?.body}</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="">
                            <form>
                                <TextInput placeholder="Write your message here..."
                                           styles={{input: {backgroundColor: "#696d97"}}}
                                />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectContainer;