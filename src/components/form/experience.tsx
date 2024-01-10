import React, { ReactElement } from "react";
import { Button } from "../ui/button";
import { useState, useEffect } from "react";
import { ItemForm } from "../ui/imputForm";


export default function Experience() {

  const [items, setItems] = useState<ReactElement[]>([]);
  const handleButtonClick = () => {
    setItems([...items, <ItemForm text1="Company Name" text2="Position in the Company" />]);
  };

  return (
    <div className="mx-4 my-4" id="experience">
      <label className="block mb-2 text-medium font-bold mx-4 my-4">Experience</label>
      <div>
        {items}
      </div>
      <Button text="Add Experience" handleClick={handleButtonClick}></Button>
    </div>
  )
}