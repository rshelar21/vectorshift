import { useState } from "react";
import { Position } from "reactflow";
import NodeLayout from "./nodeLayout";
import InputWrapper from "../components/form/inputWrapper";
import { FaRegFileLines } from "react-icons/fa6";

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || "{{input}}");
  const [handles, setHandles] = useState([
    { type: "source", position: Position.Right, id: `${id}-value` },
  ]);

  const handleTextChange = (e) => {
    const offsetHeight = e.target.offsetHeight + 20;
    const { value, name } = e.target;
    setCurrText(value);
    let newHandles = [];
    const regex = /\{\{(.+?)\}\}/g;
    const matches = new Set(
      [...value.matchAll(regex)].map((match) => match[1])
    );

    const finalMatches = [...matches];

    newHandles = finalMatches.map((match, index) => ({
      type: "target",
      position: Position.Left,
      id: `${id}-input-${match}`,
      title: match,
      style: {
        top: `${(offsetHeight * (index + 1)) / finalMatches?.length}px`,
      },
    }));

    setHandles([
      ...newHandles,
      { type: "source", position: Position.Right, id: `${id}-value` },
    ]);
  };

  return (
    <NodeLayout handles={handles} Icon={FaRegFileLines} id={id} title="Text">
      <InputWrapper
        type="text"
        isTextArea
        label="Text:"
        value={currText}
        onChange={handleTextChange}
      />
    </NodeLayout>
  );
};
