import Header from "../../layout/Header";
import {Button, TextInput} from "@mantine/core";

function Login() {
    return (
        <>
            <div>
                <Header />
            </div>
            <div className="mx-auto mt-[25vh] max-w-md shadow-lg bg-color-dark-medium rounded-lg px-8">
                <form className="flex flex-col p-3 py-8">
                    <TextInput
                        labelProps={{ style: { color: '#8b8b8b' } }}
                        placeholder="Enter your login"
                        label="Login"
                        radius="lg"
                    />
                    <TextInput
                        labelProps={{ style: { color: '#8b8b8b' } }}
                        placeholder="Enter your password"
                        label="Password"
                        radius="lg"
                    />
                    <Button radius="lg" size="md" color="indigo"
                            type={"submit"}
                            fullWidth
                            mt={20}
                            mb={0}
                            sx={{backgroundColor: "#71c6dd", "&:hover": {backgroundColor: "#5698a8"}, textColor: "#8b8b8b"}}>
                        Login
                    </Button>
                </form>
            </div>
        </>
    );
}

export default Login;