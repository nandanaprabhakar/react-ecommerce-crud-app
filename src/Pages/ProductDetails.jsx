import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Box, Button, Typography } from '@mui/material';
import Header from '../Components/Header';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Footer from '../Components/Footer';

function ProductDetails() {

    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const getProduct = async () => {
        try {
            const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
            setProduct(response.data);
        } catch (err) {
            console.log(err);
        }
    };
    useEffect(() => {
        getProduct();
    }, []);

    return (
        <div>
            <Header color={'#2C1C13'} />

            <Container>
                <Row className="d-flex justify-content-center align-items-center" style={{ minHeight: '90vh' }}>

                    <Col xs={12} md={6} className="d-flex justify-content-center">
                        <Box component="img" src={product?.image} alt='' sx={{ width: '100%', maxWidth: '400px', height: '400px', objectFit: 'contain' }} />
                    </Col>
                    <Col xs={12} md={6} className="d-flex justify-content-center">
                        <Box sx={{ width: '100%', maxWidth: 500, p: { xs: 2, md: 0 } }}>
                            <Typography sx={{ color: '#22160f', fontFamily: '"Inter", sans-serif', fontSize: '14px', textTransform: 'capitalize', textAlign: { xs: 'center', sm: 'start' }, mb: 1 }}>
                                {product?.category}
                            </Typography>
                            <Typography sx={{ color: '#22160f', fontFamily: '"Cormorant Garamond", serif', fontWeight: 700, fontSize: { xs: '25px', sm: '29px' }, textAlign: { xs: 'center', sm: 'start' }, mb: 1 }}>
                                {product?.title}
                            </Typography>
                            <Typography sx={{ color: '#22160f', fontFamily: '"Inter", sans-serif', fontSize: '20px', textAlign: { xs: 'center', sm: 'start' }, mb: 2 }}>
                                ₹ {product?.price}
                            </Typography>
                            <Typography sx={{ color: '#22160f', fontFamily: '"Inter", sans-serif', fontSize: { xs: '13px', sm: '14px', md: '15px', lineHeight: 1.9 }, textAlign: { xs: 'center', sm: 'start' } }}>
                                {product?.description}
                            </Typography>
                            <Box sx={{ display: 'flex', justifyContent: { xs: 'center', sm: 'start' } }}>
                                <Button variant="contained" sx={{ color: '#E6D8C5', background: 'linear-gradient(135deg,#a28a6a,#2C1C13)', color: '#F5EEE5', borderColor: '#22160f', mt: 3 }} >
                                    Explore Collection
                                </Button>
                            </Box>
                        </Box>
                        <Box></Box>
                    </Col>

                </Row>
            </Container>
            <Footer/>
        </div>
    );
}

export default ProductDetails;