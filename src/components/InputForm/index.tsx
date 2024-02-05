"use client";

import { useEffect, useRef, useState } from "react";
import classNames from "classnames";
import { TbAlertTriangleFilled } from "react-icons/tb";
import "../../app/globals.css";
export function InputForm({
  name,
  setState,
  state,
  icon,
  maxLength,
  error,
  setError,
}: any) {
  const [focus, setFocus] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const Icon = icon;

  const handleInput = (e: any) => {
    setError((state: any) => ({ ...state, [name]: "" }));
    console.log(error);
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
          "border-black-1000": focus,
          "border-black-500": !focus && state.length === 0,
          "border-black-1000 border-b-2": !focus && state.length > 0,
          "border-red-600": error !== "",
        }
      )}
    >
      <label
        htmlFor={name}
        className={classNames(
          "absolute cursor-text text-md font-semibold bg-transparent uppercase  transition-all ease-in-out duration-300 z-20",

          {
            "text-black-1000 -top-3 text-sm": focus,
            "-top-3 text-sm text-black-1000": state.length > 0,
            "text-black-500": !focus && state.length === 0,
            "text-red-600": error !== "",
          }
        )}
      >
        {name}
      </label>
      {name === "mensagem" ? (
        <textarea
          ref={textareaRef}
          id={name}
          className="bg-transparent resize-none w-full h-full outline-none overflow-hidden pt-8 mr-10 text-black-1000 z-10"
          onBlur={() => setFocus(false)}
          onFocus={() => setFocus(true)}
          onChange={handleInput}
          value={state}
        />
      ) : (
        <input
          id={name}
          className="bg-transparent w-full mr-10 h-full outline-none text-black-1000 z-10"
          onBlur={() => setFocus(false)}
          onFocus={() => setFocus(true)}
          onChange={handleInput}
          value={state}
          maxLength={maxLength}
          // type={name === "email" ? "email" : "text"}
        />
      )}
      {error !== "" ? (
        <div className="w-full z-0 h-full absolute  text-red-600 ">
          <TbAlertTriangleFilled
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="w-8 h-8 top-3 absolute right-2 text-red-600"
          />
          <p
            className={classNames(
              "bg-red-100 px-2 rounded-md transition-all duration-300 absolute right-0 -top-6",
              {
                "translate-y-0": isHovered,
                "translate-y-full opacity-0": !isHovered,
              }
            )}
          >
            {error}
          </p>
        </div>
      ) : (
        <Icon
          className={classNames("w-6 h-6 top-4 absolute right-4 ", {
            "text-black-1000": focus,
            "text-black-500": !focus && state.length === 0,
            "text-black-1000 absolute": !focus && state.length > 0,
          })}
        />
      )}
    </div>
  );
}
