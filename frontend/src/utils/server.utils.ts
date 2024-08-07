import { AxiosError } from "axios";

export const onServerError = (error: AxiosError) => {
  alert(error.message || "An error occurred");
};
export const ACCESS_KEY = "1cf87186a14f15df0c99b9a31bc3fa32";
