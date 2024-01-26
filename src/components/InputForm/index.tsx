"use client";

import { useState } from "react";
import classNames from "classnames";

export function InputForm({ name, setState, state, icon }: any) {
  const [focus, setFocus] = useState(false);
  const Icon = icon;
  return (
    <div
      key={name}
      className={classNames(
        "h-12 w-full relative flex items-center bg-dark-100 border-b-2 ",
        {
          "border-dark-1000": focus,
          "border-dark-500": !focus,
        }
      )}
    >
      <label
        htmlFor={name}
        className={classNames(
          "absolute cursor-text text-md font-semibold  bg-transparent uppercase   transition-all ease-in-out duration-300",

          {
            "text-dark-1000 -top-3 text-sm": focus,
            "text-dark-500": !focus,
          }
        )}
      >
        {name}
      </label>
      {name === "mensagem" ? (
        <textarea
          id={name}
          className="resize-none w-full h-full outline-none  pt-2 rounded-md text-dark-1000  
        "
          onBlur={() => setFocus(false)}
          onFocus={() => setFocus(true)}
          onChange={setState}
          value={state}
        />
      ) : (
        <input
          id={name}
          className=" w-full h-full outline-none  rounded-md text-dark-1000  
        "
          onBlur={() => setFocus(false)}
          onFocus={() => setFocus(true)}
          onChange={setState}
          value={state}
        />
      )}
      <Icon
        className={classNames("w-6 h-6 top-4 absolute right-4 ", {
          "text-dark-1000": focus,
          "text-dark-500": !focus,
        })}
      />
    </div>
  );
}
