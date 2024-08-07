import { observer } from "mobx-react";
import useFetchFlights from "../hooks/server/useFetchFlights";

const HomePage = () => {
  const { data } = useFetchFlights();
  return (
    <div>
      <h1>Home Page</h1>
      <p>{data}</p>
    </div>
  );
};

export default observer(HomePage);
