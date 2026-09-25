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
import Header from '../Components/Header';
import { FaShopify } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import InventoryOutlinedIcon from '@mui/icons-material/InventoryOutlined';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Footer from '../Components/Footer';

function HomePage() {

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
      <section className='banner'>
        <Header color={'#F5EEE5'} />
        <Box sx={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)', left: { xs: '6%', md: '8%' } }}>
          <Typography sx={{ color: '#E6D8C5', fontWeight: 500, fontFamily: '"Cormorant Garamond", serif', fontSize: { xs: '34px', sm: '44px', md: '58px' } }}>
            Curated Objects,<br /> Beautifully Made
          </Typography>
          <Typography sx={{ color: '#E6D8C5', fontWeight: 500, fontFamily: '"Inter", sans-serif', fontSize: { xs: '9px', sm: '13px', md: '15px' } }}>
            Thoughtfully selected pieces for a beautifully considered everyday.
          </Typography>
          <Link to={'/product'} style={{ textDecoration: 'none' }}>
            <Button variant='outlined' sx={{ color: '#C17925', borderColor: '#C17925', borderRadius: 60, left: '50%', transform: 'translateX(-50%)', mt: 2 }}>Explore Collection <EastSharpIcon sx={{ ml: 1 }} /></Button>
          </Link>
        </Box>
      </section>
      <Container className='text-center my-3'>
        <Typography sx={{ color: '#2C1C13', fontWeight: 500, fontFamily: '"Cormorant Garamond", serif', fontSize: { xs: '26px', sm: '30px', md: '36px' }, textAlign: 'center' }}>
          Discover Our Collection
        </Typography>
        <Row className="mt-3 g-3 justify-content-center">
          {product?.slice(4, 8)?.map((item, index) => (<Col xs={12} sm={6} md={6} lg={3} className="d-flex justify-content-center">
            <Card sx={{ width: '100%', maxWidth: 340, backgroundColor: 'transparent', borderColor: '#F5EEE5', transition: '0.3s', '&:hover': { transform: 'translateY(-12px)' } }}>
              <CardMedia component='img' sx={{ height: 250, objectFit: 'contain' }} image={item?.image} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{ color: '#2C1C13', fontFamily: '"Inter", sans-serif', fontSize: { xs: '', sm: '', md: '19px' }, textAlign: 'start' }}>
                  {item?.title?.slice(0, 27)}
                </Typography>
                <Typography variant="body2" sx={{ color: '#2C1C13', fontFamily: '"Inter", sans-serif', fontSize: { xs: '', sm: '', md: '17px' }, textAlign: 'start' }}>
                  ₹ {item?.price}
                </Typography>
              </CardContent>
              <CardActions>
                <Link to={`/product-details/${item?.id}`} style={{ textDecoration: 'none' }}>
                  <Button className='button' size="small" variant='text' sx={{ color: '#2C1C13', mt: -2 }}>View Details <EastSharpIcon sx={{ ml: 1 }} /></Button>
                </Link>
              </CardActions>
            </Card>
          </Col>))}
        </Row>
      </Container>
      <section className='banner2'>
        <Container>
          <Row className="align-items-center">
            <Col xs={12} sm={12} md={6}>
              <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: { xs: 300, md: 440 } }}>
                <Box component="img" src="https://static.vecteezy.com/system/resources/previews/069/182/161/large_2x/gold-watch-leather-strap-wooden-surface-dark-background-luxury-product-shot-free-photo.jpg"
                  sx={{ width: '100%', maxWidth: 550, height: { xs: 250, sm: 350, md: 390 }, objectFit: 'cover' }} alt="" />
              </Box>
            </Col>

            <Col xs={12} sm={12} md={6}>
              <Box
                sx={{
                  display: 'flex', flexDirection: 'column', justifyContent: 'center', minHeight: { xs: 300, md: 440 },
                  px: { xs: 2, md: 4 }, textAlign: { xs: 'start', md: 'left' }
                }}>
                <Typography sx={{ color: '#E6D8C5', fontWeight: 500, fontFamily: '"Cormorant Garamond", serif', fontSize: { xs: '28px', sm: '34px', md: '40px' }, lineHeight: 1.1, }}>
                  Every Product <br /> Tells a Story
                </Typography>
                <Typography sx={{ color: '#E6D8C5', fontWeight: 400, fontFamily: '"Inter", sans-serif', fontSize: { xs: '11px', sm: '13px', md: '15px' }, mt: 2 }}>
                  Thoughtfully chosen pieces that bring character, meaning, and beauty into your everyday life. Each product is selected with care, designed to complement your style, and made to become part of your story. From timeless essentials to distinctive statement pieces, we believe that the objects around us should feel personal, purposeful, and effortlessly beautiful. Every detail is considered to create a collection that adds warmth, charm, and a sense of individuality to the moments that matter.      </Typography>
              </Box>
            </Col>
          </Row>
        </Container>
      </section>
      <Container className='text-center my-3'>
        <Typography sx={{ color: '#2C1C13', fontWeight: 500, fontFamily: '"Cormorant Garamond", serif', fontSize: { xs: '26px', sm: '30px', md: '36px' }, textAlign: 'center' }}>
          What We Do
        </Typography>
        <Row className="mt-3 g-3 justify-content-center">
          <Col xs={12} sm={6} md={6} lg={4} className="d-flex justify-content-center">
            <Card sx={{ width: '100%', maxWidth: 340, backgroundColor: 'transparent', borderColor: '#F5EEE5' }}>
              <CardContent>
                <FaShopify style={{ color: '#2C1C13', fontSize: '40px' }} />
                <Typography gutterBottom variant="h5" component="div" sx={{ color: '#2C1C13', fontFamily: '"Inter", sans-serif', fontSize: { xs: '', sm: '', md: '19px' }, textAlign: 'center' }}>
                  Discover Products
                </Typography>
                <Typography variant="body2" sx={{ color: '#2C1C13', fontFamily: '"Inter", sans-serif', fontSize: { xs: '', sm: '', md: '17px' }, textAlign: 'center' }}>
                  Explore a wide range of products with clear details, images, prices, and categories.
                </Typography>
              </CardContent>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={6} lg={4} className="d-flex justify-content-center">
            <Card sx={{ width: '100%', maxWidth: 340, backgroundColor: 'transparent', borderColor: '#F5EEE5' }}>
              <CardContent>
                <TiShoppingCart style={{ color: '#2C1C13', fontSize: '40px' }} />
                <Typography gutterBottom variant="h5" component="div" sx={{ color: '#2C1C13', fontFamily: '"Inter", sans-serif', fontSize: { xs: '', sm: '', md: '19px' }, textAlign: 'center' }}>
                  Easy Shopping
                </Typography>
                <Typography variant="body2" sx={{ color: '#2C1C13', fontFamily: '"Inter", sans-serif', fontSize: { xs: '', sm: '', md: '17px' }, textAlign: 'center' }}>
                  Find the products you need through a simple, clean, and user-friendly shopping experience.                </Typography>
              </CardContent>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={6} lg={4} className="d-flex justify-content-center">
            <Card sx={{ width: '100%', maxWidth: 340, backgroundColor: 'transparent', borderColor: '#F5EEE5' }}>
              <CardContent>
                <InventoryOutlinedIcon sx={{ color: '#2C1C13', fontSize: '40px' }} />
                <Typography gutterBottom variant="h5" component="div" sx={{ color: '#2C1C13', fontFamily: '"Inter", sans-serif', fontSize: { xs: '', sm: '', md: '19px' }, textAlign: 'center' }}>
                  Manage Products
                </Typography>
                <Typography variant="body2" sx={{ color: '#2C1C13', fontFamily: '"Inter", sans-serif', fontSize: { xs: '', sm: '', md: '17px' }, textAlign: 'center' }}>
                  Easily add, edit, and delete products with convenient product management features.
                </Typography>
              </CardContent>
            </Card>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  )
}

export default HomePage