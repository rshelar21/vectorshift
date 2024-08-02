import { Handle } from "reactflow";

const NodeHandle = ({ handles }) => {
  return (
    <>
      {handles?.map((item, index) => (
        <div>
          <Handle
            key={index}
            type={item.type}
            position={item.position}
            id={item.id}
            style={{
              width: "8px",
              height: "8px",
              background: "white",
              border: "1px solid #5d37e6",
              borderRadius: "50%",
              left: item.position === "left" ? "-3px" : "calc(100% - 6px)",
              ...item?.style,
            }}          
          />
          {item?.title && (
            <span
              style={{
                  position: 'absolute',
                  top: `${parseFloat(item.style.top) - 15}px`,
                  left: `-${item.title.length * 7}px`,
                  color: 'rgba(60, 21, 115, 1)',
                  fontSize: '12px',
                }}
            >
              {item.title}
            </span>
          )}
        </div>
      ))}
    </>
  );
};

export default NodeHandle;
