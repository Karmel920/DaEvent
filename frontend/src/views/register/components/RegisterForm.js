import {Alert, Button, TextInput} from "@mantine/core";
import {useForm} from "@mantine/form";
import {useMutation} from "react-query";
import {api} from "../../../api/ApiServices";
import {BiErrorCircle} from "react-icons/bi";
import {useNavigate} from "react-router";
import {notifications} from "@mantine/notifications";

function RegisterForm() {
    const form = useForm({
        initialValues: {
            email: '',
            username: '',
            password1: '',
            password2: '',
        }
    });

    const submitHandle = data => {
        registerMutation.mutate(data)
    };

    const navigate = useNavigate();

    const registerMutation = useMutation(api.register, {
        onSuccess: () => {
            notifications.show({
                title: 'Register',
                message: 'Registration was successful!',
                color: 'green',
            });
            form.reset();
            navigate("/login");
        }
    })

    return (
        <form className="flex flex-col p-3 py-5 gap-3 justify-center" onSubmit={form.onSubmit(submitHandle)}>
            {registerMutation.isError &&
                <Alert icon={<BiErrorCircle size="1rem"/>} title="Email or username is taken!" color="color-error.6"
                       variant="outline" pt={20}/>}
            <TextInput
                placeholder="Enter your email"
                label="Email"
                radius="sm"
                type={"email"}
                {...form.getInputProps('email')}
            />
            <TextInput
                placeholder="Enter your username"
                label="Username"
                radius="sm"
                {...form.getInputProps('username')}
            />
            <TextInput
                placeholder="Enter your password"
                label="Password"
                radius="sm"
                type={"password"}
                {...form.getInputProps('password1')}
            />
            <TextInput
                placeholder="Confirm your password"
                label="Password confirmation"
                radius="sm"
                type={"password"}
                {...form.getInputProps('password2')}
            />
            <Button radius="sm" size="md" color="color-main.4"
                    type={"submit"}
                    mt={20}
                    mb={0}
                    loading={registerMutation.isLoading}
            >
                Register
            </Button>
        </form>
    );
}

export default RegisterForm;
