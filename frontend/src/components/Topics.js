import {BsChevronDown} from "react-icons/bs";

function Topics() {
    return (
        <div className="topics mt-10">
            <div className="topics-header">
                <h2 className="text-lg text-color-dark-light">BROWSE TOPICS</h2>
            </div>
            <div className="text-lg flex flex-col gap-5 cursor-pointer mt-8">
                <ul className="text-color-light-gray flex flex-col gap-8 pr-4 text-sm">
                    <li className="flex justify-between text-color-main">
                        <span>All</span> <span className="bg-color-dark px-1.5 py-0.5">13</span>
                    </li>
                    <li className="flex justify-between">
                        <span className="hover:text-color-main">Python</span> <span className="bg-color-dark px-1.5 py-0.5">15</span>
                    </li>
                    <li className="flex justify-between">
                        <span className="hover:text-color-main">Ruby</span> <span className="bg-color-dark px-1.5 py-0.5">4</span>
                    </li>
                    <li className="flex justify-between">
                        <span className="hover:text-color-main">React</span> <span className="bg-color-dark px-1.5 py-0.5">2</span>
                    </li>
                </ul>
                <div className="flex text-sm text-color-main mt-4 items-center">
                    More
                    <BsChevronDown className="ml-1 mt-1"/>
                </div>
            </div>
        </div>
    );
}

export default Topics;