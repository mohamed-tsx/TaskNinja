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

interface props {
  notStarted: Task;
}
const NotStarted = ({ notStarted }: props) => {
  return (
    <div className="border rounded-md p-4 w-52 flex flex-col gap-3 flex-wrap overflow-visible">
      <div className="flex justify-between items-center">
        <p>{notStarted.Task.taskName}</p>
        <BsThreeDotsVertical />
      </div>
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1">
          <p>Priority: </p>
          <p>{notStarted.Task.priority}</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <LuCalendar />
            <div className="flex gap-2">
              <p>due date:</p>
              <p>{notStarted.Task.dueDate}</p>
            </div>
          </div>
        </div>
        <p>{notStarted.Task.status}</p>
      </div>
    </div>
  );
};

export default NotStarted;
