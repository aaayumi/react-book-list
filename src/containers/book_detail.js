import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
    render() {
       if(!this.props.book) {
          return <div className="start">Select a book from the list</div>
        }

          return (
         
           <div className="bookinfo">
            <h3 className="title">{this.props.book.title}</h3>
            <div> Description: </div>
            <div className="description">{this.props.book.description}</div>
            <div className="rating">Rating: {this.props.book.rating}</div>
           </div>
          );
    }
}

function mapStateToProps(state){
    return {
        book: state.activeBook
    };
}

export default connect(mapStateToProps)(BookDetail);
