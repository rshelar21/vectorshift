import React, { useRef, useEffect } from "react";

const InputWrapper = ({
  label,
  type,
  isInput,
  isSelect,
  isTextArea,
  value,
  onChange,
  name,
  options,
}) => {
  const textAreaRef = useRef(null);

  useEffect(() => {
    if (isTextArea && textAreaRef) {
      textAreaRef.current.style.height = "0px";
      const scrollHeight = textAreaRef.current.scrollHeight;
      textAreaRef.current.style.height = scrollHeight + "px";
    }
  }, [value]);

  return (
    <div className="flex flex-col gap-2 border border-[#a6a6a6] rounded-lg py-2 px-1.5">
      {label && (
        <label className="font-medium text-[#2d40eb] text-sm">{label}</label>
      )}
      {isInput && (
        <input
          type={type}
          value={value}
          onChange={onChange}
          name={name}
          className="outline-none border-none text-sm font-normal"
        />
      )}
      {isSelect && (
        <select
          name={name}
          value={value}
          onChange={onChange}
          className="outline-none border-none font-normal text-sm"
        >
          {options?.map((option, index) => (
            <option key={`${option?.value}-${index}`} value={option?.value}>
              {option?.label}
            </option>
          ))}
        </select>
      )}

      {isTextArea && (
        <textarea
          ref={textAreaRef}
          name={name}
          value={value}
          onChange={onChange}
          className="outline-none border-none font-normal text-sm h-[15px] resize-none"
        />
      )}
    </div>
  );
};

export default InputWrapper;
