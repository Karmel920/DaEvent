import Header from "../../layout/Header";
import {Grid} from "@mantine/core";
import Container from "../../layout/Container";
import Participants from "./components/Participants";
import ProjectContainer from "./components/ProjectContainer";
import ProfileBio from "../profile/components/ProfileBio";
import UserFeed from "../profile/components/UserFeed";
import UserActivities from "../profile/components/UserActivities";

function Home() {
    return (
        <>
            <div className="">
                <Header/>
            </div>
            <Container>
                <div className="hidden lg:block">
                    <Grid gutter="xl" pt={50} mx={10}>
                        <Grid.Col span={9}>
                            <ProjectContainer/>
                        </Grid.Col>
                        <Grid.Col span={3}>
                            <Participants/>
                        </Grid.Col>
                    </Grid>
                </div>
                <div className="block lg:hidden">
                    <Grid gutter="md" pt={50} mx={10}>
                        <Grid.Col span={12}>
                            <ProjectContainer/>
                            <Participants/>
                        </Grid.Col>
                    </Grid>
                </div>
            </Container>
        </>
    );
}

export default Home;