import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// const fetchHomeDataActionAsync =createAsyncThunk('fetch/homeDataAction', async (extraInfo, store) => { // 2.2
//   const res = await axios.get('http://123.207.32.32:8000/home/multidata')
//   // 在这里拿到值之后，进行dispatch, 就不需要进行监听
//   // store.dispatch(setBannerAction(res.data.data.banner.list))
//   return res.data
// })

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    banner: [{name: '1'}],
  },
  reducers: {
    setBannerAction: (state, action) => { // 这里action是payload的别名
      const { payload } = action;
      state.banner = payload;
    }
  },
})

export const { setBannerAction } = homeSlice.actions; // 1.6
export default homeSlice.reducer;