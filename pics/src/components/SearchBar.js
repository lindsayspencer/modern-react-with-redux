import React from "react";

class SearchBar extends React.Component {
  state = { searchString: "" };
  
  onFormSubmit = (e) => {
      e.preventDefault();
      this.props.onSubmit(this.state.searchString);
  };
  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label htmlFor="search-field">Image Search</label>
            <input
              type="text"
              name="search-field"
              value={this.state.searchString}
              onChange={e =>
                this.setState({ searchString: e.target.value })
              }
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
