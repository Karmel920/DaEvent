import {Button} from "@mantine/core";
import {Link, useLocation} from "react-router-dom";
import {match} from 'path-to-regexp';
import {IoMdArrowBack} from "react-icons/io";
import {useAuth} from "../../../context/AuthContext";
import {useMutation} from "react-query";
import {api} from "../../../api/ApiServices";
import {useNavigate} from "react-router";

function DeleteContainer() {
    const {user} = useAuth();
    const {logout} = useAuth();
    const navigate = useNavigate();

    const previousView = () => {
        navigate(-1);
    }

    const location = useLocation();
    const matchProject = match('/delete-project/:slug', {decode: decodeURIComponent})(location.pathname);
    const matchUser = match('/delete-user', {decode: decodeURIComponent})(location.pathname);
    const matchComment = match('/delete-comment/:slug', {decode: decodeURIComponent})(location.pathname);

    const submitUserDelete = data => {
        deleteUserMutation.mutate(data)
    }

    const submitProjectDelete = data => {
        deleteProjectMutation.mutate(data)
    }

    const submitCommentDelete = data => {
        deleteCommentMutation.mutate(data)
    }

    const deleteCommentMutation = useMutation(api.deleteComment, {
        onSuccess: () => {
            navigate(-1);
        }
    })

    const deleteUserMutation = useMutation(api.deleteUser, {
        onSuccess: () => {
            logout();
        }
    })

    const deleteProjectMutation = useMutation(api.deleteProject, {
        onSuccess: () => {
            navigate("/");
        }
    })

    return (
        <div className="pt-10">
            <div className="h-[75vh] w-10/12 rounded-lg bg-color-dark mx-auto">
                <div className="bg-color-dark-light rounded-t-lg py-2 px-3">
                    <div className="flex items-center gap-2">
                        <IoMdArrowBack className="text-color-main text-xl cursor-pointer" onClick={() => previousView()}/>
                        <h3 className="text-color-light">BACK</h3>
                    </div>
                </div>
                <div className="py-6 px-8 flex flex-col gap-2">
                    {matchProject ? (
                        <>
                            <div className="text-color-light-gray text-lg">
                                Are you sure you want to delete the project?
                            </div>
                            <Button radius="sm" size="sm" color="color-error.4"
                                    onClick={() => submitProjectDelete(matchProject.params.slug)}
                                    type={"button"}
                                    mb={0}
                                    mt={15}
                                    w={130}
                            >
                                Delete project
                            </Button>
                        </>
                    ) : matchUser ? (
                        <>
                            <div className="text-color-light-gray text-lg">
                                Are you sure you want to delete the Account?
                            </div>
                            <Button radius="sm" size="sm" color="color-error.4"
                                    onClick={() => submitUserDelete(user?.id)}
                                    type={"button"}
                                    mb={0}
                                    mt={15}
                                    w={130}
                            >
                                Delete Account
                            </Button>
                        </>
                    ) : matchComment ? (
                        <>
                            <div className="text-color-light-gray text-lg">
                                Are you sure you want to delete the comment?
                            </div>
                            <Button radius="sm" size="sm" color="color-error.4"
                                    onClick={() => submitCommentDelete(matchComment.params.slug)}
                                    type={"button"}
                                    mb={0}
                                    mt={15}
                                    w={130}
                            >
                                Delete comment
                            </Button>
                        </>
                    ) : (
                        <div>Invalid URL</div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default DeleteContainer;
