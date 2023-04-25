import avatar from "../../../public/images/icons/avatar.svg"
import {Alert, Avatar, TextInput, Button} from "@mantine/core";
import {Link, useParams} from "react-router-dom";
import {useEffect, useRef, useState} from "react";
import {useMutation} from "react-query";
import {api} from "../../../api/ApiServices";
import {useForm} from "@mantine/form";
import {notifications} from "@mantine/notifications";
import {BiErrorCircle} from "react-icons/bi";
import {IoMdClose} from "react-icons/io";
import {useAuth} from "../../../context/AuthContext";
import {AiOutlineEdit} from "react-icons/ai";

function Comments() {
    const {slug} = useParams();
    const [activities, setActivities] = useState([]);
    const {user} = useAuth();

    const form = useForm({
        initialValues: {
            body: '',
        }
    });

    useEffect(() => {
        reFetchActivities();
    }, [slug]);

    const reFetchActivities = () => {
        if (!slug) return;
        activitiesMutation.mutate(slug);
    }

    const activitiesMutation = useMutation(api.getProjectActivities, {
        onSuccess: ({data}) => setActivities(data)
    })

    const submitHandle = data => {
        addCommentMutation.mutate({data: data, id: slug})
    };

    const addCommentMutation = useMutation(api.addCommentToProject, {
        onSuccess: () => {
            notifications.show({
                title: 'Comment',
                message: 'Comment created successfully!',
                color: 'green',
            });
            form.reset();
            reFetchActivities();
        }
    })

    return (
        <>
            <div className="bg-color-bg h-48 overflow-auto">
                <div className="py-2 px-4">
                    {activities.map(item =>
                        <div key={item?.id} className="border-solid border-l border-color-gray mb-2">
                            <div className="pl-3 py-2 flex flex-col gap-1">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <Link to={`/profile/${item?.user?.id}`}>
                                            <div className="flex leading-normal items-center">
                                                <Avatar src={`${process.env.REACT_APP_API_URL}/images/${item?.user?.avatar}`}
                                                        alt="Avatar"
                                                        size="sm"
                                                        radius="xl"
                                                        sx={{
                                                            'cursor': "pointer", 'position': "static"
                                                        }}
                                                />
                                                <p className="pl-2 text-sm text-color-main cursor-pointer">@{item?.user?.username}</p>
                                            </div>
                                        </Link>
                                        <p className="ml-3 text-sm text-color-light-gray">{item?.timesince} ago</p>
                                    </div>
                                    {item?.user?.id === user?.id ? (
                                        <>
                                            <div>
                                                <Link to={`/delete-comment/${item?.id}`}>
                                                    <IoMdClose
                                                        className="text-color-light-gray text-sm cursor-pointer mr-2"/>
                                                </Link>
                                            </div>
                                        </>
                                    ) : (
                                        <></>
                                    )}
                                </div>
                                <p className="text-color-light-gray">{item?.body}</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div>
                <form onSubmit={form.onSubmit(submitHandle)}>
                    {
                        addCommentMutation.isError &&
                        <Alert icon={<BiErrorCircle size="1rem"/>} title="Something gone wrong!" color="color-error.6"
                               variant="outline" pt={20}/>
                    }
                    <TextInput placeholder="Write your message here..."
                               styles={{input: {backgroundColor: "#696d97"}}}
                               {...form.getInputProps('body')}
                    />
                    <Button radius="sm" size="sm" color="color-main.4"
                            type={"submit"}
                            mt={10}
                            loading={addCommentMutation.isLoading}
                    >
                        Comment
                    </Button>
                </form>
            </div>
        </>
    );
}

export default Comments;