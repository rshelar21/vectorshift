import { useState } from "react";
import { Position } from "reactflow";
import NodeLayout from "./nodeLayout";
import InputWrapper from "../components/form/inputWrapper";
import { MdOutlineDateRange } from "react-icons/md";

export const DatePickerNode = ({ id, data }) => {
  const [date, setDate] = useState(data?.date);

  const handleInputChange = (e) => {
    const { value } = e.target;
    setDate(value);
  };
  return (
    <NodeLayout
      handles={[
        {
          type: "source",
          position: Position.Right,
          id: `${id}-value`,
        },
      ]}
      title="Date Picker"
      Icon={MdOutlineDateRange}
    >
      <InputWrapper
        type="date"
        isInput
        label="Date:"
        value={date}
        onChange={handleInputChange}
      />
    </NodeLayout>
  );
};
