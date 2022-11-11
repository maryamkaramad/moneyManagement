

import { Grid, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';



const Header = (): JSX.Element => {
    return (
        <Grid item container xs={12} bgcolor={"primary.main"} p={1} borderRadius={2} alignItems={"center"} color={"common.white"} my={2}>
            <Grid xs={6}>
                <Typography> دخل و خرج</Typography>
            </Grid>
            <Grid xs={6} display={"flex"} justifyContent={"flex-end"}>
                <Link to={"/addMony"}>
                    <Button variant={"contained"} sx={{ bgcolor: "common.white", color: "primary.main", '&:hover': { bgcolor: "primary.main", color: "common.white", border: "1px solid white" } }} >
                        <Typography fontWeight={"bold"}> دخل و خرج جدید</Typography>
                    </Button>
                </Link>


            </Grid>
        </Grid>
    )
}

export default Header