import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";

const NavLink = () => {
  return <ul className="flex flex-col w-full md:flex-row gap-5 items-center">
    <li>Home</li>
    <li>About</li>
    <li>Contact</li>
    <li>Project</li>
  </ul>
}
const Nav = () => {
  const [open, setOpen] = useState(true)
  const handleClick = () => {
    setOpen(!open)
  }
  console.log(open);
  return (
    <div>
      <div className="hidden md:flex ">
        <NavLink />
      </div>
      <div className="md:hidden flex justify-end transition-all ease-out duration-700 z-50">
        <button onClick={() => handleClick()} >
          {open ? <IoClose /> : <IoMdMenu />}
        </button>
      </div>
      <div className={`md:hidden bg-gray-500  w-[250px] h-full py-10 px-0  absolute top-0   text-white transition-all duration-500 ease-in-out   ${open ? "left-0" : "-left-[250px]"}`}>
        <NavLink />
      </div>
    </div>
  );
};

export default Nav;