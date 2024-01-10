import React from "react";
import { Button } from "../ui/button";
import { useState } from "react";

export default function Skills() {

    const [items, setItems] = useState<React.ReactElement[]>([]);

    const onClick = () => {
        const userInput = window.prompt("Enter Skill: ");
        setItems([...items, <li className="mx-2 my-2 text-sm text-black font-semibold">{userInput}</li>]);
    }
    return (
        <div className="mx-4 my-4" id="skills">
            <label className="block mb-2 text-medium font-bold mx-4 my-4">Skills</label>
            <ul className="flex flex-row gap-1 mx-2 my-2">
                {items}
            </ul>
            <Button text="Add Skills" handleClick={onClick}></Button>
        </div>
    )
}