import store from "./store";
import * as actions from './actionCreator';

const unsubsribe =  store.subscribe(()=>{
    console.log("Store changed!",store.getState());
})

store.dispatch(actions.bugAdded("Bug1"));

unsubsribe();

store.dispatch(actions.bugRemoved(1));

console.log(store.getState());