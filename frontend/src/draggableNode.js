import { cn } from "./utils/cn";

export const DraggableNode = ({ type, label, Icon }) => {
  const onDragStart = (event, nodeType) => {
    const appData = { nodeType };
    event.target.style.cursor = "grabbing";
    event.dataTransfer.setData(
      "application/reactflow",
      JSON.stringify(appData)
    );
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <div
      onDragStart={(event) => onDragStart(event, type)}
      onDragEnd={(event) => (event.target.style.cursor = "grab")}
      style={{
        cursor: "grab",
      }}
      draggable
      className={cn(
        "min-w-20 flex items-center rounded-lg bg-white justify-center flex-col border border-[#a6a6a6] shadow-md p-2.5 gap-0.5 cursor-grab",
        type
      )}
    >
      {Icon && <Icon className="text-[#5c5c5c] w-6 h-6" />}
      <span className="text-[#3b3b3b] font-normal text-sm">{label}</span>
    </div>
  );
};
