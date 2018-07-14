import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';
import SearchField from './SearchField';

class SearchPage extends React.Component {
  static PropTypes = {
    onSearchBooks: PropTypes.func.isRequired,
    bookCollection: PropTypes.array.isRequired,
    onUpdateBook: PropTypes.func.isRequired
  }

  render() {
    const {onSearchBooks, bookCollection, onUpdateBook} = this.props;
    return (
      <div>
        <SearchField
          onSearchBooks={(query) => {
            onSearchBooks(query);
          }}
        />
        <div className="search-books-results">
          <ol className="books-grid">
            {bookCollection.map(book => {
              let {id, imageLinks, title, authors, shelf} = book;
              return <Book
                        onUpdateBook={(book, shelf) => {
                          onUpdateBook(book, shelf);
                        }}
                        key={book.id}
                        data={{id, imageLinks, title, authors, shelf}}
                      />
            }
          )}
          </ol>
        </div>
      </div>
    )
  }
}

export default SearchPage
