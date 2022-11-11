
import { IconButton } from '@mui/material';
import { Grid, Typography } from '@mui/material';
import { ReactNode } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import styled from '@emotion/styled';
import { useSelector } from 'react-redux';
import { MonyType } from '../../model/MonyType';

interface MonyCartProps {
    backgroundcolor: string,
    title: string,
    icon: ReactNode,
    type: string
}


const MonyCart = ({ backgroundcolor, title, icon, type }: MonyCartProps): JSX.Element => {
    const monyArr = useSelector((state: { mony: MonyType[] }) => state.mony)


    const CustomIconBtn = styled(IconButton)({
        color: "white"
    })

    return (
        <Grid container alignItems={"center"} item xs={12} sm={6} md={4} borderRadius={2} p={2} bgcolor={backgroundcolor} sx={{ my: { xs: 2, md: 0 } }} color={"common.white"}>
            <Grid xs={6} >
                <Typography>{title}</Typography>
            </Grid>
            <Grid xs={6} display={"flex"} justifyContent={"flex-end"}>
                {icon}
            </Grid>

            {monyArr.filter(mony => mony.type === type).map(m => (

                <Grid item xs={12} container alignItems={"center"} key={m.id}>
                    <Grid item xs={4} >
                        <Typography>{m.title}</Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography>{m.price}</Typography>
                    </Grid>
                    <Grid item xs={2}>
                        <CustomIconBtn>
                            <DeleteIcon />
                        </CustomIconBtn>
                    </Grid>
                    <Grid item xs={2}>
                        <CustomIconBtn>
                            <EditIcon />
                        </CustomIconBtn>
                    </Grid>
                </Grid>
            ))}
        </Grid>

    )
}

export default MonyCart