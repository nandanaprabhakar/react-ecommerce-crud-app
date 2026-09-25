import React, { useEffect, useState } from 'react'
import Typography from '@mui/material/Typography';
import { Box, Button } from '@mui/material';
import EastSharpIcon from '@mui/icons-material/EastSharp';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeIcon from '@mui/icons-material/Mode';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Header from '../Components/Header';
import Edit from '../Components/Edit';
import Add from '../Components/Add';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Footer from '../Components/Footer';

function Product() {

  const [product, setProduct] = useState([]);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState('');

  const getProduct = async () => {
    try {
      const response = await axios.get('https://fakestoreapi.com/products')
      console.log(response);
      setProduct(response.data);
    }
    catch (err) {
      console.log(err);
      setError('Something went wrong while loading products');
    }
    finally {
      setLoading(false);
    }
  }

  const handleAddProduct = (newProduct) => {
    const product = { ...newProduct, id: Date.now() };
    console.log(product);  
    setProduct((previousProducts) => [
        ...previousProducts,
        product
    ]);
};

  const handleDelet = (id, title) => {
    try {
      const confirmDelete = window.confirm(
        `Are you sure you want to delete ${title}?`
      )
      if (confirmDelete) {
        setProduct((previousProducts) =>
      previousProducts.filter((item) => item.id !== id))
          alert('Delete Successfully');
      }
    }
    catch (err) {
      console.log(err);
    }
  }

  const handleUpdateProduct = (updatedProduct) => {
  setProduct((previousProducts) =>
    previousProducts.map((product) =>
      product.id === updatedProduct.id
        ? updatedProduct
        : product
    )
  );
};

  useEffect(() => {
    getProduct();
  }, []);

  if (loading) {
    return (
      <Typography sx={{ color: '#2C1C13', fontFamily: '"Cormorant Garamond", serif', fontWeight: 500, fontSize: { xs: '34px', sm: '44px', md: '58px' }, textAlign: 'center', mt: 5 }}>
        Loading Products
      </Typography>
    );
  }

  if (error) {
    return (
      <Typography sx={{ color: '#2C1C13', fontFamily: '"Cormorant Garamond", serif', fontWeight: 500, fontSize: { xs: '34px', sm: '44px', md: '58px' }, textAlign: 'center', mt: 5 }}>
       {error}
      </Typography>
    );
  }

  return (
    <div>
      <Header color={'#2C1C13'} />
      <Container className='text-center my-3'>
        <Typography sx={{ color: '#2C1C13', fontWeight: 500, fontFamily: '"Cormorant Garamond", serif', fontSize: { xs: '26px', sm: '30px', md: '36px' }, textAlign: 'center' }}>
          Discover Our Collection
        </Typography>
        <Row className="mt-3 g-3 justify-content-center">
          {product?.map(item => (
            <Col xs={12} sm={6} md={6} lg={3} key={item.id} className="d-flex justify-content-center">
              <Card sx={{ width: '100%', maxWidth: 340, backgroundColor: 'transparent', borderColor: '#F5EEE5' ,transition: '0.3s', '&:hover': { transform: 'translateY(-12px)'} }}>
                <CardMedia component="img" sx={{ height: 250, width: '100%', objectFit: 'contain', p: 2 }} image={item?.image} alt={item?.title} />

                <CardContent>
                  <Typography gutterBottom variant="h5" component="div" sx={{ color: '#2C1C13', fontFamily: '"Inter", sans-serif', fontSize: { xs: '', sm: '', md: '19px' }, textAlign: 'start' }}>
                    {item?.title?.slice(0, 24)}...
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#2C1C13', fontFamily: '"Inter", sans-serif', fontSize: { xs: '', sm: '', md: '17px' }, textAlign: 'start' }}>
                    ₹ {item?.price}
                  </Typography>
                </CardContent>
                <CardActions>
                  <div style={{ width: '100%' }} className="d-flex justify-content-between align-items-center px-2">
                    <Link to={`/product-details/${item?.id}`} style={{ textDecoration: 'none' }}>
                      <Button className='button' size="small" variant='text' sx={{ color: '#2C1C13', mt: -2 }}>View Details <EastSharpIcon sx={{ ml: 1 }} /></Button>
                    </Link>
                    <div className="d-flex align-items-start gap-1">
                      <Tooltip title="Delete" placement="top" slotProps={{ tooltip: { sx: { backgroundColor: 'transparent', color: '#2C1C13', fontSize: '14px' } } }}>
                        <IconButton>
                          <DeleteIcon onClick={() => handleDelet(item?.id, item?.title)} sx={{ color: '#2C1C13', mt: -1 }} />
                        </IconButton>
                      </Tooltip>
                      <Edit item={item} productId={item?.id} updateProduct={handleUpdateProduct}/>
                    </div>
                  </div>
                </CardActions>
              </Card>
            </Col>
          ))}
          <div className='d-flex justify-content-end'>
            <Add addProduct={handleAddProduct}/>
          </div>
        </Row>
      </Container>
      <Footer/>
    </div>
  )
}

export default Product