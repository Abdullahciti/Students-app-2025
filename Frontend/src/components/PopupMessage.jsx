/* eslint-disable react/prop-types */
const PopupMessage = ({ popupText }) => {
  return (
    <div className="fixed left-0 top-0 h-[100vh] w-full bg-[#000000ad]">
      <div className="relative top-[50%] translate-y-[-50%] min-w-[360px] w-fit bg-slate-400 m-auto mx-auto text-center py-4 font-semibold text-3xl">
        {popupText}
      </div>
    </div>
  );
};

export default PopupMessage;
