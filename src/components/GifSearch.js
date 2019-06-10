import React, {Component} from 'react'

//child of GifListContainer
export default class GifSearch extends Component {

  constructor(props) {
      super(props)
      this.state = {
        inputValue: ''
      }
    }
// when the input from giphys search changes, the text input is a controlled component,
// that stores the value of the input in its component state and renders the DOM accordingly
  handleChange =(event)=> {
    this.setState({
      inputValue: event.target.value
    })
  }
// on a SUBMIT EVENT it should invoke the "gifs" prop with the value of the text input
// the "fetchGifs" function defined in the parent GifListContainer will query the API with the users input
  handleSubmit =(event)=> {
    event.preventDefault()
    this.props.fetchGifs(this.state.inputValue)
    // console.log(event.target)
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.inputValue} onChange={this.handleChange}/>
          <h1>{this.state.inputValue}</h1>
        </form>
      </div>
    )
  }
}
