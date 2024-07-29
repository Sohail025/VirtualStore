import Sidebar from "../Components/Sidebar";

export const Profile = () => {
  return (
    <div className="w-screen flex flex-row">
      <Sidebar />
      <div className="w-[81.55%] bg-[#f6f6f6] h-screen flex flex-col justify-center">
        <div className="mx-12 my-4 flex items-center">
          <h1 className="">Profile</h1>
        </div>
        <div className="flex justify-center h-full">
          <div className="bg-[#ffffff] w-full h-[95%] mx-12 shadow-lg ">
            <div className="py-9 mx-10 flex flex-col justify-center gap-10">
              <h1>Account Details</h1>
              <div className="w-20 h-20 rounded-[50%] bg-teal-300 ml-3"></div>
              <form className="flex flex-col w-[50%] mt-2 gap-2">
                <label htmlFor="">UserName</label>
                <input className="outline-none py-1 indent-1 rounded border-black border-2 " />
                <label htmlFor="">Email</label>
                <input className="outline-none py-1 indent-1 rounded border-black border-2 " />
                <div className="py-1 bg-black rounded cursor-pointer text-white text-nowrap w-32 text-center mt-3">
                  Save Changes
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Profile;
