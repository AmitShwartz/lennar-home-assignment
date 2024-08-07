import { ACCESS_KEY } from "../../utils/server.utils";
import axiosInstance from "../axiosInstance";
import IFlightsApi from "./flights.api.interface";

export class FlightsApi implements IFlightsApi {
  fetchRealTimeFlights() {
    return axiosInstance.get("/v1/flights", {
      params: {
        access_key: ACCESS_KEY,
      },
    });
  }
}

const flightsApi = new FlightsApi();

export default flightsApi;
