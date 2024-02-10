import React, { useState } from "react";

interface Task {
  taskName: string;
  dueDate: string;
  priority: string;
  status: string;
}

interface NewTaskModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (task: Task) => void;
}

const NewTaskModal: React.FC<NewTaskModalProps> = ({
  isOpen,
  onClose,
  onSave,
}) => {
  const [task, setTask] = useState<Task>({
    taskName: "",
    dueDate: "",
    priority: "",
    status: "",
  });

  const [error, setError] = useState<string>("");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setTask((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!task.taskName || !task.dueDate || !task.priority || !task.status) {
      setError("All fields are required");
      return;
    }

    onSave(task);
    setTask({
      taskName: "",
      dueDate: "",
      priority: "",
      status: "",
    });
    setError("");
    onClose();
  };

  return (
    <>
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-md">
            <h2 className="text-2xl font-medium mb-4">Create a New Task</h2>
            <form onSubmit={handleSave}>
              <input
                type="text"
                placeholder="Task name"
                name="taskName"
                value={task.taskName}
                onChange={handleInputChange}
                className="w-full p-2 mb-4 border border-gray-300 rounded-md"
              />
              <input
                type="date"
                placeholder="Due date"
                name="dueDate"
                value={task.dueDate}
                onChange={handleInputChange}
                className="w-full p-2 mb-4 border border-gray-300 rounded-md"
              />
              <select
                name="priority"
                value={task.priority}
                onChange={handleInputChange}
                className="w-full p-2 mb-4 border border-gray-300 rounded-md"
              >
                <option value="" disabled>
                  Select Priority
                </option>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
              <select
                name="status"
                value={task.status}
                onChange={handleInputChange}
                className="w-full p-2 mb-4 border border-gray-300 rounded-md"
              >
                <option value="" disabled>
                  Select Status
                </option>
                <option value="notStarted">Not Started</option>
                <option value="pending">Pending</option>
                <option value="completed">Completed</option>
              </select>
              {error && <p className="text-red-500 mb-4">{error}</p>}
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-black text-white rounded-md p-2 mr-2"
                >
                  Save
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setError("");
                    onClose();
                  }}
                  className="bg-gray-300 text-gray-700 rounded-md p-2"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default NewTaskModal;
