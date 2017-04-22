import React from 'react'
import preload from '../public/data.json'

class Search extends React.Component {
  render () {
    return (
      <div>
        <pre><code>{JSON.stringify(preload, null, 4)}</code></pre>
      </div>
    )
  }
}

export default Search

// JSON.stringify parameters:
// 1st - the data you want to stringify
// 2nd - replacer function, actually goes into json and replace data. Usually you always put null as 2nd parameter
// 3rd - the desired indentation 