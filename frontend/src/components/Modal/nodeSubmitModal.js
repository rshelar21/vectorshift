import { useEffect, useRef } from "react";
import { MdOutlineClear } from "react-icons/md";

const NodeSubmitModal = ({ setIsOpenModal, nodeDetails }) => {
  const modalRef = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (!modalRef.current) {
        return;
      }
      if (!modalRef.current.contains(event?.target)) {
        setIsOpenModal(false);
      }
    };

    document.addEventListener("click", handler, true);
    return () => {
      document.removeEventListener("click", handler);
    };
  }, []);

  const handleCloseModal = () => {
    setIsOpenModal(false);
  };

  return (
    <div className="fixed inset-0 backdrop-blur-sm  bg-gray-500 bg-opacity-40 z-50 flex items-center justify-center">
      <div
        className="bg-white relative w-11/12 md:w-1/2 lg:w-1/3 rounded-lg shadow-lg py-6 px-4 fade-in"
        ref={modalRef}
      >
        <div className="flex justify-end">
          <button
            onClick={handleCloseModal}
            className=" text-gray-500 cursor-pointer p-1 border border-gray-200 rounded-lg "
          >
            <MdOutlineClear className="" />
          </button>
        </div>
        <div className="flex flex-col gap-6">
          {nodeDetails?.is_dag ? (
            <h3 className="text-center font-semibold">
              Graph is a Directed Acyclic Graph (DAG)
            </h3>
          ) : (
            <h3 className="text-center font-semibold">
              Graph is NOT a Directed Acyclic Graph (DAG)
            </h3>
          )}
          <div className="">
            <p className="font-semibold">
              Number of Nodes: {nodeDetails?.num_nodes}
            </p>
            <p className="font-semibold">
              Number of Edges: {nodeDetails?.num_edges}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NodeSubmitModal;
