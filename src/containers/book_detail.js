import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
    render() {
        if(!this.props.book){
            return <div>Select a book to get started.</div>
        }

        return (

        <div className="bookinfo">
        <h3 className="title">{this.props.book.title}</h3>
        <div>{this.props.book.description}</div>
        <div>{this.props.book.rating}</div>
        </div>
        );
    }
}

function mapStateToProps(state){
    return{
        book: state.activeBook
    };
}

export default connect(mapStateToProps)(BookDetail);
