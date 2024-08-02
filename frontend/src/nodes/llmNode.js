import { Position } from "reactflow";
import NodeLayout from "./nodeLayout";
import { CiGrid41 } from "react-icons/ci";

export const LLMNode = ({ id, data }) => {
  return (
    <NodeLayout
      id={id}
      title="LLM"
      Icon={CiGrid41}
      handles={[
        {
          type: "target",
          position: Position.Left,
          id: `${id}-system`,
          style: { top: `${100 / 3}%` },
        },
        {
          type: "target",
          position: Position.Left,
          id: `${id}-prompt`,
          style: { top: `${200 / 3}%` },
        },
        {
          type: "source",
          position: Position.Right,
          id: `${id}-response`,
        },
      ]}
    >
      <div>
        <span>This is a LLM.</span>
      </div>
    </NodeLayout>
  );
};
