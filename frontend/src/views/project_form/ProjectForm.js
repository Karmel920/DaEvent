import {MdAdd} from "react-icons/md";
import {Button, TextInput, ThemeIcon} from "@mantine/core";
import Header from "../../layout/Header";
import {IoMdArrowBack} from "react-icons/io";
import {Link} from "react-router-dom";

function ProjectForm() {
    return (
        <>
            <div className="">
                <Header/>
            </div>
            <div className="pt-24">
                <div className="h-5/6 w-11/12 rounded-lg bg-color-dark mx-auto">
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
                                labelProps={{style: {color: '#b2bdbd'}}}
                                label="Enter Project Topic"
                                radius="sm"
                                sx={{
                                    'color': "inherit",
                                }}
                            />
                            <TextInput
                                labelProps={{style: {color: '#b2bdbd'}}}
                                label="Project Name"
                                radius="sm"
                            />
                            <TextInput
                                labelProps={{style: {color: '#b2bdbd'}}}
                                label="Project Description"
                                radius="sm"
                            />
                            <Button radius="sm" size="md" color="color-main.3"
                                    type={"submit"}
                                    mt={30}
                                    mb={0}
                            >
                                Submit
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProjectForm;