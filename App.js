import MainScreen from "./src/Screens/MainScreen";

const taskList = [
  {
    id: 1,
    task: "Task 1",
    completed: false
  },
  {
    id: 2,
    task: "Task 2",
    completed: false
  }
]

export default function App() {
  return (
    <MainScreen taskList = {taskList}/>
  );
}

