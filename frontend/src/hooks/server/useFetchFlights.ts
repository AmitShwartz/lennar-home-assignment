import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import FlightsService from "../../services/flights.service";

const useFetchFlights = () => {
  return useQuery<any, AxiosError>({
    queryKey: ["flights"],
    queryFn: () => {
      return FlightsService.fetchRealTimeFlights();
    },
  });
};

export default useFetchFlights;
