import {Button, TextInput} from "@mantine/core";
import {Link} from "react-router-dom"
import {IoIosPeople} from "react-icons/io";

function Login() {
    return (
        <>
            <div className="flex justify-center align-middle">
                <IoIosPeople size="5em" className="text-color-main cursor-pointer"></IoIosPeople>
            </div>
            <div className="mx-auto max-w-md shadow-lg bg-color-dark rounded-lg h-[80vh]">
                <div className="bg-color-dark-light w-full px-8 flex justify-center text-color-light py-3 rounded-t-lg">
                    LOGIN
                </div>
                <p className="text-color-main flex justify-center pt-6">
                    Find your ideal project
                </p>
                <div className="px-8">
                    <form className="flex flex-col p-3 py-5 gap-3 justify-center">
                        <TextInput
                            placeholder="Enter your email"
                            label="Email"
                            radius="sm"
                        />
                        <TextInput
                            placeholder="Enter your password"
                            label="Password"
                            radius="sm"
                        />
                        <Button radius="sm" size="md" color="color-main.4"
                                type={"submit"}
                                mt={20}
                                mb={0}
                                >
                            Login
                        </Button>
                    </form>
                </div>
                <p className="text-color-light-gray flex justify-center pt-4">
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
