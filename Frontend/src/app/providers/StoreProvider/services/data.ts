import { Data, DataSchema } from "../../../../entities/Data";
import { api } from "./api";

export const dataApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllData: builder.query<Data, string>({
      query: (page) => ({
        url: `/data${page}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useGetAllDataQuery,
} = dataApi;

export const {
  endpoints: {
    getAllData
  },
} = dataApi;