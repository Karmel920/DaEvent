import Header from "../../layout/Header";
import {Grid} from "@mantine/core";
import Container from "../../layout/Container";
import Participants from "./components/Participants";
import ProjectContainer from "./components/ProjectContainer";

function Home() {
    return (
        <>
            <div className="">
                <Header/>
            </div>
            <Container>
                <Grid gutter="xl" pt={50} mx={10}>
                    <Grid.Col span={9}>
                        <ProjectContainer/>
                    </Grid.Col>
                    <Grid.Col span={3}>
                        <Participants/>
                    </Grid.Col>
                </Grid>
            </Container>
        </>
    );
}

export default Home;