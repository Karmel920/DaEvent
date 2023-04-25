import {Alert, Button, FileInput, Textarea, TextInput} from "@mantine/core";
import {Link} from "react-router-dom";
import {IoMdArrowBack} from "react-icons/io";
import {useForm} from "@mantine/form";
import {useAuth} from "../../../context/AuthContext";
import {BiErrorCircle} from "react-icons/bi";
import {useMutation} from "react-query";
import {api} from "../../../api/ApiServices";
import {notifications} from "@mantine/notifications";
import {useNavigate} from "react-router";
import {useEffect} from "react";

function UpdateUserContainer() {
    const {user} = useAuth();
    const {me} = useAuth();
    const {logout} = useAuth();
    const navigate = useNavigate();

    const form = useForm({
        initialValues: {
            avatar: '',
            full_name: '',
            bio: '',
        }
    });

    useEffect(() => {
        if (user) {
            form.setValues({
                full_name: user.full_name,
                bio: user.bio,
            })
        }
    }, []);

    const submitHandle = data => {
        const token = localStorage.getItem("token");
        if (token) {
            updateUserMutation.mutate(data)
        } else {
            logout();
        }
    };

    const updateUserMutation = useMutation(api.updateUser, {
        onSuccess: () => {
            notifications.show({
                title: 'Profile updated',
                message: 'Profile updated successfully!',
                color: 'green',
            });
            form.reset();
            const token = localStorage.getItem("token");
            me(token);
            navigate(`/profile/${user.id}`);
        }
    })

    return (
        <div className="pt-10">
            <div className="h-[80vh] w-10/12 rounded-lg bg-color-dark mx-auto">
                <div className="bg-color-dark-light rounded-t-lg py-2 px-3">
                    <div className="flex items-center gap-2">
                        <Link to='/settings'>
                            <IoMdArrowBack className="text-color-main text-xl cursor-pointer"/>
                        </Link>
                        <h3 className="text-color-light">EDIT YOUR PROFILE</h3>
                    </div>
                </div>
                <div className="">
                    <form className="flex flex-col p-3 py-5 gap-3 justify-center" encType="multipart/form-data"
                          onSubmit={form.onSubmit(submitHandle)}>
                        {updateUserMutation.isError &&
                            <Alert icon={<BiErrorCircle size="1rem"/>} title="Something gone wrong!"
                                   color="color-error.6" variant="outline" pt={20}/>}
                        <FileInput
                            label="Avatar"
                            radius="sm"
                            px={10}
                            mb={10}
                            {...form.getInputProps('avatar')}
                        />
                        <TextInput
                            label="Full Name"
                            radius="sm"
                            px={10}
                            mb={10}
                            {...form.getInputProps('full_name')}
                        />
                        <Textarea
                            label="Bio"
                            radius="sm"
                            px={10}
                            mb={10}
                            {...form.getInputProps('bio')}
                        />
                        <div className="flex gap-6 justify-end pr-2.5">
                            <Link to="/settings">
                                <Button radius="sm" size="sm" color="color-dark-light.4"
                                        type={"submit"}
                                        mt={30}
                                        mb={0}
                                        w={100}
                                >
                                    Cancel
                                </Button>
                            </Link>
                            <Button radius="sm" size="sm" color="color-main.4"
                                    type={"submit"}
                                    mt={30}
                                    mb={0}
                                    w={100}
                                    loading={updateUserMutation.isLoading}
                            >
                                Save
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default UpdateUserContainer;
