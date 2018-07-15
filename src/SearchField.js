import React from 'react';
import {Link} from 'react-router-dom';

class SearchField extends React.Component {

  searchBooks = (e) => {
		e.preventDefault();
    this.props.onSearchBooks(e.target.value)
  }

  render() {
    return (
        <div className="search-books">
            <div className="search-books-bar">
              <Link className="close-search" to="/">Close</Link>
              <div className="search-books-input-wrapper">
                <input onChange={this.searchBooks} type="text" placeholder="Search by title or author"/>
              </div>
          </div>
        </div>
    )
  }
}

export default SearchField
