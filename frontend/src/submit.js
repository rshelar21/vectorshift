import { useState } from "react";
import { useStore } from "./store";
import { shallow } from "zustand/shallow";
import axios from "./lib/axios";
import NodeSubmitModal from "./components/Modal/nodeSubmitModal";

const selector = (state) => ({
  nodes: state.nodes,
  edges: state.edges,
});

export const SubmitButton = () => {
  const { nodes, edges } = useStore(selector, shallow);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [nodeDetails, setNodeDetails] = useState({});
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    try {
      if (!nodes.length) {
        return;
      }
      const response = await axios.post("/pipelines/parse", { nodes, edges });
      setNodeDetails(response?.data);
      setIsOpenModal(true);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center">
      {isOpenModal && (
        <NodeSubmitModal
          setIsOpenModal={setIsOpenModal}
          nodeDetails={nodeDetails}
        />
      )}

      <button
        type="submit"
        onClick={handleSubmit}
        className="px-4 py-2 rounded-full bg-blue-500 hover:bg-blue-600 text-white font-medium"
        disabled={loading}
      >
        Submit
      </button>
    </div>
  );
};
