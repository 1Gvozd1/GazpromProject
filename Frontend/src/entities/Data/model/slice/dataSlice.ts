import { createSlice } from '@reduxjs/toolkit';
import { Data, DataSchema } from '../types/data';
import { dataApi } from '../../../../app/providers/StoreProvider/services/data';
import { nodeModuleNameResolver } from 'typescript';
import { RootState } from '../../../../app/providers/StoreProvider/store';


const initialState: Data = {
    records: [],
    currentPage: 1,
    totalPages: 1,

};

const slice = createSlice({
    name: "data",
    initialState,
    reducers: {
      logout: () => initialState,
    },
    extraReducers: (builder) => {
      builder
        .addMatcher(dataApi.endpoints.getAllData.matchFulfilled, (state, action) => {
          state.currentPage = action.payload.currentPage;
          state.totalPages= action.payload.totalPages;
          state.records = action.payload.records;
        })
    },
  });

export default slice.reducer;

export const selectRecords = (state: RootState) =>
  state.data.records

export const selectCurrentPage = (state: RootState) =>
    state.data.currentPage

export const selectTotalPages = (state: RootState) =>
    state.data.totalPages