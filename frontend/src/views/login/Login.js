import Header from "../../layout/Header";
import {Button, TextInput} from "@mantine/core";
import {Link} from "react-router-dom"

function Login() {
    return (
        <>
            <div>
                <Header />
            </div>
            <div className="mx-auto mt-[5vh] max-w-md shadow-lg bg-color-dark rounded-lg h-[80vh]">
                <div className="bg-color-dark-light w-full px-8 flex justify-center text-color-light py-3 rounded-t-lg">
                    LOGIN
                </div>
                <p className="text-color-main flex justify-center pt-6">
                    Find your ideal project
                </p>
                <div className="px-8">
                    <form className="flex flex-col p-3 py-5 gap-3 justify-center">
                        <TextInput
                            labelProps={{ style: { color: '#b2bdbd' } }}
                            placeholder="Enter your login"
                            label="Login"
                            radius="lg"
                        />
                        <TextInput
                            labelProps={{ style: { color: '#b2bdbd' } }}
                            placeholder="Enter your password"
                            label="Password"
                            radius="lg"
                        />
                        <Button radius="lg" size="md" color="color-main.3"
                                type={"submit"}
                                mt={30}
                                mb={0}
                                >
                            Login
                        </Button>
                    </form>
                </div>
                <p className="text-color-light-gray flex justify-center pt-6">
                    Haven't signed up yet?
                </p>
                <Link to='/register'>
                    <p className="text-color-main flex justify-center cursor-pointer">
                        Sign up
                    </p>
                </Link>
            </div>
        </>
    );
}

export default Login;
