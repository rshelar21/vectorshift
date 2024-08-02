import { useState } from "react";
import { Position } from "reactflow";
import NodeLayout from "./nodeLayout";
import { MdOutput } from "react-icons/md";
import InputWrapper from "../components/form/inputWrapper";

const selectOptions = [
  { value: "Text", label: "Text" },
  { value: "File", label: "Image" },
];

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.outputName || id.replace("customOutput-", "output_")
  );
  const [outputType, setOutputType] = useState(data.outputType || "Text");

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setOutputType(e.target.value);
  };

  return (
    <NodeLayout
      handles={[
        {
          type: "target",
          position: Position.Left,
          id: `${id}-value`,
        },
      ]}
      title="Output"
      Icon={MdOutput}
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
        value={outputType}
        onChange={handleTypeChange}
        options={selectOptions}
      />
    </NodeLayout>
  );
};
