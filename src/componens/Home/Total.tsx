
import { Grid, Typography } from '@mui/material';



const Total = (): JSX.Element => {
    return (
        <Grid container alignItems={"center"} item xs={12} md={4} borderRadius={2} p={2} bgcolor={"secondary.main"} sx={{ my: { xs: 2, md: 0 } }} color={"common.white"}>
            <Grid xs={6} >
                <Typography>موجودی</Typography>
            </Grid>
            <Grid xs={6} display={"flex"} justifyContent={"flex-end"}>
                <Typography>13000تومان</Typography>
            </Grid>
        </Grid>
    )
}

export default Total