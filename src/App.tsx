import "./styles.css";
import Calendar from "./Calendar";
import moment from "moment";
export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <Calendar date={moment()} onDateChange={() => {}} />
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
