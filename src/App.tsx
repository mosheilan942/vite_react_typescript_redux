import React from 'react'
import { Provider } from "react-redux"
import { store } from './redux';
import HomePage from './HomePage';
import LogIn from "./LogIn";
import EditUser from "./EditUser";


function App() {
  return (
    <>
     <div className="App">
            <Provider store={store}>
                {/* <HomePage /> */}
                <LogIn />
                
            </Provider>
        </div>
    </>
  )
}

export default App