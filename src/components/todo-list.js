import React from 'react';

export default class TodoList extends React.Component {

  constructor() {
    super();

    this.state = {
      questions: [
        'What is the name of the ' + generateRandomStringNumber() + ' string?',
        'Which number string is the ' + generateRandomStringName() + ' string?',
        'Say out loud all of the roots in each pattern position',
        'Say what notes have half steps',
        'Say name of the note on the ' + generateRandomStringName() + ' string at the ' + generateRandomFretNumber() + ' fret',
        'Say Major Scale',
        'Play Major scale on the ' + generateRandomStringName() + ' string starting at the ' + generateRandomFretNumber() + ' fret - (Say note names)',
        'Play all 5 major scale patterns',
        'Say Minor Scale',
        'Play Minor scale on the ' + generateRandomStringName() + ' string starting at the ' + generateRandomFretNumber() + ' fret - (Say note names)',
        'Play all 5 Minor scale patterns',
      ]
    }
  }

  render() {
    return (
      <div>
        <ul>
          {
            this.state.questions.map(question => {
              return <li>{question}</li>
            })
          }
        </ul>
      </div>
    )
  }
}

const STRING_NUMBERS = [
  '1st', '2nd', '3rd', '4th', '5th', '6th',
]

function generateRandomStringNumber() {
  var index = Math.floor(Math.random() * 6);
  return STRING_NUMBERS[index];
}

const STRING_NAMES = [
  'E', 'B', 'G', 'D', 'A', 'E',
]

function generateRandomStringName() {
  var index = Math.floor(Math.random() * 6);
  return STRING_NAMES[index];
}

const FRET_NUMBERS = [
  '1st', '2nd', '3rd', '4th', '5th', '6th',
  '7th', '8th', '9th', '10th', '11th', '12th',
]

function generateRandomFretNumber() {
  var index = Math.floor(Math.random() * 12) + 1;
  return FRET_NUMBERS[index];
}
