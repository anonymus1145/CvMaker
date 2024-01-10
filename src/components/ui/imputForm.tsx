import React from 'react';

export const ItemForm = ({ text1, text2 }: any) => {
    return (
      <ul className="flex flex-col gap-2 mx-4 my-4">
        <li><input name={text1} className="flex h-9 w-1/2 rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50" type="text" placeholder={text1} /> </li>
        <li><input name={text2} className="flex h-9 w-1/2 rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50" type="text" placeholder={text2} /> </li>
        <li>
          <label className="block mb-2 text-sm font-bold mx-4 my-4">From</label>
          <input name="periodFrom" className="flex h-9 w-min rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50" type="date" />
          <label className="block mb-2 text-sm font-bold mx-4 my-4">To</label>
          <input name="periodTo" className="flex h-9 w-min rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50" type="date" />
        </li>
      </ul>
    );
  };