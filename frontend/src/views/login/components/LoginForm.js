import {Alert, Button, TextInput} from "@mantine/core";
import {useForm} from "@mantine/form";
import {useMutation} from "react-query";
import {api} from "../../../api/ApiServices";
import {BiErrorCircle} from "react-icons/bi";
import {useAuth} from "../../../context/AuthContext";
import {useNavigate} from "react-router";

function LoginForm() {
    const form = useForm({
        initialValues: {
            email: '',
            password: '',
        }
    });

    const {me} = useAuth();

    const submitHandle = data => {
        loginMutation.mutate(data)
    };

    const navigate = useNavigate();

    const onSuccess = (data) => {
        me(data);
        navigate('/');
    }

    const loginMutation = useMutation(api.login, {
        onSuccess: ({data}) => onSuccess(data.access),
    });

    return (
        <form className="flex flex-col p-3 py-5 gap-3 justify-center" onSubmit={form.onSubmit(submitHandle)}>
            {loginMutation.isError && <Alert icon={<BiErrorCircle size="1rem"/>} title="Wrong email or password!" color="color-error.6" variant="outline" pt={20}/>}
            <TextInput
                placeholder="Enter your email"
                label="Email"
                radius="sm"
                type={"email"}
                {...form.getInputProps('email')}
            />
            <TextInput
                placeholder="Enter your password"
                label="Password"
                radius="sm"
                type={"password"}
                {...form.getInputProps('password')}
            />
            <Button radius="sm" size="md" color="color-main.4"
                    type={"submit"}
                    mt={20}
                    mb={0}
                    loading={loginMutation.isLoading}
            >
                Login
            </Button>
        </form>
    );
}

export default LoginForm;
