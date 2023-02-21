import { createSlice } from "@reduxjs/toolkit";

const searchBarSlice = createSlice({
  name: "searchBar",
  initialState: {
    searchFilter: "",
  },
  reducers: {
    updateFilter(state, action) {
      state.searchFilter = action.payload;
    },
  },
});

export const { updateFilter } = searchBarSlice.actions;
export default searchBarSlice.reducer;
