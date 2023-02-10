import { configureStore } from "@reduxjs/toolkit";
import thunk from 'redux-thunk'
import { demoRouter } from "@/pages/Demo/store";

const clientStore = configureStore({
  reducer: { demo: demoRouter.reducer },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk)
})

const serverStore = configureStore({
  reducer: { demo: demoRouter.reducer },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk)
})

export { clientStore, serverStore }