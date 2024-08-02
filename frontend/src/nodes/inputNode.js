import { useState } from "react";
import { Position } from "reactflow";
import NodeLayout from "./nodeLayout";
import { MdInput } from "react-icons/md";
import InputWrapper from "../components/form/inputWrapper";

const selectOptions = [
  { value: "Text", label: "Text" },
  { value: "File", label: "File" },
];

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.inputName || id.replace("customInput-", "input_")
  );
  const [inputType, setInputType] = useState(data.inputType || "Text");

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setInputType(e.target.value);
  };

  return (
    <NodeLayout
      id={id}
      title="Input"
      Icon={MdInput}
      handles={[
        { type: "source", position: Position.Right, id: `${id}-value` },
      ]}
    >
      <InputWrapper
        type="text"
        isInput
        label="Name:"
        value={currName}
        onChange={handleNameChange}
      />
      <InputWrapper
        type="select"
        isSelect
        label="Type:"
        value={inputType}
        onChange={handleTypeChange}
        options={selectOptions}
      />
    </NodeLayout>
  );
};

