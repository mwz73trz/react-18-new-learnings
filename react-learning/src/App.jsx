import React, { Suspense } from "react";
import PostsComponent from "./PostsComponent";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading Posts...</div>}>
        <PostsComponent />
      </Suspense>
    </div>
  );
}

export default App;
