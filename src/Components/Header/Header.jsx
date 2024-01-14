import Nav from "./Nav";
const Header = () => {
  return (
    <div className="w-full  mx-auto py-5  px-8 flex justify-between gap-0 bg-gray-200">
      <div>logo</div>
      <div className="">
        <Nav />
      </div>
    </div>
  );
};

export default Header;