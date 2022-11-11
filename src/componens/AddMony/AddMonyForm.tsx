
import { Button, Typography } from '@mui/material';
import { TextField } from '@mui/material';
import { Grid } from '@mui/material';
import { useState } from 'react';
import { MonyType } from './../../model/MonyType';
import { AddMonyFormOption } from '../../data/AddMonyFormOption'
import { useEffect } from 'react';



function AddMonyForm(): JSX.Element {
    const [disabled, setDisabled] = useState<boolean>(false)
    const [form, setForm] = useState<MonyType>({
        id: Math.floor(Math.random() * 1000),
        type: "",
        price: 0,
        title: ""
    })
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }
    useEffect(() => {
        setDisabled(form.title === '' || form.price === 0)
    }, [form])
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
                <Button variant={"contained"} fullWidth disabled={disabled} color={form.type === "income" ? "success" : "error"}>
                    <Typography>اضافه کردن {form.type === "income" ? "درآمد" : "هزینه"}</Typography>
                </Button>
            </Grid>
        </Grid>
    )
}

export default AddMonyForm