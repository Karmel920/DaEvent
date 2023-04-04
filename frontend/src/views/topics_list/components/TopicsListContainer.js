import {TextInput} from "@mantine/core";
import {Link} from "react-router-dom";
import {IoMdArrowBack} from "react-icons/io";
import {AiOutlineSearch} from "react-icons/ai";

function TopicsListContainer() {
    return (
        <div className="pt-10">
            <div className="h-[80vh] w-10/12 rounded-lg bg-color-dark mx-auto overflow-auto">
                <div className="bg-color-dark-light rounded-t-lg py-2 px-3">
                    <div className="flex items-center gap-2">
                        <Link to='/'>
                            <IoMdArrowBack className="text-color-main text-xl cursor-pointer"/>
                        </Link>
                        <h3 className="text-color-light">BROWSE TOPICS</h3>
                    </div>
                </div>
                <div className="px-6 py-6 flex flex-col gap-4">
                    <form className="w-full">
                        <TextInput
                            placeholder="Search for topics..."
                            radius="sm"
                            size="md"
                            w={"100%"}
                            icon={<AiOutlineSearch size="1.2rem"/>}
                            styles={{input: {backgroundColor: "#51546e", borderWidth: "0px"}}}
                        />
                    </form>
                    <ul className="text-color-light-gray flex flex-col gap-4 pr-4">
                        <li className="flex justify-between text-color-main border-solid border-b border-color-gray">
                            <span className="cursor-pointer pb-4">All</span> <span className="bg-color-dark px-1.5 py-0.5">13</span>
                        </li>
                        <li className="flex justify-between border-solid border-b border-color-gray">
                            <span className="hover:text-color-main cursor-pointer pb-4">Python</span> <span className="bg-color-dark px-1.5 py-0.5">15</span>
                        </li>
                        <li className="flex justify-between border-solid border-b border-color-gray">
                            <span className="hover:text-color-main cursor-pointer pb-4">Ruby</span> <span className="bg-color-dark px-1.5 py-0.5">4</span>
                        </li>
                        <li className="flex justify-between border-solid border-b border-color-gray">
                            <span className="hover:text-color-main cursor-pointer pb-4">React</span> <span className="bg-color-dark px-1.5 py-0.5">2</span>
                        </li>
                        <li className="flex justify-between border-solid border-b border-color-gray">
                            <span className="hover:text-color-main cursor-pointer pb-4">Django</span> <span className="bg-color-dark px-1.5 py-0.5">1</span>
                        </li>
                        <li className="flex justify-between border-solid border-b border-color-gray">
                            <span className="hover:text-color-main cursor-pointer pb-4">Java</span> <span className="bg-color-dark px-1.5 py-0.5">3</span>
                        </li>
                        <li className="flex justify-between border-solid border-b border-color-gray">
                            <span className="hover:text-color-main cursor-pointer pb-4">Go</span> <span className="bg-color-dark px-1.5 py-0.5">7</span>
                        </li>
                        <li className="flex justify-between border-solid border-b border-color-gray">
                            <span className="hover:text-color-main cursor-pointer pb-4">C++</span> <span className="bg-color-dark px-1.5 py-0.5">9</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default TopicsListContainer;
