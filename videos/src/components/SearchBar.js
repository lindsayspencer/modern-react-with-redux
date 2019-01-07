import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };
  handleInputChange = e => {
    this.setState({ term: e.target.value });
  };
  handleFormSubmit = (e) => {
    e.preventDefault();
    this.props.handleTermSubmit(this.state.term);
  }
  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form" onSubmit={this.handleFormSubmit}>
          <div className="field">
            <label htmlFor="search">Video Search</label>
            <input
              type="text"
              name="search"
              value={this.state.term}
              onChange={this.handleInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
