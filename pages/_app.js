import React from "react";
import { Provider } from "react-redux";
import { useStore } from "../src/store/store";
import handleSubmit from "../src/handles/handlesubmit";
import { useRef } from "react";
import "../src/styles/globals.css";

export default function App({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);
  const dataRef = useRef();
  const submithandler = (e) => {
    e.preventDefault();
    handleSubmit(dataRef.current.value);
    dataRef.current.value = "";
  };
  return (
    <Provider store={store}>
      <Component {...pageProps} />
          
      <div className="App">
              
        <form onSubmit={submithandler}>
                  
          <input type="text" ref={dataRef} />
                  <button type="submit">Save</button>
                
        </form>
            
      </div>{" "}
    </Provider>
  );
}
