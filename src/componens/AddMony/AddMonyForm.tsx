
import { Button, Typography } from '@mui/material';
import { TextField } from '@mui/material';
import { Grid } from '@mui/material';
import { useCallback, useState } from 'react';
import { MonyType } from './../../model/MonyType';
import { AddMonyFormOption } from '../../data/AddMonyFormOption'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Addmony } from "../../redux/slice/MonysSlice"
import AddmonyformDialog from './AddmonyformDialog';
import { useParams } from 'react-router-dom';
import { elementAcceptingRef } from '@mui/utils';
import {updatemony} from "../../redux/slice/MonysSlice"
function AddMonyForm(): JSX.Element {
    const [disabled, setDisabled] = useState<boolean>(false)
    const [openDialog, setOpenDialog] = useState<boolean>(false)
    const [state, setState] = useState<string>('اضافه کردن')
    const [form, setForm] = useState<MonyType>({
        id: Math.floor(Math.random() * 1000),
        type: "",
        price: '',
        title: ""
    })
    const { monyId } = useParams()
    const monyArr = useSelector((state: { mony: MonyType[] }) => state.mony)
    const dispatch = useDispatch()
    const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }, [form])

    const handlesubmit = () => {
  
        if (state === 'اضافه کردن') {
        dispatch(Addmony(form))}
        else if(state === 'تایید'){
            dispatch(updatemony(form))
        }

        setOpenDialog(true)
    }
    useEffect(() => {
        setDisabled(form.title === '' || form.price === '')
    }, [form])
    useEffect(() => {
        const c = monyArr.filter(arr => arr.id === Number(monyId))[0]
        if (c) {
          setForm(c)
          setState('تایید')
        }
      }, [])
    return (
        <Grid item xs={12} p={2}>
            <Grid container item xs={12} p={2}>
                <Grid item xs={12} md={4}>
                    <TextField onChange={handleChange} select value={form.type} fullWidth label={"نوع دخل و خرج"} name="type" SelectProps={{ native: true }}>
                        {AddMonyFormOption.map(o => (
                            <option key={o.id} value={o.value}>
                                {o.title}
                            </option>
                        ))}
                    </TextField>
                </Grid>
                <Grid item xs={12} md={4}>
                    <TextField onChange={handleChange} fullWidth label={" موضوع"} value={form.title} name="title" />
                </Grid>
                <Grid item xs={12} md={4}>
                    <TextField type={"number"} onChange={handleChange} fullWidth label={" مبلغ"} value={form.price} name="price" />
                </Grid>
            </Grid>
            <Grid item xs={12} p={2}>
                <Button variant={"contained"} fullWidth disabled={disabled} color={form.type === "income" ? "success" : "error"} onClick={handlesubmit}>
                    <Typography>{state} {form.type === "income" ? "درآمد" : "هزینه"}</Typography>
                </Button>
            </Grid>
            <AddmonyformDialog open={openDialog} />
        </Grid>
    )
}

export default AddMonyForm