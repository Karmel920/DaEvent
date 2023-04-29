import Header from "../../layout/Header";
import Container from "../../layout/Container";
import {Grid} from "@mantine/core";
import SettingsContainer from "./components/SettingsContainer";
import ProjectContainer from "../project/components/ProjectContainer";
import Participants from "../project/components/Participants";

function Settings() {
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
                            <SettingsContainer/>
                        </Grid.Col>
                        <Grid.Col span={3}>

                        </Grid.Col>
                    </Grid>
                </div>
                <div className="block lg:hidden">
                    <Grid gutter="xs" pt={50}>
                        <Grid.Col span={12}>
                            <SettingsContainer/>
                        </Grid.Col>
                    </Grid>
                </div>
            </Container>
        </>
    );
}

export default Settings;