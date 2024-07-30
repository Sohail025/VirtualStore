export const ForgotBotton = () => {
  return (
    <div className="flex flex-row justify-between my-2 mx-[0.02rem] font-[Poppins]">
      <div className="flex flex-row gap-1">
        <input className="w-3 h-auto " type="checkbox" name="" id="" />
        <p className="text-[0.8rem]">Remember me</p>
      </div>
      <p className="text-[0.8rem] text-[#7c7b7b] cursor-pointer">
        Forgot Password ?
      </p>
    </div>
  );
};
export default ForgotBotton;
