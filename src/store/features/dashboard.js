import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// const fetchHomeDataActionAsync =createAsyncThunk('fetch/homeDataAction', async (extraInfo, store) => { // 2.2
//   const res = await axios.get('http://123.207.32.32:8000/home/multidata')
//   // 在这里拿到值之后，进行dispatch, 就不需要进行监听
//   // store.dispatch(setBannerAction(res.data.data.banner.list))
//   return res.data
// })

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState: {
    imgUrl: '',
    handledUrl: '',
  },
  reducers: {
    setImgFile: (state, action) => { // 这里action是payload的别名
      console.log(action);
      const { payload } = action;
      state.imgUrl = payload;
    }
  },
})

export const { setImgFile } = dashboardSlice.actions; // 1.6
export default dashboardSlice.reducer;