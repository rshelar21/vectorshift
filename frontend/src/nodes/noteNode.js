import { useState } from "react";
import NodeLayout from "./nodeLayout";
import { Position } from "reactflow";
import InputWrapper from "../components/form/inputWrapper";
import { CgNotes } from "react-icons/cg";

export const NoteNode = ({ id, data }) => {
  const [notesData, setNotesData] = useState(data?.note || "");

  const handleInputChange = (e) => {
    const { value } = e.target;
    setNotesData(value);
  };
  return (
    <NodeLayout
      title="Note"
      Icon={CgNotes}
      handles={[
        { type: "source", position: Position.Right, id: `${id}-value` },
      ]}
      id={id}
    >
      <InputWrapper
        type="text"
        isTextArea
        value={notesData}
        onChange={handleInputChange}
      />
    </NodeLayout>
  );
};
