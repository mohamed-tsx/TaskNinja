import { useEffect, useState } from "react";
import NewTaskModal from "../Components/NewTaskModal";
import {
  DocumentData,
  addDoc,
  collection,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import { firebaseFirestore } from "../Firebase/firebaseCinfig";
import { useUserStore } from "../Hooks/useUserStore";
import NotStarted from "../Components/NotStarted";
import Completed from "../Components/Completed";
import Pending from "../Components/PendingTasks";

interface Task {
  userId: string;
  Task: {
    name: string;
    dueDate: string;
    priority: string;
    status: string;
    taskName: string;
  };
  id: string;
}

const Dashboard = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const { currentUser } = useUserStore();
  const [notStartedTasks, setNotStartedTasks] = useState<Task[]>([]);
  const [pendingTasks, setPendingTasks] = useState<Task[]>([]);
  const [completedTasks, setCompletedTasks] = useState<Task[]>([]);
  console.log(completedTasks);
  console.log(notStartedTasks);
  console.log(pendingTasks);

  const TaskRef = collection(firebaseFirestore, "Tasks");

  const handleAddTask = async (Task: any) => {
    await addDoc(TaskRef, {
      Task,
      userId: currentUser?.uid,
    });
  };

  useEffect(() => {
    const notStartedQuery = query(
      TaskRef,
      where("Task.status", "==", "notStarted"),
      where("userId", "==", currentUser?.uid)
    );
    const pendingQuery = query(
      TaskRef,
      where("Task.status", "==", "pending"),
      where("userId", "==", currentUser?.uid)
    );
    const completedQuery = query(
      TaskRef,
      where("Task.status", "==", "completed"),
      where("userId", "==", currentUser?.uid)
    );
    const notStartedunsuscribe = onSnapshot<DocumentData, DocumentData>(
      notStartedQuery,
      (snapshot) => {
        let tasksHolder: Task[] = [];
        snapshot.forEach((doc) => {
          const data = doc.data() as Task;
          tasksHolder.push({ ...data, id: doc.id });
        });
        setNotStartedTasks(tasksHolder as any);
      }
    );
    const pendingunsuscribe = onSnapshot<DocumentData, DocumentData>(
      pendingQuery,
      (snapshot) => {
        let tasksHolder: Task[] = [];
        snapshot.forEach((doc) => {
          const data = doc.data() as Task;
          tasksHolder.push({ ...data, id: doc.id });
        });
        setPendingTasks(tasksHolder as any);
      }
    );
    const completedunsuscribe = onSnapshot<DocumentData, DocumentData>(
      completedQuery,
      (snapshot) => {
        let tasksHolder: Task[] = [];
        snapshot.forEach((doc) => {
          const data = doc.data() as Task;
          tasksHolder.push({ ...data, id: doc.id });
        });
        setCompletedTasks(tasksHolder as any);
      }
    );

    return () => {
      notStartedunsuscribe();
      pendingunsuscribe();
      completedunsuscribe();
    };
  }, []);
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
          {notStartedTasks && notStartedTasks.length > 0 ? (
            notStartedTasks.map((notStarted) => (
              <div key={notStarted.id}>
                <NotStarted notStarted={notStarted} />
              </div>
            ))
          ) : (
            <p>There's no pending tasks</p>
          )}
        </div>
        <div className="mb-4 md:mb-0">
          <h1 className="flex gap-3 items-center">
            <span className="text-orange-300">●</span>Pending
          </h1>
          {pendingTasks && pendingTasks.length > 0 ? (
            pendingTasks.map((pendingTask) => (
              <div key={pendingTask.id}>
                <Pending pending={pendingTask} />
              </div>
            ))
          ) : (
            <p>There's no pending tasks</p>
          )}
        </div>
        <div>
          <h1 className="flex gap-3 items-center">
            <span className="text-green-500">●</span>Completed
          </h1>
          {completedTasks && completedTasks.length > 0 ? (
            completedTasks.map((completedTask) => (
              <div key={completedTask.id}>
                <Completed completed={completedTask} />
              </div>
            ))
          ) : (
            <p>There's no completed tasks</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
