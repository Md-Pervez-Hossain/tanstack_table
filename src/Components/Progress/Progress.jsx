
import './Progress.css'
const Progress = () => {
  return (
    <div className='w-11/12 mx-auto'>

      <div className='flex flex-col gap-5'>
        <progress className="progress bg-blue-500 w-56" value="0" max="100"></progress>
        <progress className="progress bg-blue-500 w-56" value="10" max="100"></progress>
        <progress className="progress bg-blue-500 w-56" value="40" max="100"></progress>
        <progress className="progress bg-blue-500 w-56" value="70" max="100"></progress>
        <progress className="progress bg-blue-500 w-56" value="100" max="100"></progress>
      </div>



    </div>
  );
};

export default Progress;