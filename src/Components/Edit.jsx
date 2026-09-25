import React, { useState } from 'react'
import ModeIcon from '@mui/icons-material/Mode';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Typography } from '@mui/material';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="left" ref={ref} {...props} />;
});

function Edit({ item, updateProduct }) {

    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const [form, setForm] = useState({ title: item?.title, category: item?.category, price: item?.price, description: item?.description });
    const handleUpdate = () => {
        const updatedProduct = { ...item, ...form, price: Number(form.price) };
        console.log(updatedProduct);       
        updateProduct(updatedProduct);
        setOpen(false);
        alert('Product updated successfully');
    };

    return (
        <div>
            <Tooltip title="Edit" placement="top" slotProps={{ tooltip: { sx: { backgroundColor: 'transparent', color: '#2C1C13', fontSize: '14px' } } }}>
                <IconButton>
                    <ModeIcon sx={{ color: '#2C1C13', mt: -1 }} onClick={handleClickOpen} />
                </IconButton>
            </Tooltip>
            <Dialog open={open} slots={{ transition: Transition }} keepMounted onClose={handleClose} aria-describedby="alert-dialog-slide-description" role="alertdialog"
                slotProps={{ paper: { sx: { background: 'rgba(189, 180, 174, 0.45)', backdropFilter: 'blur(3px)', WebkitBackdropFilter: 'blur(10px)', width: '600px', maxWidth: '90vw', color: '#2C1C13' } } }}>
                <DialogTitle sx={{ fontFamily: '"Cormorant Garamond", serif', fontWeight: 500, fontSize: { xs: '26px', sm: '30px', md: '36px' } }}>{"Edit Product Details"}</DialogTitle>
                <DialogContent>
                    <Box>
                        <Box sx={{ mb: 2 }}>
                            <Typography sx={{ color: '#2C1C13', fontFamily: '"Inter", sans-serif' }}>Product Name</Typography>
                            <TextField onChange={(e) => setForm({ ...form, title: e.target.value })} value={form.title} id="outlined-basic" variant="outlined" fullWidth sx={{ '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: '#2C1C13' }, '&:hover fieldset': { borderColor: '#2C1C13' }, '&.Mui-focused fieldset': { borderColor: '#2C1C13' }, '& .MuiOutlinedInput-input': { color: '#2C1C13' } } }} />
                        </Box>
                        <Box sx={{ mb: 2 }}>
                            <Typography sx={{ color: '#2C1C13', fontFamily: '"Inter", sans-serif' }}>Category</Typography>
                            <TextField onChange={(e) => setForm({ ...form, category: e.target.value })} value={form.category} id="outlined-basic" placeholder='Category' variant="outlined" fullWidth sx={{ '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: '#2C1C13' }, '&:hover fieldset': { borderColor: '#2C1C13' }, '&.Mui-focused fieldset': { borderColor: '#2C1C13' }, '& .MuiOutlinedInput-input': { color: '#2C1C13' } } }} />
                        </Box>
                        <Box sx={{ mb: 2 }}>
                            <Typography sx={{ color: '#2C1C13', fontFamily: '"Inter", sans-serif' }}>Price</Typography>
                            <TextField onChange={(e) => setForm({ ...form, price: e.target.value })} type='number' value={form.price} id="outlined-basic" placeholder='Price' variant="outlined" fullWidth sx={{ '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: '#2C1C13' }, '&:hover fieldset': { borderColor: '#2C1C13' }, '&.Mui-focused fieldset': { borderColor: '#2C1C13' }, '& .MuiOutlinedInput-input': { color: '#2C1C13' } } }} />
                        </Box>
                        <Box sx={{ mb: 2 }}>
                            <Typography sx={{ color: '#2C1C13', fontFamily: '"Inter", sans-serif' }}>Description</Typography>
                            <TextField onChange={(e) => setForm({ ...form, description: e.target.value })} value={form.description} id="outlined-basic" placeholder='Description' variant="outlined" multiline maxRows={4} fullWidth sx={{ '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: '#2C1C13' }, '&:hover fieldset': { borderColor: '#2C1C13' }, '&.Mui-focused fieldset': { borderColor: '#2C1C13' }, '& .MuiOutlinedInput-input': { color: '#2C1C13' } } }} />
                        </Box>
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} autoFocus sx={{ color: '#2C1C13' }}>
                        Cancel
                    </Button>
                    <Button onClick={handleUpdate} sx={{ color: '#2C1C13' }}>Save</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default Edit