import "./App.css";
import BasicTable from "./Components/BasicTable";
import MultiStepper from "./Components/MultiStepper/MultiStepper";
import Progress from "./Components/Progress/Progress";

//import StudentCalender from './Components/ReactCalendar/StudentCalender'

//import Routine from './Components/Routine/Routine'
// import CustomImageUploader from './Components/CustomImageUploader/CustomImageUploader'
// import DemoNavigationMenu from './Components/DemoNavigationMenu'
// import PopOver from './Components/PopOver'
// import BasicTable from './Components/BasicTable'
// import tableData from "./Components/data.json"
// import { TeacherColumns } from './Components/TableHeader'
function App() {
  return (
    <div className="w-11/12 mx-auto py-16">
      <MultiStepper />
      {/* <Progress /> */}
      {/* <BasicTable columns={TeacherAttendanceHeader} tabelData={tableData} /> */}
      {/* <PopOver /> */}
      {/* <DemoNavigationMenu /> */}
      {/* <CustomImageUploader /> */}
      {/* <ReactCalendar /> */}
      {/* <StudentCalender /> */}
      {/* <MyCalendar /> */}
      {/* <Routine /> */}
      {/* <Header /> */}
      {/* <div>hello</div> */}
    </div>
  );
}
export default App;
