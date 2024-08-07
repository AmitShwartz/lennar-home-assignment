import { AxiosResponse } from "axios";

interface IFlightsApi {
  fetchRealTimeFlights: () => Promise<AxiosResponse<any, any>>;
}

export default IFlightsApi;
