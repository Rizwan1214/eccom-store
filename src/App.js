import { useState } from "react";
import RoutesElement from "./routes/RoutesElement";
import { search } from "./Context";

function App() {
  const [searchValue, setSearchValue] = useState("");
  return (
    <search.Provider value={{ searchValue, setSearchValue }}>
      <div className="App">
        <RoutesElement />
      </div>
    </search.Provider>
  );
}

export default App;
