import React from 'react';
import Book from './Book';

class BookShelf extends React.Component {

  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            {this.props.shelfList.map((shelf, index) => {
              return <div key={index} className="bookshelf">
                <h2 className="bookshelf-title">{Object.values(shelf)}</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                    {this.props.bookCollection.map(book => {
                      if(String(Object.keys(shelf)) === book.shelf){
                        let {id, imageLinks, title, authors, shelf} = book;
                        return <Book
                                  onUpdateBook={this.props.onUpdateBook}
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
