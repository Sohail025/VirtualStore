export const Sidebar = () => {
  return (
    <div className="w-[19.45%] bg-slate-600 h-screen flex flex-col gap-6">
      <div className="flex justify-center items-center my-8">
        <span className="w-40 h-auto flex justify-center items-center">
          <img src="Logomark.svg" alt="" />
        </span>
      </div>
      <div className="flex flex-col gap-8">
        <button>Profile</button>
        <button>Add new Product</button>
        <button>Received Requests</button>
        <button>Sent Requests</button>
      </div>
    </div>
  );
};
export default Sidebar;
