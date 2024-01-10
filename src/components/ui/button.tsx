import React from 'react';

export function Button({text, handleClick, typeOf} : any) {
    return (
      <button
      onClick={handleClick}
      type={typeOf}
      className="mx-4 my-4 px-4 py-2 text-sm text-gray-600 font-semibold rounded-full border border-gray-200 hover:text-white hover:bg-gray-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-offset-2"
    >
      {text}
    </button>
  );
}

  Button.defaultProps = {
    text: 'Click me',
    typeOf: 'button'
  }