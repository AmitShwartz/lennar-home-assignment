import flightsApi from "../api/flights/flights.api";
import IFlightsApi from "../api/flights/flights.api.interface";

class FlightsService {
  private api: IFlightsApi;
  constructor(api: IFlightsApi) {
    this.api = api;
  }

  async fetchRealTimeFlights(): Promise<any> {
    return (await this.api.fetchRealTimeFlights()).data;
  }
}
const flightsService = new FlightsService(flightsApi);

export default flightsService;
