import { Grid } from '@mui/material';

import Header from "./components/Header"
import List from "./components/List"
import Map from "./components/Map"

export const App = () => {
    return (
        <>
            <Header />
            <Grid>
                <Grid>
                    <List />
                </Grid>
                <Grid>
                    <Map />
                </Grid>
            
            </Grid>

        </>
    )
}

