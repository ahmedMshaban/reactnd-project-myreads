import React from 'react';
import PropTypes from 'prop-types';
import Shelf from './Shelf';

const BookShelf = ({shelfList, bookCollection, onUpdateBook}) => {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          {shelfList.map(shelf => {
            let books = bookCollection.filter(book => book.shelf === String(Object.keys(shelf)));
            return <Shelf 
                        bookCollection={books} 
                        onUpdateBook={(book, shelf) => {
                          onUpdateBook(book, shelf);
                        }}
                        shelfName={String(Object.values(shelf))} 
                        key={Object.values(shelf)} 
                    />
          })}
        </div>
      </div>
    </div>
  )
};

BookShelf.propTypes = {
    shelfList: PropTypes.array.isRequired,
    bookCollection: PropTypes.array.isRequired,
    onUpdateBook: PropTypes.func.isRequired
};

export default BookShelf
