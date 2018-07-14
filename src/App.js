import React from 'react';
import {Route, Link, Switch} from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import BookShelf from './BookShelf';
import SearchPage from './SearchPage';
import NotFound from './NotFound';
import './App.css';

class BooksApp extends React.Component {
  state = {
    books: [],
    searchResult: []
  }

  componentDidMount(){
    this.getBooks();
  }

  updateBook(book, shelf){
    if(shelf !== "none"){
      BooksAPI.update(book, shelf).then(item => {
        book.shelf = shelf
        this.setState(previousState => ({
          books: previousState.books.filter(prev => prev.id !== book.id).concat([book])
        }))
      });
    }
  }

  getBooks(){
    BooksAPI.getAll().then(books => {
      this.setState({books});
    });
  }

  searchBooks(query){
    if(query.length === 0){
      this.setState({searchResult:[]});
    }else{
      BooksAPI.search(query).then(searchResult => {
        if(searchResult.error !== undefined){
          this.setState({searchResult:[]});
          return
        }
        const currentBooks = this.state.books;
        for (let i in currentBooks){
          for (let k in searchResult){
            if(searchResult[k].id === currentBooks[i].id){
              searchResult[k] = currentBooks[i]
            }
          }
        }
        this.setState({searchResult});
      });
    }
  }

  render() {
    return (
      <div className="app">
      <Switch>
          <Route exact path="/" render={() =>
            <div>
              <BookShelf
                  shelfList={
                    [{"currentlyReading":"Currently Reading"}, {"wantToRead":"Want to Read"}, {"read":"Read"}]
                  }
                  bookCollection={this.state.books}
                  onUpdateBook={(book, shelf) => {
                    this.updateBook(book, shelf);
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
                  this.updateBook(book, shelf);
                }}
                onSearchBooks={(query) => {
                  this.searchBooks(query);
                }}
              />
            </div>}
          />
          <Route component={NotFound}/>
        </Switch>
      </div>
    )
  }
}

export default BooksApp
