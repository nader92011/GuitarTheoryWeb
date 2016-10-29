import React from 'react';

export default class TodoList extends React.Component {

  render() {
    return (
      <div>
        <ul>
          <li>What is the name of the nth string?</li>
          <li>Which number string to the "" string?</li>
          <li>Say out loud all of the roots in each pattern position</li>
          <li>Say what notes have half steps</li>
          <li>Say name of note at n string on n fret</li>
          <li>Say Major Scale</li>
          <li>Play Major scale on n string starting at n fret<br />(Say note names)</li>
          <li>Play all 5 major scale patterns</li>
          <li>Say Minor Scale</li>
          <li>Play Minor scale on n string starting at n fret<br />(Say note names)</li>
          <li>Play all 5 minor scale patterns</li>
        </ul>
      </div>
    )
  }
}
