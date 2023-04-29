import Header from "../../layout/Header";
import Container from "../../layout/Container";
import {Grid} from "@mantine/core";
import UpdatePasswordContainer from "./components/UpdatePasswordContainer";
import ProjectContainer from "../project/components/ProjectContainer";
import Participants from "../project/components/Participants";

function UpdatePassword() {
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
                            <UpdatePasswordContainer/>
                        </Grid.Col>
                        <Grid.Col span={3}>

                        </Grid.Col>
                    </Grid>
                </div>
                <div className="block lg:hidden">
                    <Grid gutter="md" pt={50}>
                        <Grid.Col span={12}>
                            <UpdatePasswordContainer/>
                        </Grid.Col>
                    </Grid>
                </div>
            </Container>
        </>
    );
}

export default UpdatePassword;