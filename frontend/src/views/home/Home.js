import Header from "../../layout/Header";
import Topics from "./components/Topics";
import Activities from "./components/Activities";

function Home() {
    return (
        <>
            <div>
                <Header/>
            </div>
            <div className="flex justify-between mx-16">
                <div className="">
                    <Topics/>
                </div>
                <div>
                    <h1 className="text-3xl text-color-light">Feed section</h1>
                </div>
                <div>
                    <Activities/>
                </div>
            </div>
        </>
    );
}

export default Home;