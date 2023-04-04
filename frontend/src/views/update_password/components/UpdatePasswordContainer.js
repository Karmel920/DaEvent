import {Button, Textarea, TextInput} from "@mantine/core";
import {Link} from "react-router-dom";
import {IoMdArrowBack} from "react-icons/io";

function UpdatePasswordContainer() {
    return (
        <div className="pt-10">
            <div className="h-[80vh] w-10/12 rounded-lg bg-color-dark mx-auto">
                <div className="bg-color-dark-light rounded-t-lg py-2 px-3">
                    <div className="flex items-center gap-2">
                        <Link to='/settings'>
                            <IoMdArrowBack className="text-color-main text-xl cursor-pointer"/>
                        </Link>
                        <h3 className="text-color-light">EDIT YOUR PASSWORD</h3>
                    </div>
                </div>
                <div className="">
                    <form className="flex flex-col p-3 py-5 gap-3 justify-center">
                        <TextInput
                            label="Old password"
                            radius="sm"
                            px={10}
                            mb={10}
                        />
                        <TextInput
                            label="New password"
                            radius="sm"
                            px={10}
                            mb={10}
                        />
                        <TextInput
                            label="Confirm new password"
                            radius="sm"
                            px={10}
                            mb={10}
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

export default UpdatePasswordContainer;
