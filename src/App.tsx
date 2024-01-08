import * as React from "react";
import * as ReactDOM from "react-dom";
import { GeneralInfo } from "./components/info";
import { CreateButton } from "./components/createButton";

const App = () => {
  return (
    <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
      <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-2">
        <div className="text-gray-600">
          <p className="font-medium text-lg">Resume Builder</p>
          <p>Please fill out all the fields.</p>
        </div>
        <GeneralInfo />
        <CreateButton />
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
