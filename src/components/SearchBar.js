import React from 'react'

class SearchBar extends React.Component {
  state = {
    term: ''
  }

  onInputChange = (event) => {
    this.setState({
      term: event.target.value
    })
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onFormSubmit(this.state.term)
    //TODO MAKE SURE WE CALL CALLBACK FROM PARENT COMPONENT
  }

  render() {
    return (
      <div className="search-bar ui segment">
        <form 
          onSubmit={this.onFormSubmit}
          className="ui form">
          <div className="field">
            <label htmlFor="videoSearch">Video Search</label>
            <input 
              onChange={this.onInputChange} 
              value={this.state.term} 
              type="text" 
              id="videoSearch"
            />
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar