import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

const Shelf = ({shelfName, bookCollection, onUpdateBook}) => {
  return (
      <div className="list-books-content">
        <div className="bookshelf">
          <h2 className="bookshelf-title">{shelfName}</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {bookCollection.map(book => {
                  let {id, imageLinks, title, authors, shelf} = book;
                  return <Book
                            onUpdateBook={onUpdateBook}
                            key={book.id}
                            data={{id, imageLinks, title, authors, shelf}}
                          />
                
                }
            )}
            </ol>
          </div>
        </div>
      </div>
  )
};

Shelf.propTypes = {
    shelfName: PropTypes.string.isRequired,
    bookCollection: PropTypes.array.isRequired,
    onUpdateBook: PropTypes.func.isRequired
};

export default Shelf
