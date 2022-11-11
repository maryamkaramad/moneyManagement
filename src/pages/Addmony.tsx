import React from 'react'
import { Grid } from '@mui/material';
import AddMonyHeader from '../componens/AddMony/AddMonyHeader';
import AddMonyForm from '../componens/AddMony/AddMonyForm';



const Addmony = (): JSX.Element => {
    return (
        <Grid container p={2}>
            <AddMonyHeader />
            <AddMonyForm />
        </Grid>
    )
}

export default Addmony