import React from "react";

export function GeneralInfo() {
  return (
    <div>
      <h1 className="font-bold mx-4 my-4">General Info</h1>
      <ul className="flex flex-col gap-2 mx-4 my-4">
        <li><input id="name" className="flex h-9 w-1/2 rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50" type="text" placeholder="Name and Surname" /> </li>
        <li><input id="address" className="flex h-9 w-1/2 rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50" type="address" placeholder="Address" /> </li>
        <li><input id="email" className="flex h-9 w-min rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50" type="email" placeholder="Email" /> </li>
        <li><input id="phone" className="flex h-9 w-min rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50" type="phone" placeholder="Phone" />  </li>
        <li><input id="linkedin" className="flex h-9 w-3/4 rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50" type="url" placeholder="LinkedIn Profile" /> </li>
        <li className="grid w-full gap-1.5">
          <label className="block mb-2 text-medium font-bold mx-4 my-4">Summary</label>
          <textarea id="summary" rows={4} className="block p-2.5 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50" placeholder="Write something about yourself here..."></textarea> 
        </li>
        <li>
          <label className="block mb-2 text-medium font-bold mx-4 my-4">Education</label>
          <ul id="education-list" className="flex flex-col gap-2 mx-4 my-4">
            </ul>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-normal py-2 px-4 rounded">Add Education</button>
        </li>
      </ul>
    </div>
  );
}
