import {Button, Textarea, TextInput} from "@mantine/core";
import {Link} from "react-router-dom";
import {IoMdArrowBack} from "react-icons/io";

function FormContainer() {
    return (
        <div className="pt-10">
            <div className="h-[75vh] w-10/12 rounded-lg bg-color-dark mx-auto">
                <div className="bg-color-dark-light rounded-t-lg py-2 px-3">
                    <div className="flex items-center gap-2">
                        <Link to='/'>
                            <IoMdArrowBack className="text-color-main text-xl cursor-pointer"/>
                        </Link>
                        <h3 className="text-color-light">CREATE/EDIT PROJECT</h3>
                    </div>
                </div>
                <div className="layout__body">
                    <form className="flex flex-col p-3 py-5 gap-3 justify-center">
                        <TextInput
                            label="Enter Project Topic"
                            radius="sm"
                            px={10}
                            mb={10}
                        />
                        <TextInput
                            label="Project Name"
                            radius="sm"
                            px={10}
                            mb={10}
                        />
                        <Textarea
                            labelProps={{style: {color: '#b2bdbd'}}}
                            label="Project Description"
                            radius="sm"
                            px={10}
                            mb={10}
                        />
                        <div className="flex gap-6 justify-end pr-2.5">
                            <Link to="/">
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
                                Submit
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default FormContainer;
