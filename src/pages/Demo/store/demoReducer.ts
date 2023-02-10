import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const getDemoData = createAsyncThunk(
  'demo/getData',
  async (initData: string) => {
    const res = await axios.post('http://127.0.0.1:3000/api/getDemoData', {
      content: initData
    })
    return res.data?.data?.content;
  }
)

const demoRouter = createSlice({
  name: 'demo',
  // initialState: {
  //   content: '默认数据'
  // },
  initialState: typeof window !== 'undefined' ? (window as any)?.context?.state?.demo : { content: '默认数据' },
  // 同步reducer
  reducers: {},
  //异步reducer
  extraReducers(build) {
    build.addCase(getDemoData.pending, (state, action) => {
      state.content = 'pending'
    }).addCase(getDemoData.fulfilled, (state, action) => {
      state.content = action.payload
    }).addCase(getDemoData.rejected, (state, action) => {
      state.content = 'rejected'
    })
  }
})

export { demoRouter, getDemoData }


/**
 * reduces : 可以存放同步的reduces 不需要请求参数 
 * initialState: 可以理解成原来的state 
 * name: 是这个reducer的空间， 后面取store的时候会根据这个进行区分 
 * extraReducers: 这个是我们这里应该需要的异步reducer， 其中包含三个状态，pending、fulfilled、rejected 分别对应到请求的三种状态 
 */