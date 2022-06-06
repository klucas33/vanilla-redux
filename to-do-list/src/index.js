import { legacy_createStore } from "redux";

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, { text: action.text, id: Date.now() }];
    case DELETE_TODO:
      return [];
    default:
      return state;
  }
};

const store = legacy_createStore(reducer);

store.subscribe(() => console.log(store.getState()));

const onSubmit = (e) => {
  e.preventDefault();
  const toDo = input.value;
  input.value = "";
  store.dispatch({ type: ADD_TODO, text: toDo });
};

form.addEventListener("submit", onSubmit);

// appendChild 는 node 객체만 받을 수 있다. (string 도 안되고, 여러개의 노드를 추가할 수 없다.)

// const createToDo = (toDo) => {
//   const li = document.createElement("li");
//   li.innerText = toDo;
//   li.style.listStyle = "none";
//   ul.append(li);
// };

// no mutation but return new objects!!! must return new state and not modify the state itself
