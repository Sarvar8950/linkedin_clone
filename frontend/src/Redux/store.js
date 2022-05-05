import { createStore } from "redux";
import {loginstatus} from "./reducer"

const initState = false
const store = createStore(loginstatus, initState)

export default store

