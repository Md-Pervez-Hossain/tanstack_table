
import './App.css'
import BasicTable from './Components/BasicTable'
import tableData from "./Components/data.json"
import { TeacherColumns } from './Components/TableHeader'
function App() {
  return (
    <>
      <BasicTable columns={TeacherColumns} tabelData={tableData} />
    </>
  )
}
export default App
