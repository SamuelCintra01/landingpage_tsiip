"use client";

import { useState } from "react";
import classNames from "classnames";

export function InputForm({ name, setState, state }: any) {
  const [focus, setFocus] = useState(false);
  return (
    <div
      key={name}
      className={classNames(
        " h-12 w-full relative flex items-center text-dark-0",
        {
          "h-36": name === "mensagem",
        }
      )}
    >
      <label
        htmlFor={name}
        className={classNames(
          "absolute cursor-text -top-3 left-4 text-sm  px-2 text-md font-semibold text-dark-1000 bg-dark-0 uppercase"
        )}
      >
        {name}
      </label>
      <input
        id={name}
        className="bg-transparent w-full h-full outline-none pl-4 rounded-md text-dark-1000 border-2 border-dark-1000 "
        onBlur={() => setFocus(false)}
        onFocus={() => setFocus(true)}
        onChange={setState}
        value={state}
      />
    </div>
  );
}

// className={classNames(
//   "absolute cursor-text transition-all ease-in-out left-4 text-md font-semibold  bg-dark-0 uppercase",
//   {
//     " -top-3 left-4 text-sm  px-2": focus,
//   }
