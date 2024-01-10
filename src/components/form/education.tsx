import React, { ReactElement } from "react";
import { Button } from "../ui/button";
import { useState, useEffect } from "react";
import { ItemForm } from "../ui/imputForm";


export default function Education() {

    const [items, setItems] = useState<ReactElement[]>([]);
    const handleButtonClick = (event: any) => {
      event.preventDefault();
      setItems([...items, <ItemForm  text1="School Name" text2="Field of Study"/>]);
    };
  
    return (
      <div className="mx-4 my-4" id="experience">
        <label className="block mb-2 text-medium font-bold mx-4 my-4">Education</label>
        <div>
          {items}
        </div>
        <Button text="Add Education" handleClick={handleButtonClick}></Button>
      </div>
    )
  }