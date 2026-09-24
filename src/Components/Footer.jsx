import { Box, Typography } from '@mui/material'
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import XIcon from '@mui/icons-material/X';
import Divider from '@mui/material/Divider';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div style={{ backgroundColor: '#2C1C13' }}>
            <Container>
                <Row style={{ minHeight: '20vh' }}>
                    <Col xs={12} sm={6} md={4} className='d-flex align-items-center justify-content-center mb-2'>
                        <Typography variant="h6" noWrap sx={{ mr: 2, fontFamily: 'monospace', fontWeight: 700, fontSize: '30px', letterSpacing: '.3rem', color: '#E6D8C5' }}>
                            Zenvia
                        </Typography>
                    </Col>
                    <Col xs={12} sm={6} md={4} className='d-flex justify-content-evenly align-items-center mb-2'>
                        <Link to={'/'} style={{ textDecoration: 'none' }}>
                            <Typography variant="h5" component="div" sx={{ color: '#E6D8C5', fontFamily: '"Inter", sans-serif', fontSize: { xs: '', sm: '', md: '17px' }, textAlign: 'center' }}>
                                Home
                            </Typography>
                        </Link>
                        <Link to={'/product'} style={{ textDecoration: 'none' }}>
                            <Typography variant="h5" component="div" sx={{ color: '#E6D8C5', fontFamily: '"Inter", sans-serif', fontSize: { xs: '', sm: '', md: '17px' }, textAlign: 'center' }}>
                                Product
                            </Typography>
                        </Link>
                    </Col>
                    <Col xs={12} sm={6} md={4} className='d-flex align-items-center justify-content-evenly mb-3'>
                        <Typography variant="h5" component="div" sx={{ color: '#E6D8C5', fontFamily: '"Inter", sans-serif', fontSize: { xs: '', sm: '', md: '17px' }, textAlign: 'center' }}>
                            <InstagramIcon />
                        </Typography>
                        <Typography variant="h5" component="div" sx={{ color: '#E6D8C5', fontFamily: '"Inter", sans-serif', fontSize: { xs: '', sm: '', md: '17px' }, textAlign: 'center' }}>
                            <WhatsAppIcon />
                        </Typography>
                        <Typography variant="h5" component="div" sx={{ color: '#E6D8C5', fontFamily: '"Inter", sans-serif', fontSize: { xs: '', sm: '', md: '17px' }, textAlign: 'center' }}>
                            <XIcon />
                        </Typography>
                    </Col>
                    <Divider
                        sx={{
                            borderColor: '#E6D8C5'
                        }}
                    />
                    <p className='text-center' style={{ color: '#E6D8C5' }}>© 2026 Zenvia. All rights reserved.</p>
                </Row>
            </Container>
        </div>
    )
}

export default Footer