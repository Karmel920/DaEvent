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
        },
        validate: {
            email: (value) => (value.length === 0 ? 'Fill the email please' :
                /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ? null : 'Invalid email'),
            username: (value) => (value.length === 0 ? 'Fill the username please' : value.length < 5 ?
                'Username must have at least 5 letters' : null),
            password1: (value) => (value.length === 0 ? 'Fill the password please' :
                value.length < 8 ? 'Password must have at least 8 letters' :
                !/\d+/.test(value) ? 'Password must have at least 1 number' :
                !/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/.test(value) ? 'Password must have at least 1 special sign' :
                !/[A-Z]+/.test(value) ? 'Password must have at least 1 upper letter' : null),
            password2: (value) => (value.length === 0 ? 'Fill the password confirmation please' :
                value !== form.values.password1 ? 'Passwords are not the same' : null),
        },
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
        <form className="flex flex-col md:p-3 p-1 md:py-5 md:gap-3 justify-center" onSubmit={form.onSubmit(submitHandle)}>
            {registerMutation.isError &&
                <Alert icon={<BiErrorCircle size="1rem"/>} title="Email or username is taken!" color="color-error.6"
                       variant="outline" pt={20}/>}
            <TextInput
                placeholder="Enter your email"
                label="Email"
                radius="sm"
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
