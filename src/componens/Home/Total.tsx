
import { Grid, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { MonyType } from '../../model/MonyType';
import { useMemo } from 'react'

const Total = (): JSX.Element => {
    const monyArr = useSelector((state: { mony: MonyType[] }) => state.mony)
    const income: number = useMemo(() => monyArr.filter(m => m.type === "income").reduce((count: number, item: MonyType) => count = count + +item.price, 0), [monyArr])
    const expense: number = useMemo(() => monyArr.filter(m => m.type === "expense").reduce((count: number, item: MonyType) => count = count + +item.price, 0), [monyArr])
    const total: number = income - expense


    return (
        <Grid container alignItems={"center"} item xs={12} md={4} borderRadius={2} p={2} bgcolor={"secondary.main"} sx={{ my: { xs: 2, md: 0 } }} color={"common.white"}>
            <Grid xs={6} >
                <Typography>موجودی</Typography>
            </Grid>
            <Grid xs={6} display={"flex"} justifyContent={"flex-end"}>
                <Typography>تومان{total}</Typography>
            </Grid>
        </Grid>
    )
}

export default Total