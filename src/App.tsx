import React from "react";
import CreateNotice from "./components/CreateNotice";
import SearchNotice from "./components/SearchNotice";
import CardList from "./components/CardList";
import TagList from "./components/TagList";

const App: React.FC = () => {
  return (
    <div className="wrapper">
      <CreateNotice />
      <SearchNotice />
      <CardList />
      <TagList />
    </div>
  );
};

export default App;
