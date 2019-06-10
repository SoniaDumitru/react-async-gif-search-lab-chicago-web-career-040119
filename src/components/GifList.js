import React, {Component} from 'react'

export default class GifList extends Component {
  render() {
    return(
      <ul>
        {/*map over data and render each image in a li*/}
        { this.props.gifs.map(gif =>
          <li>
            <img src={gif.url} width="100%" key={gif.url}/>
          </li>) }
      </ul>
    )
  }
}
