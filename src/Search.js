import React from 'react'
import preload from '../public/data.json'
import ShowCard from './ShowCard'

class Search extends React.Component {
  render () {
    return (
      <div>
        {preload.shows.map((show) => {
          return (
            <ShowCard key={show.imdbID} show={show} />
          )
        })}
      </div>
    )
  }
}

export default Search

// When you want to debug json this is how you should do it:
// <pre><code>{JSON.stringify(preload, null, 4)}</code></pre>

// JSON.stringify parameters:
// 1st - the data you want to stringify
// 2nd - replacer function, actually goes into json and replace data. Usually you always put null as 2nd parameter
// 3rd - the desired indentation
