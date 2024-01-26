"use client";

import { useEffect, useRef, useState } from "react";
import classNames from "classnames";

export function InputForm({ name, setState, state, icon, maxLength }: any) {
  const [focus, setFocus] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const Icon = icon;

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setState(e.target.value);
  };

  useEffect(() => {
    // Ajuste dinâmico da altura do textarea com base no conteúdo
    if (name === "mensagem" && textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [state]);

  return (
    <div
      key={name}
      style={{ height: `${textareaRef?.current?.scrollHeight}px` }}
      className={classNames(
        " w-full h-12 relative flex items-center 200 border-b-2 ",
        {
          "border-dark-1000": focus,
          "border-dark-500": !focus && state.length === 0,
          "border-dark-1000 border-b-2": !focus && state.length > 0,
        }
      )}
    >
      <label
        htmlFor={name}
        className={classNames(
          "300 absolute cursor-text text-md font-semibold bg-transparent uppercase  transition-all ease-in-out duration-300",

          {
            "text-dark-1000 -top-3 text-sm": focus,
            "-top-3 text-sm text-dark-1000": state.length > 0,
            "text-dark-500": !focus && state.length === 0,
          }
        )}
      >
        {name}
      </label>
      {name === "mensagem" ? (
        <textarea
          ref={textareaRef}
          id={name}
          className="bg-transparent resize-none w-full h-full outline-none overflow-hidden pt-8  mr-10 text-dark-1000  
        "
          onBlur={() => setFocus(false)}
          onFocus={() => setFocus(true)}
          onChange={handleTextareaChange}
          value={state}
        />
      ) : (
        <input
          id={name}
          className="400 w-full mr-10 h-full outline-none   text-dark-1000  
        "
          onBlur={() => setFocus(false)}
          onFocus={() => setFocus(true)}
          onChange={(e) => setState(e.target.value)}
          value={state}
          maxLength={maxLength}
        />
      )}
      <Icon
        className={classNames("w-6 h-6 top-4 absolute right-4 ", {
          "text-dark-1000": focus,
          "text-dark-500": !focus && state.length === 0,
          "text-dark-1000 absolute": !focus && state.length > 0,
        })}
      />
    </div>
  );
}
