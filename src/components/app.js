// src/components/app.js
import React from 'react';
import { Component } from 'react';

import BookList from '../containers/book_list';
import BookDetail from '../containers/book_detail';
import { Grid, Row, Col } from 'react-bootstrap';

export default class App extends Component {
    render() {
        return(
        <div>
        <Grid>
        <Row>
        <Col xs={12} md={8}>
     

       <BookDetail /> </Col>

         <Col xs={12} md={4}><BookList /></Col>
        
        </Row>
        </Grid>
        </div>
        );
    }
}
