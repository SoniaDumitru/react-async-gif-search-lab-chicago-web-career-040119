import React, {Component} from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

// GifListContainer does data fetching and render its coresponding sub-component: GifList and GifSearch 
export default class GifListContainer extends Component {
constructor() {
  super()
  this.state = {
    gifs: [], //array of images
  }
}

componentDidMount() {
  this.fetchGifs()
}

//fetching the data
fetchGifs = (input="birds") => {
  fetch(`https://api.giphy.com/v1/gifs/search?q=${input}&api_key=dc6zaTOxFJmzC&rating=g&limit=3`)
    .then(res => res.json())
    .then(({data}) => {
      this.setState({
        //store 3 gifs from the response in its component state
        gifs: data.map( gif => ({ url: gif.images.original.url }) )
      })
    })
}

submitHandler() {
  console.log("i am submited")
}

  render() {
    return(
      <div>
        <GifList gifs={this.state.gifs}/> {/*passing data down to its child as a prop*/}
        <GifSearch fetchGifs={this.fetchGifs}/> {/*pass down a function as a prop, on a submit event this function will be invoked with prop=valueof the text input*/}
      </div>
    )
  }
}

///HOW DATA RECEIVED FROM API LOOKS LIKE///////
// value for the  key named => url: gif.images.original.url
// "data": [
//     {
//       "type": "gif",
//       "id": "l0HlNQ03J5JxX6lva",
//       "slug": "bbc-wildlife-l0HlNQ03J5JxX6lva",
//       "url": "https://giphy.com/gifs/bbc-wildlife-l0HlNQ03J5JxX6lva",
//       "bitly_gif_url": "https://gph.is/2iC32M8",
//       "bitly_url": "https://gph.is/2iC32M8",
//
//       ...
//
//       "images": {
//         "fixed_height_still": {
//           "url": "https://media0.giphy.com/media/l0HlNQ03J5JxX6lva/200_s.gif?cid=e1bb72ff5b9fa2866168584b51f13892",
//           "width": "400",
//           "height": "200",
//           "size": "55556"
//         },
//         ...
//         "original": {
//           "url": "https://media0.giphy.com/media/l0HlNQ03J5JxX6lva/giphy.gif?cid=e1bb72ff5b9fa2866168584b51f13892",
//           "width": "480",
//           "height": "240",
//         }
//         ...
//       }
//     }
//     ]
