import { CHANGEINPUT, SUBMIT, CHANGETODOSTATUS, DELETETODO, SWITCHFILTER, DELETECOMPLETED } from "../actions/actionsTypes"
import uuidv4 from 'uuid/v4';

const initialState = {
  todos: [],
  inputText: '',
  filterBy: 'all'
}

export default function(state = initialState, action) {
  switch (action.type) {
    case CHANGEINPUT:
      return {
        ...state,
        inputText: action.payload
      }

    case SUBMIT:
      let newTodo = [...state.todos];
      newTodo.push({
        text: state.inputText,
        done: false,
        id: uuidv4()
      });
      return {
        ...state,
        todos: newTodo,
        inputText: ''
      }

    case CHANGETODOSTATUS:
      newTodo = [...state.todos];
      let index = newTodo.findIndex(el => el.id === action.payload);
      newTodo[index].done = !newTodo[index].done
      return {
        ...state,
        todos: newTodo
      }
    
    case DELETETODO:
      newTodo = [...state.todos];
      index = newTodo.findIndex(el => el.id === action.payload);
      newTodo.splice(index, 1);
      return {
        ...state,
        todos: newTodo
      }

    case SWITCHFILTER:
      return {
        ...state,
        filterBy: action.payload
      }

    case DELETECOMPLETED:
      newTodo = [...state.todos].filter(el => !el.done);
      return {
        ...state,
        todos: newTodo
      }
    default:
      return state
  } 
}