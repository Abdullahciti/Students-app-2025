// eslint-disable-next-line react/prop-types
const Card = ({ icon, text, value }) => {
  return (
    <div>
      <div className="col-span-1 p-8 bg-white flex flex-col gap-4 lg:items-start items-center shadow-2xl rounded-xl">
        <div className="text-4xl bg-activeColor p-3 text-white">{icon}</div>
        <div className="text-2xl capitalize">{text}</div>
        <div className="text-2xl">{value ? value : 0}</div>
      </div>
    </div>
  );
};

export default Card;
