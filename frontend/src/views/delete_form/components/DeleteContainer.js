import {Button, Textarea, TextInput} from "@mantine/core";
import {Link} from "react-router-dom";
import {IoMdArrowBack} from "react-icons/io";

function DeleteContainer() {
    return (
        <div className="pt-10">
            <div className="h-[75vh] w-10/12 rounded-lg bg-color-dark mx-auto">
                <div className="bg-color-dark-light rounded-t-lg py-2 px-3">
                    <div className="flex items-center gap-2">
                        <Link to='/'>
                            <IoMdArrowBack className="text-color-main text-xl cursor-pointer"/>
                        </Link>
                        <h3 className="text-color-light">BACK</h3>
                    </div>
                </div>
                <div className="py-6 px-8 flex flex-col gap-2">
                    <div className="text-color-light-gray text-lg">
                        Are you sure you want to delete "Project name"?
                    </div>
                    <Button radius="sm" size="sm" color="color-main.4"
                            type={"submit"}
                            mb={0}
                            mt={15}
                            w={100}
                    >
                        Confirm
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default DeleteContainer;
