import { useState } from "react";
import NewTaskModal from "../Components/NewTaskModal";
import { addDoc, collection } from "firebase/firestore";
import { firebaseFirestore } from "../Firebase/firebaseCinfig";
import { useUserStore } from "../Hooks/useUserStore";

const Dashboard = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const { currentUser } = useUserStore();

  const TaskRef = collection(firebaseFirestore, "Tasks");

  const handleAddTask = async (Task: any) => {
    await addDoc(TaskRef, {
      Task,
      userId: currentUser?.uid,
    });
  };
  return (
    <div className="p-5 flex flex-col">
      <div className="flex justify-between items-center">
        <h1 className="font-medium text-2xl">Dashboard</h1>
        <button
          onClick={() => setModalOpen(true)}
          className="bg-black text-white rounded-lg p-2"
        >
          Add Task
        </button>
        <NewTaskModal
          isOpen={isModalOpen}
          onClose={() => setModalOpen(false)}
          onSave={handleAddTask}
        />
      </div>
      <hr className="my-3" />
      <div className="flex flex-col md:flex-row md:justify-between">
        <div className="mb-4 md:mb-0">
          <h1 className="flex gap-3 items-center">
            <span className="text-red-500">●</span>Not Started
          </h1>
        </div>
        <div className="mb-4 md:mb-0">
          <h1 className="flex gap-3 items-center">
            <span className="text-orange-300">●</span>Pending
          </h1>
        </div>
        <div>
          <h1 className="flex gap-3 items-center">
            <span className="text-green-500">●</span>Completed
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
