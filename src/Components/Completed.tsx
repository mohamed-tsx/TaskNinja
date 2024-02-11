import { BsThreeDotsVertical } from "react-icons/bs";
import { LuCalendar } from "react-icons/lu";

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

interface Props {
  completed: Task;
}

const Completed = ({ completed }: Props) => {
  return (
    <div className="border rounded-md p-5 w-fit flex flex-col gap-3 overflow-visible">
      <div className="flex justify-between items-center">
        <p className="text-lg font-semibold">{completed.Task.taskName}</p>
        <BsThreeDotsVertical className="text-gray-600" />
      </div>
      <div className="flex gap-2 flex-col">
        <div>
          <div className="flex items-center gap-1 text-sm text-gray-500">
            <p>Priority:</p>
            <p>{completed.Task.priority}</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <LuCalendar />
              <div className="flex gap-2">
                <p>Due date:</p>
                <p>{completed.Task.dueDate}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center text-sm text-gray-700 gap-2">
          <p>Status: </p>
          <p className="text-sm text-gray-700">Completed</p>
        </div>
      </div>
    </div>
  );
};

export default Completed;
