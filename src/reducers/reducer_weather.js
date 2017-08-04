import { FETCH_WEATHER } from '../actions/index'


//reducer for handling fetchweather action

//again reducers are just functions
export default function(state = [], action){

  switch(action.type) {
    case FETCH_WEATHER:
      return [ action.payload.data, ...state ]
  }


  return state;
}


//redux promise specifically looks at payload property and if its a promise it will unwrap the promise for us
