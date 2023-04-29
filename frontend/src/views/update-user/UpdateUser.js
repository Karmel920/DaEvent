import Header from "../../layout/Header";
import Container from "../../layout/Container";
import {Grid} from "@mantine/core";
import UpdateUserContainer from "./components/UpdateUserContainer";
import ProjectContainer from "../project/components/ProjectContainer";
import Participants from "../project/components/Participants";

function UpdateUser() {
    return (
        <>
            <div className="">
                <Header/>
            </div>
            <Container>
                <div className="hidden lg:block">
                    <Grid gutter="xl" pt={50} mx={10}>
                        <Grid.Col span={2}>

                        </Grid.Col>
                        <Grid.Col span={8}>
                            <UpdateUserContainer/>
                        </Grid.Col>
                        <Grid.Col span={3}>

                        </Grid.Col>
                    </Grid>
                </div>
                <div className="block lg:hidden">
                    <Grid gutter="md" pt={50}>
                        <Grid.Col span={12}>
                            <UpdateUserContainer/>
                        </Grid.Col>
                    </Grid>
                </div>
            </Container>
        </>
    );
}

export default UpdateUser;