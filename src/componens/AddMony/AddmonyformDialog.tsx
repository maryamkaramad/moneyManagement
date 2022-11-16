import Dialog from "@mui/material/Dialog"
import Grid from "@mui/material/Grid"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import { Link } from "react-router-dom"
interface AddmonyformDialogProps {
    open: boolean
}

const AddmonyformDialog = ({ open }: AddmonyformDialogProps) => {
    return (
        <Dialog open={open} >
            <Grid container p={2}>
                <Grid item xs={12} textAlign={"center"} mb={4}>
                    <Typography>
                        دخل و خرج با موفقیت انجام شد</Typography>
                </Grid>
                <Grid display={"flex"} item xs={12} justifyContent={"center"} alignItems={"center"}>
                    <Link to={"/"}>  <Button variant={"contained"}>
                        <Typography>
                            بازگشت به صفحه ی اصلی
                        </Typography>
                    </Button></Link>

                </Grid>

            </Grid>
        </Dialog>
    )
}

export default AddmonyformDialog