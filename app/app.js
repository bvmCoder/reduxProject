import "normalize.css/normalize.css"
import "assets/stylesheets/main.css"
// import { createStore } from "redux"
const { createStore } = require("redux")

const initialState = 5
const reducer = (state, action) => {
	switch (action.type) {
		case 'INC':
			return state + 1
	}
	return state
}


const store = createStore(reducer, initialState)

store.subscribe(() => document.querySelector("#counter").innerText = store.getState())

setInterval(() => store.dispatch({ type: 'INC'}), 500)

console.log("Redux has started the Game")