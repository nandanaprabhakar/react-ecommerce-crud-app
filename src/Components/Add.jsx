import React, { useState } from 'react'
import AddCircleSharpIcon from '@mui/icons-material/AddCircleSharp';
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
    return <Slide direction="right" ref={ref} {...props} />;
});

function Add({addProduct}) {

    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    const [form, setForm] = useState({ title: '', category: '', price: '', description: '', image: '' });

    const handleSave = () => {
        const newProduct = {
            title: form.title,
            category: form.category,
            price: Number(form.price),
            description: form.description,
            image: form.image
        }
         addProduct(newProduct);
        alert('Product Added Successfully');
        setOpen(false);
    }


    return (
        <div>
            <Tooltip title="Add Product" placement="top" slotProps={{ tooltip: { sx: { backgroundColor: 'transparent', color: '#2C1C13', fontSize: '14px' } } }}>
                <IconButton>
                    <AddCircleSharpIcon sx={{ color: '#2C1C13', fontSize: '40px', position: 'sticky' }} onClick={handleClickOpen} />
                </IconButton>
            </Tooltip>

            <Dialog open={open} slots={{ transition: Transition }} keepMounted onClose={handleClose} aria-describedby="alert-dialog-slide-description" role="alertdialog"
                slotProps={{ paper: { sx: { background: 'rgba(189, 180, 174, 0.45)', backdropFilter: 'blur(3px)', WebkitBackdropFilter: 'blur(10px)', width: '600px', maxWidth: '90vw', color: '#2C1C13' } } }}>
                <DialogTitle sx={{ fontFamily: '"Cormorant Garamond", serif', fontWeight: 500, fontSize: { xs: '26px', sm: '30px', md: '36px' } }}>{"Add New Product"}</DialogTitle>
                <DialogContent>
                    <Box>
                        <Box sx={{ mb: 2 }}>
                            <Typography sx={{ color: '#2C1C13', fontFamily: '"Inter", sans-serif' }}>Product Name</Typography>
                            <TextField onChange={(e) => setForm({ ...form, title: e.target.value })} id="outlined-basic" placeholder='Product Name' variant="outlined" fullWidth sx={{ '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: '#2C1C13' }, '&:hover fieldset': { borderColor: '#2C1C13' }, '&.Mui-focused fieldset': { borderColor: '#2C1C13' }, '& .MuiOutlinedInput-input': { color: '#2C1C13' } } }} />
                        </Box>
                        <Box sx={{ mb: 2 }}>
                            <Typography sx={{ color: '#2C1C13', fontFamily: '"Inter", sans-serif' }}>Category</Typography>
                            <TextField onChange={(e) => setForm({ ...form, category: e.target.value })} id="outlined-basic" placeholder='Category' variant="outlined" fullWidth sx={{ '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: '#2C1C13' }, '&:hover fieldset': { borderColor: '#2C1C13' }, '&.Mui-focused fieldset': { borderColor: '#2C1C13' }, '& .MuiOutlinedInput-input': { color: '#2C1C13' } } }} />
                        </Box>
                        <Box sx={{ mb: 2 }}>
                            <Typography sx={{ color: '#2C1C13', fontFamily: '"Inter", sans-serif' }}>Price</Typography>
                            <TextField onChange={(e) => setForm({ ...form, price: e.target.value })} type='number' id="outlined-basic" placeholder='Price' variant="outlined" fullWidth sx={{ '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: '#2C1C13' }, '&:hover fieldset': { borderColor: '#2C1C13' }, '&.Mui-focused fieldset': { borderColor: '#2C1C13' }, '& .MuiOutlinedInput-input': { color: '#2C1C13' } } }} />
                        </Box>
                        <Box sx={{ mb: 2 }}>
                            <Typography sx={{ color: '#2C1C13', fontFamily: '"Inter", sans-serif' }}>Description</Typography>
                            <TextField onChange={(e) => setForm({ ...form, description: e.target.value })} id="outlined-basic" placeholder='Description' variant="outlined" multiline maxRows={4} fullWidth sx={{ '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: '#2C1C13' }, '&:hover fieldset': { borderColor: '#2C1C13' }, '&.Mui-focused fieldset': { borderColor: '#2C1C13' }, '& .MuiOutlinedInput-input': { color: '#2C1C13' } } }} />
                        </Box>
                        <Box>
                            <Typography sx={{ color: '#2C1C13', fontFamily: '"Inter", sans-serif' }}>Upload Image</Typography>
                            <Box sx={{ border: '1px solid #2C1C13', borderRadius: '4px', height: '90px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <input type="file" id="product-image" onChange={(e)=>{const file = e.target.files[0];
                                    if(file){
                                         const reader = new FileReader();

      reader.onload = () => {
        setForm({
          ...form,
          image: reader.result
        });
      };

      reader.readAsDataURL(file);
    }
                                    
                                }} hidden />
                                <label htmlFor="product-image">
                                    <AddCircleSharpIcon sx={{ fontSize: '50px', color: '#2C1C13', cursor: 'pointer' }} /></label>
                            </Box>
                        </Box>
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} autoFocus sx={{ color: '#2C1C13' }}>
                        Cancel
                    </Button>
                    <Button onClick={handleSave} sx={{ color: '#2C1C13' }}>Save</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default Add