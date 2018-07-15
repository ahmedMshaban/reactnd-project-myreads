import React from 'react';

class Book extends React.Component {

  updateShelf = (e) => {
		e.preventDefault();
    this.props.onUpdateBook(this.props.data, e.target.value)
  }

  render() {
    const book = this.props.data;
    const authors = book.authors !== undefined ? Object.values(book.authors).map(author => author) : [];
    const thumbnail = book.imageLinks.thumbnail;
    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url("'+thumbnail+'")' }}></div>
            <div className="book-shelf-changer">
              <select onChange={this.updateShelf} value={book.shelf}>
                <option value="none" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{book.title}</div>
          <div className="book-authors">{authors.join(", ")}</div>
        </div>
      </li>
    )
  }
}

export default Book
