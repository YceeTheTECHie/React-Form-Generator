import React from 'react';
import './App.css'
import Form from '../src/Components/Form'
const App = () => {
  const data = [
    {
      label: 'What is the name of the officer in question?',
      type: 'text',
    },
    {
      label: 'When was the date of the incident?',
      type : 'date',
    },
    {
      label: 'How much is the bribe paid?(In Figures)',
      type : 'Number',
    },
    {
      label: 'Write a statement about the incident',
      type: 'text',
    }
  ]
  return (
    <Form data={data}/>
    );
  } 

export default App;