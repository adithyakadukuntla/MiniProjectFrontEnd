import React from "react";
import RootProduct from "./RootProduct";
function Home() {
  return (
    <div className="container mx-auto p-4">
      {/* nesting components */}
      <RootProduct />
    </div>
  );
}

export default Home;
