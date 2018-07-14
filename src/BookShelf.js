import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

class BookShelf extends React.Component {
  static PropTypes = {
    shelfList: PropTypes.array.isRequired,
    bookCollection: PropTypes.array.isRequired,
    onUpdateBook: PropTypes.func.isRequired
  }

  render() {
    let {shelfList, bookCollection, onUpdateBook} = this.props;
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            {shelfList.map((shelf, index) => {
              return <div key={index} className="bookshelf">
                <h2 className="bookshelf-title">{Object.values(shelf)}</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                    {bookCollection.map(book => {
                      if(String(Object.keys(shelf)) === book.shelf){
                        let {id, imageLinks, title, authors, shelf} = book;
                        return <Book
                                  onUpdateBook={onUpdateBook}
                                  key={book.id}
                                  data={{id, imageLinks, title, authors, shelf}}
                                />
                        }else{
                          return ""
                        }
                      }
                  )}
                  </ol>
                </div>
              </div>
            })}
          </div>
        </div>
      </div>
    )
  }
}

export default BookShelf
