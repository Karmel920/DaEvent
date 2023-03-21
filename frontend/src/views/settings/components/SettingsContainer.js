import {Button} from "@mantine/core";
import {Link} from "react-router-dom";
import {IoMdArrowBack} from "react-icons/io";

function SettingsContainer() {
    return (
        <div className="pt-10">
            <div className="h-[80vh] w-10/12 rounded-lg bg-color-dark mx-auto">
                <div className="bg-color-dark-light rounded-t-lg py-2 px-3">
                    <div className="flex items-center gap-2">
                        <Link to='/'>
                            <IoMdArrowBack className="text-color-main text-xl cursor-pointer"/>
                        </Link>
                        <h3 className="text-color-light">SETTINGS</h3>
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <Link to='/update-user'>
                        <Button radius="sm" size="md" color="color-main.4"
                                type={"submit"}
                                mt={30}
                                mb={0}
                                w={200}
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
                    <Button radius="sm" size="md" color="color-error.4"
                            type={"submit"}
                            mt={30}
                            mb={0}
                            w={200}
                    >
                        Delete account
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default SettingsContainer;
