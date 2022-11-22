import React from "react";
import CreateNotice from "./components/CreateNotice";
import SearchNotice from "./components/SearchNotice";
import CardList from "./components/CardList";

const App: React.FC = () => {
  return (
    <div className="wrapper">
      <CreateNotice />
      <SearchNotice />
      <CardList />
    </div>
  );
};

export default App;
