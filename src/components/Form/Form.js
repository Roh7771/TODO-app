import React from 'react';
import { connect } from "react-redux";
import { changeInput, submit } from '../../redux/actions/actions';

function Form(props) {
  return (
    <form onSubmit={props.OnSubmit}>
      <input onChange={props.onChange} value={props.inputText} type="text"/>
    </form>
  )
}

function mapStateToProps(state) {
  return {
    inputText: state.inputText
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onChange: (e) => dispatch(changeInput(e)),
    OnSubmit: (e) => dispatch(submit(e))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Form)