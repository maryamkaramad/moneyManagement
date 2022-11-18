import { Grid } from '@mui/material'

import Header from '../componens/Home/Header'
import MonyCart from '../componens/Home/MonyCart'
import Total from '../componens/Home/Total'
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import Chart from '../componens/Home/Chart';




const Home = (): JSX.Element => {



    return (
        <Grid container xs={12} p={2}>
            <Header />
            <Total />
            <MonyCart backgroundcolor={"success.light"} title={"هزینه ها"} icon={<TrendingUpIcon />} type={"income"} />
            <MonyCart backgroundcolor={"error.light"} title={"خرج ها"} icon={<TrendingDownIcon />} type={"expense"} />
            {/* <Chart /> */}
        </Grid>
    )
}

export default Home