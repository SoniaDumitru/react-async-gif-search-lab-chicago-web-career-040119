import React, {Component} from 'react'

//GifList component child of GifListContainer component

//is a presentational component, it receives data from props and renders each image in a HTML
export default class GifList extends Component {

  render() {
    return(
      <ul>
        {/*map over data and render each image in a li*/}
        { this.props.gifs.map(gif =>
          <li><img src={gif.url} width="50%" key={gif.url}/></li>) }
      </ul>
    )
  }
}
