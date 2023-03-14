import {BsChevronDown} from "react-icons/bs";

function Topics() {
    return (
        <div className="topics ml-16 mt-10">
            <div className="topics-header">
                <h2 className="text-2xl text-color-dark-light">Browse Topics</h2>
            </div>
            <div className="text-lg flex flex-col gap-5 cursor-pointer">
                <ul className="topics-list text-color-light-gray">
                    <li>
                        All 13
                    </li>
                    <li>
                        Python 15
                    </li>
                    <li>
                        Ruby 4
                    </li>
                    <li>
                        React 2
                    </li>
                </ul>
                <a className="flex text-color-main">
                    More
                    <BsChevronDown className="mt-1.5"/>
                </a>
            </div>
        </div>
    );
}

export default Topics;