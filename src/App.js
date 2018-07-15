import React from 'react';
import {Route, Link} from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import BookShelf from './BookShelf';
import SearchPage from './SearchPage';
import './App.css';

class BooksApp extends React.Component {
  state = {
    shelfList: [{"currentlyReading":"Currently Reading"}, {"wantToRead":"Want to Read"}, {"read":"Read"}],
    books: [],
    searchResult: []
  }
  componentDidMount(){
    this.getBooks()
  }
  updateBook(book, shelf){
    BooksAPI.update(book, shelf).then(item => {
      this.getBooks();
    });
  }
  getBooks(){
    BooksAPI.getAll().then(books => {
      this.setState({books: []});
      this.setState({books})
		});
  }
  searchBooks(query){
    BooksAPI.search(query).then(searchResult => {
      const currentBooks = this.state.books;
      for (let i in currentBooks){
      	for (let k in searchResult){
        	if(searchResult[k].id === currentBooks[i].id){
          	searchResult[k] = currentBooks[i]
          }
        }
      }
      this.setState({searchResult})
		});
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() =>
          <div>
            <BookShelf
                shelfList={this.state.shelfList}
                bookCollection={this.state.books}
                onUpdateBook={(book, shelf) => {
                  this.updateBook(book, shelf)
                }}
            />
            <div className="open-search"><Link to="/search">Add a book</Link></div>
          </div>}
        />
        <Route path="/search" render={({history}) =>
          <div>
            <SearchPage
              bookCollection={this.state.searchResult}
              onUpdateBook={(book, shelf) => {
                this.updateBook(book, shelf)
              }}
              onSearchBooks={(query) => {
                this.searchBooks(query)
              }}
            />
          </div>}
        />
      </div>
    )
  }
}

export default BooksApp
