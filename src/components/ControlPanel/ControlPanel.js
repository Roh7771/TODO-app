import React from 'react';
import { connect } from "react-redux";
import { switchFilter, deleteCompleted } from '../../redux/actions/actions';

function ControlPanel(props) {
  return (
    <div style={props.show ? {display: 'block'} : {display: 'none'}}>
      <div>{`${props.todos.reduce((accum, el) => !el.done ? ++accum : accum, 0)} items left`}</div>
      <button onClick={() => props.onSwitch('all')}>All</button>
      <button onClick={() => props.onSwitch('active')}>Active</button>
      <button onClick={() => props.onSwitch('completed')}>Completed</button>
      <button onClick={props.onDeleteCompleted}>Clear completed</button>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    filterBy: state.filterBy,
    show: !!state.todos.length,
    todos: state.todos
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onSwitch: (value) => dispatch(switchFilter(value)),
    onDeleteCompleted: () => dispatch(deleteCompleted())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ControlPanel)