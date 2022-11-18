
import { Button } from '@mui/material';
import { Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';



const AddMonyHeader = (): JSX.Element => {
    return (
        <Grid container item xs={12} alignItems={"center"} my={2}>
            <Grid item xs={6} >
                <Typography>
                      دخل و خرج ها
                </Typography>
            </Grid>
            <Grid item xs={6} display={"flex"} justifyContent={"flex-end"}>
                <Link to={"/"}>
                    <Button variant={"contained"}>
                        <Typography>
                            بازگشت به صفحه ی اصلی
                        </Typography>
                    </Button>
                </Link>
            </Grid>
        </Grid>
    )
}

export default AddMonyHeader