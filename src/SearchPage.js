import React from 'react';
import Book from './Book';
import SearchField from './SearchField';

class SearchPage extends React.Component {
  render() {
    return (
      <div>
        <SearchField
          oncloseSearch={() => {
            this.props.oncloseSearch()
          }}
          onSearchBooks={(query) => {
            this.props.onSearchBooks(query)
          }}
        />
        <div className="search-books-results">
          <ol className="books-grid">
            {this.props.bookCollection.map(book => {
              let {id, imageLinks, title, authors, shelf} = book;
              return <Book
                        onUpdateBook={(book, shelf) => {
                          this.props.onUpdateBook(book, shelf)
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
