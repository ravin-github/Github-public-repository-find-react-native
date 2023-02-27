import {createSlice} from '@reduxjs/toolkit';

const initialState = {
loading:false,
repos: [],
endReached: false,
totalCount: undefined
};

const repo = createSlice({
  name: 'repo',
  initialState,
  reducers: {
    repoAction: state => {
      state.repos.length ? state.fetching = true :  state.loading = true
    },
    repoActionSuccess: (state, action) => {
      let page = action.payload.page
      let data = action.payload.data.items
      let totalCount = action.payload.data.total_count
       state.loading = false;
       state.fetching = false;
       state.totalCount = totalCount
       let uniqueData = [...new Set(data)]
       if(state.repos?.length <= totalCount) {
         if(page === 1)  {
           state.endReached = false 
           state.repos = uniqueData 
          } else {
            state.repos.length 
              ? state.repos = [...state.repos, ...uniqueData]
              : state.repos = data 
        }
       }
    },
    repoActionFailure: state => {
       state.loading = false;
       state.fetching = false;
    }
  },
});

export const {
  actions: {
    repoAction,
    repoActionSuccess,
    repoActionFailure
  },
  reducer: repoReducer,
} = repo;
