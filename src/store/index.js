import { configureStore } from "@reduxjs/toolkit";

import homeReducer from './features/home'
import dashboardReducer from "./features/dashboard";


const store = configureStore({
  reducer: {
    // 添加你的reducers
    home: homeReducer,
    dashboard: dashboardReducer
  }
})
export default store;