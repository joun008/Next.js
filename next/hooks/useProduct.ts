import axios from "axios";
import { useQuery } from "react-query";
import { GET_PRODUCT } from "../constants/url";

const product = async () => {
  const result = await axios.get(GET_PRODUCT);
  return result.data;
};

export const useProduct = () => {
  return useQuery("useProudct", product);
};
