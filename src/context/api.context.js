import { createContext } from "react";

// Create a Context
const ApiUrlContext = createContext();
// { Provider, Consumer }

//Local API_URL: "http://localhost:5005";
//Cloud API_URL: "https://blocktonate.herokuapp.com";

function ApiUrlProviderWrapper(props) {
  return (
    <ApiUrlContext.Provider value={"https://blocktonate.herokuapp.com"}>
      {props.children}
    </ApiUrlContext.Provider>
  );
}

export { ApiUrlContext, ApiUrlProviderWrapper };
