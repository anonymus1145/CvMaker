import * as React from "react";
import * as ReactDOM from "react-dom";
import { GeneralInfo} from "./components/form/info";
import Experience from "./components/form/experience";
import Education from "./components/form/education";
import Skills from "./components/form/skills";
import { Button } from "./components/ui/button";

const App = () => {
  return (
    <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6 gap-4">
      <form>
        <div className="text-center mb-4 gap-4 gap-y-2 text-sm">
          <div className="text-gray-600">
            <p className="font-medium text-lg">Resume Builder</p>
            <p>Please fill out all the fields.</p>
          </div>
        </div>
        <GeneralInfo />
        <Experience />
        <Education />
        <Skills />
      </form>
      <Button text="Generate Resume" typeOf="submit" handleClick={() => window.print()}/>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
