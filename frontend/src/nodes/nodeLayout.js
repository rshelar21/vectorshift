import React from "react";
import NodeHandle from "./nodeHandle";

const NodeLayout = ({
  children,
  title,
  Icon,
  handles,
}) => {
  return (
    <div className="bg-[#a18ee8] rounded-md p-0.5">
      <div className="w-[235px] bg-white h-fit border border-[#5d37e6] rounded-md px-1.5 py-2.5">
        <div className="flex gap-1 items-center pb-2 pt-0.5 text-[#5d37e6]">
          {Icon && <Icon className="h-5 w-5" />}

          <span className="font-normal text-base">{title}</span>
        </div>
        <div className="flex flex-col gap-2 px-1 py-2">{children}</div>
      </div>
      <NodeHandle handles={handles} />
    </div>
  );
};

export default NodeLayout;
