import {Alert, Button, Textarea, TextInput} from "@mantine/core";
import {Link, useParams} from "react-router-dom";
import {IoMdArrowBack} from "react-icons/io";
import {useForm} from "@mantine/form";
import {useAuth} from "../../../context/AuthContext";
import {useMutation} from "react-query";
import {api} from "../../../api/ApiServices";
import {useNavigate} from "react-router";
import {notifications} from "@mantine/notifications";
import {BiErrorCircle} from "react-icons/bi";
import {useEffect, useState} from "react";


function FormContainer() {
    const {slug} = useParams();
    const [project, setProject] = useState(null);

    const form = useForm({
        initialValues: {
            topic: '',
            name: '',
            description: '',
        }
    });

    const navigate = useNavigate();
    const {logout} = useAuth();

    useEffect(() => {
        if (slug) {
            projectMutation.mutate(slug);
        }
    }, [slug])

    useEffect(() => {
        if (project) {
            form.setValues({
                topic: project.topic,
                name: project.name,
                description: project.description
            })
        }
    }, [project]);

    const submitHandle = data => {
        const token = localStorage.getItem("token");
        if (token) {
            if (slug) {
                updateProjectMutation.mutate({data: data, id: slug})
            } else {
                createProjectMutation.mutate(data)
            }
        } else {
            logout();
        }
    };

    const createProjectMutation = useMutation(api.createProject, {
        onSuccess: () => {
            notifications.show({
                title: 'Project created',
                message: 'Project created successfully!',
                color: 'green',
            });
            form.reset();
            navigate('/');
        }
    });

    const projectMutation = useMutation(api.getProjectById, {
        onSuccess: ({data}) => setProject(data),
    });

    const updateProjectMutation = useMutation(api.updateProject, {
        onSuccess: () => {
            notifications.show({
                title: 'Project updated',
                message: 'Project updated successfully!',
                color: 'green',
            });
            form.reset();
            navigate(`/project/${slug}`);
        }
    });

    return (
        <div className="pt-10">
            <div className="h-[75vh] w-10/12 rounded-lg bg-color-dark mx-auto">
                <div className="bg-color-dark-light rounded-t-lg py-2 px-3">
                    <div className="flex items-center gap-2">
                        {
                            slug ? (
                                <>
                                    <Link to={`/project/${slug}`}>
                                        <IoMdArrowBack className="text-color-main text-xl cursor-pointer"/>
                                    </Link>
                                    <h3 className="text-color-light">UPDATE PROJECT</h3>
                                </>
                            ) : (
                                <>
                                    <Link to='/'>
                                        <IoMdArrowBack className="text-color-main text-xl cursor-pointer"/>
                                    </Link>
                                    <h3 className="text-color-light">CREATE PROJECT</h3>
                                </>
                            )
                        }
                    </div>
                </div>
                <div className="layout__body">
                    <form className="flex flex-col p-3 py-5 gap-3 justify-center"
                          onSubmit={form.onSubmit(submitHandle)}>
                        {
                            slug ? (
                                updateProjectMutation.isError &&
                                <Alert icon={<BiErrorCircle size="1rem"/>} title="Something gone wrong!"
                                       color="color-error.6"
                                       variant="outline" pt={20}/>
                            ) : (
                                createProjectMutation.isError &&
                                <Alert icon={<BiErrorCircle size="1rem"/>} title="Fulfill every input!"
                                       color="color-error.6"
                                       variant="outline" pt={20}/>
                            )
                        }
                        <TextInput
                            label="Enter Project Topic"
                            radius="sm"
                            px={10}
                            mb={10}
                            {...form.getInputProps('topic')}
                        />
                        <TextInput
                            label="Project Name"
                            radius="sm"
                            px={10}
                            mb={10}
                            {...form.getInputProps('name')}
                        />
                        <Textarea
                            labelProps={{style: {color: '#b2bdbd'}}}
                            label="Project Description"
                            radius="sm"
                            px={10}
                            mb={10}
                            {...form.getInputProps('description')}
                        />
                        <div className="hidden sm:block">
                            <div className="flex gap-6 gap-3 justify-end pr-2.5">
                                <Link to="/">
                                    <Button radius="sm" size="sm" color="color-dark-light.4"
                                            type={"button"}
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
                                        loading={createProjectMutation.isLoading}
                                >
                                    Submit
                                </Button>
                            </div>
                        </div>
                        <div className="sm:hidden block">
                            <div className="flex gap-6 gap-3 justify-end pr-2.5">
                                <Link to="/">
                                    <Button radius="sm" size="xs" color="color-dark-light.4"
                                            type={"button"}
                                            mt={10}
                                            mb={0}
                                            w={70}
                                    >
                                        Cancel
                                    </Button>
                                </Link>
                                <Button radius="sm" size="xs" color="color-main.4"
                                        type={"submit"}
                                        mt={10}
                                        mb={0}
                                        w={80}
                                        loading={createProjectMutation.isLoading}
                                >
                                    Submit
                                </Button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
        ;
}

export default FormContainer;
