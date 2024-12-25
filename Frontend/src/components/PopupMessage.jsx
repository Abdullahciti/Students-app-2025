/* eslint-disable react/prop-types */
const PopupMessage = ({ popupText }) => {
  return (
    <div className="absolute left-0 top-0 h-full w-full bg-[#000000c2]">
      <div className="relative top-[50%] translate-y-[-50%] min-w-[360px] w-fit bg-slate-400 m-auto mx-auto text-center py-4 font-semibold text-3xl">
        {popupText}
      </div>
    </div>
  );
};

export default PopupMessage;
