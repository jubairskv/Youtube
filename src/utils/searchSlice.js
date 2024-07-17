import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {},
  reducers: {
    cacheResults: (state, action) => {
        state = Object.assign(state, action.payload);
    },
  },
});

export const { cacheResults } = searchSlice.actions;

export default searchSlice.reducer;

/**
 * cache
 * time complexity in array = o(n)
 * time complexity in object = o(1)
 * array.indexOf()
 * [i,ip,iph,ipho,iphone]  -o(n)
 * {
 * i:
 * ip:
 * iph:
 * ipho:
 * iphon:
 * iphone}
 * new map()
 */


//LRU Cache  in DSAA :  (least recently used) -> restrict the cache for 100 only after 100 remove frontend cache
