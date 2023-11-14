
import { HiOutlineDotsVertical } from "react-icons/hi";
const ActionDropDown = ({ id }) => {
  return (
    <div>
      <div className="dropdown dropdown-end">
        <label tabIndex={0} className="cursor-pointer">
          <HiOutlineDotsVertical />
        </label>
        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
          <li><a>View</a></li>
          <li>
            <button onClick={() => document.getElementById(`modal_${id}`).showModal()}>Edit</button>
            <dialog id={`modal_${id}`} className="modal">
              <div className="modal-box">
                <h3 className="font-bold text-lg">Hello!</h3>
                <div className="modal-action">
                  <form method="dialog">
                    {id}
                    <button className="btn">Close</button>
                  </form>
                </div>
              </div>
            </dialog></li>
          <li><a>Delete</a></li>
        </ul>
      </div>
    </div>
  );
};

export default ActionDropDown;