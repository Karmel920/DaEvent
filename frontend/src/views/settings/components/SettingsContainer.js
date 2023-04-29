import {Button} from "@mantine/core";
import {Link} from "react-router-dom";
import {IoMdArrowBack} from "react-icons/io";
import {useAuth} from "../../../context/AuthContext";

function SettingsContainer() {
    const {user} = useAuth();

    return (
        <div className="pt-10">
            <div className="h-[80vh] w-10/12 rounded-lg bg-color-dark mx-auto">
                <div className="bg-color-dark-light rounded-t-lg py-2 px-3">
                    <div className="flex items-center gap-2">
                        <Link to='/'>
                            <IoMdArrowBack className="text-color-main text-lg sm:text-xl cursor-pointer"/>
                        </Link>
                        <h3 className="text-color-light text-sm sm:text-base">SETTINGS</h3>
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <Link to='/update-user'>
                        <Button radius="sm" size="md" color="color-main.4"
                                type={"submit"}
                                mt={30}
                                mb={0}
                                w={200}
                                styles={{root: {zIndex: 1}}}
                        >
                            Edit profile
                        </Button>
                    </Link>
                    <Link to="/update-password">
                        <Button radius="sm" size="md" color="color-dark-light.4"
                                type={"submit"}
                                mt={30}
                                mb={0}
                                w={200}
                        >
                            Change password
                        </Button>
                    </Link>
                    <Link to="/delete-user">
                        <Button radius="sm" size="md" color="color-error.4"
                                type={"submit"}
                                mt={30}
                                mb={0}
                                w={200}
                        >
                            Delete account
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default SettingsContainer;
