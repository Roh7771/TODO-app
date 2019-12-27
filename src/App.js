import React from 'react';
import Form from './components/Form/Form';
import TODOList from './components/TODOList/TODOList';
import ControlPanel from './components/ControlPanel/ControlPanel';

export default function App() {
  return (
    <>
      <h1>TODOS</h1>
      <Form/>
      <TODOList/>
      <ControlPanel/>
    </>
  )
}