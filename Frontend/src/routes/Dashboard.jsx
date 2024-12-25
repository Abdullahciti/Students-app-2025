import Cards from "../routes/dashboard/Cards";
/* eslint-disable react/prop-types */
const Dashboard = ({ baseUrl }) => {
  return (
    <div>
      <Cards baseUrl={baseUrl} />
    </div>
  );
};

export default Dashboard;
