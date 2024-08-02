import { DraggableNode } from "./draggableNode";
import { MdInput } from "react-icons/md";
import { CiGrid41 } from "react-icons/ci";
import { MdOutput } from "react-icons/md";
import { FaRegFileLines } from "react-icons/fa6";
import { FaFileUpload } from "react-icons/fa";
import { MdOutlineDateRange } from "react-icons/md";
import { CgNotes } from "react-icons/cg";

export const PipelineToolbar = () => {
  return (
    <div className="p-2.5">
      <div className="flex flex-wrap gap-4 mt-5">
        <DraggableNode type="customInput" label="Input" Icon={MdInput} />
        <DraggableNode type="llm" label="LLM" Icon={CiGrid41} />
        <DraggableNode type="customOutput" label="Output" Icon={MdOutput} />
        <DraggableNode type="text" label="Text" Icon={FaRegFileLines} />
        <DraggableNode
          type="fileUpload"
          label="File Upload"
          Icon={FaFileUpload}
        />
        <DraggableNode type="note" label="Note" Icon={CgNotes} />
        <DraggableNode
          type="datePicker"
          label="Date Picker"
          Icon={MdOutlineDateRange}
        />
      </div>
    </div>
  );
};
