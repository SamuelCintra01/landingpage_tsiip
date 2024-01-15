"use client";

import { useState } from "react";
import classNames from "classnames";

export function InputForm({ field, setState, state }: any) {
  const [focus, setFocus] = useState(false);
  return (
    <div
      key={field.label}
      className=" h-12 w-full relative flex items-center text-dark-800
        "
    >
      <label
        htmlFor={field.label}
        className={classNames(
          "absolute cursor-text transition-all ease-in-out left-4 text-md font-semibold  bg-dark-0 uppercase",
          {
            " -top-3 left-4 text-sm  px-2": focus,
          }
        )}
      >
        {field.label}
      </label>
      <input
        id={field.label}
        className=" w-full h-full outline-none pl-4 rounded-md border-2 border-dark-800 "
        onBlur={() => setFocus(false)}
        onFocus={() => setFocus(true)}
        onChange={setState}
        value={state}
      />
    </div>
  );
}
