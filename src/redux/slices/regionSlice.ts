import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { regionSlice } from '../types';
import { RegionService } from '../../api/services/regionService';
import { RegionRepository } from '../../api/respositories/regionRepository';

const regionService = new RegionService(new RegionRepository());

export const fetchRegion = createAsyncThunk(
  'region/fetchAll',
  async ({ name, search }: any, { rejectWithValue }) => {
    try {
      const regionData = await regionService.getCountryByName(name);
      return {
        id: search,
        data: regionData.data,
      };
    } catch (err) {
      rejectWithValue(err);
    }
  }
);

const initialState: regionSlice = {
  asia: null,
  africa: null,
  northAmerica: null,
  southAmerica: null,
  europe: null,
  oceania: null,
};

export const regionStoreSlice = createSlice({
  name: 'region',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchRegion.fulfilled, (state, action: any) => {
      state[action.payload.id] = action.payload.data;
    });
  },
});

export const {} = regionStoreSlice.actions;

export default regionStoreSlice.reducer;
