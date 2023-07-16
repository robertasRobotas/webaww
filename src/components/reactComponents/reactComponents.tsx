import React from "react";
import Navbar from "./navbar";
import Points from "./points";
import Chat from "./chat";
import Form from "./form";
import Services from "./services";

const ReactComponents = ({ isReplaceComponent }: any) => {
  return (
    <div className="p-2 border-x-stone-200 border-2 rounded-md">
      <Navbar />
      <div className="grid grid-cols-3 gap-4">
        <Points />
        {!isReplaceComponent ? <Chat /> : <Services />}
        <Form />
      </div>
    </div>
  );
};

export default ReactComponents;
