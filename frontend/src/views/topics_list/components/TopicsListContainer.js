import {TextInput} from "@mantine/core";
import {Link, useParams} from "react-router-dom";
import {IoMdArrowBack} from "react-icons/io";
import {AiOutlineSearch} from "react-icons/ai";
import {useMutation} from "react-query";
import {api} from "../../../api/ApiServices";
import {useEffect, useState} from "react";
import {useForm} from "@mantine/form";
import {useNavigate} from "react-router";

function TopicsListContainer() {
    const [topics, setTopics] = useState([]);
    const [allCount, setAllCount] = useState([]);
    const {slug} = useParams();
    const navigate = useNavigate();

    const form = useForm({
        initialValues: {
            query_search: '',
        },
    });

    const submitHandle = data => {
        navigate(`/topics/${data.query_search}`);
        form.reset();
    };

    useEffect(() => {
        if(slug) {
            topicsByNameMutation.mutate(slug);
        } else{
            topicsMutation.mutate();
        }
    }, [slug]);

    const topicsMutation = useMutation(api.allTopics, {
        onSuccess: ({data}) => {
            setTopics(data.topics);
            setAllCount(data.all_count);
        }
    });

    const topicsByNameMutation = useMutation(api.topicsByName, {
        onSuccess: ({data}) => {
            setTopics((data.topics));
            setAllCount(data.all_count);
        }
    })

    return (
        <div className="pt-10">
            <div className="h-[80vh] w-10/12 rounded-lg bg-color-dark mx-auto overflow-auto">
                <div className="bg-color-dark-light rounded-t-lg py-2 px-3">
                    <div className="flex items-center gap-2">
                        <Link to='/'>
                            <IoMdArrowBack className="text-color-main text-lg sm:text-xl cursor-pointer"/>
                        </Link>
                        <h3 className="text-color-light text-sm sm:text-base">BROWSE TOPICS</h3>
                    </div>
                </div>
                <div className="px-6 py-6 flex flex-col gap-4">
                    <form className="w-full" onSubmit={form.onSubmit(submitHandle)}>
                        <TextInput
                            placeholder="Search for topics..."
                            radius="sm"
                            size="md"
                            w={"100%"}
                            icon={<AiOutlineSearch size="1.2rem"/>}
                            styles={{input: {backgroundColor: "#51546e", borderWidth: "0px"}}}
                            {...form.getInputProps('query_search')}
                        />
                    </form>
                    <ul className="text-color-light-gray flex flex-col gap-4 pr-4">
                        <Link to={"/"}>
                            <li className="flex justify-between text-color-main border-solid border-b border-color-gray">
                                <span className="cursor-pointer pb-4 text-sm sm:text-base">All</span> <span
                                className="bg-color-dark px-1.5 py-0.5 text-sm sm:text-base">{allCount}</span>
                            </li>
                        </Link>
                        {topics.map(item =>
                            <Link key={item.id} to={`/projects/${item.name}`}>
                                <li key={item.id}
                                    className="flex justify-between border-solid border-b border-color-gray">
                                    <span className="hover:text-color-main cursor-pointer pb-4 text-sm sm:text-base">{item.name}</span>
                                    <span className="bg-color-dark px-1.5 py-0.5 text-sm sm:text-base">{item.topic_projects_count}</span>
                                </li>
                            </Link>)
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default TopicsListContainer;
