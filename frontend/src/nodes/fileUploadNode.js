import { useState } from "react";
import { Position } from "reactflow";
import InputWrapper from "../components/form/inputWrapper";
import NodeLayout from "./nodeLayout";
import { FaRegFileLines } from "react-icons/fa6";

export const FileUploadNode = ({ id, data }) => {
  const [fileDetails, setFileDetails] = useState(data?.file || null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFileDetails(file);
  };

  return (
    <NodeLayout
      id={id}
      data={data}
      title="File Upload"
      Icon={FaRegFileLines}
      handles={[
        { type: "source", position: Position.Right, id: `${id}-value` },
        { type: "target", position: Position.Left, id: `${id}-value` },
      ]}
    >
      <InputWrapper
        type="file"
        label="Select File"
        accept=".jpg, .png, .pdf"
        onChange={handleFileChange}
        isInput
      />
    </NodeLayout>
  );
};
