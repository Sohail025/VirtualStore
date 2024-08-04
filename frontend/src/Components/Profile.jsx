import Sidebar from "./Sidebar";

export const Profile = () => {
  return (
    <div className="py-9 mx-10 flex flex-col justify-center gap-10">
      <h1>Account Details</h1>
      <div className="w-20 h-20 rounded-[50%] bg-teal-300 ml-3"></div>
      <form className="flex flex-col sm:w-[50%] mt-2 gap-2">
        <label htmlFor="">UserName</label>
        <input className="outline-none py-1 indent-1 rounded border-black border-2 " />
        <label htmlFor="">Email</label>
        <input className="outline-none py-1 indent-1 rounded border-black border-2 " />
        <div className="py-1 bg-black rounded cursor-pointer text-white text-nowrap w-32 text-center mt-3">
          Save Changes
        </div>
      </form>
    </div>
  );
};
export default Profile;
