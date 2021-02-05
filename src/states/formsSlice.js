import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'forms',
  initialState: {
    items: {},
  },
  reducers: {
    setForms: (state, action) => {
      state.items = action.payload
    },
    setItem: (state, action) => {
      state.items[action.payload.ref] = action.payload.data
    },
    removeItem: (state, action) => {
      delete state.items[action.payload]
    },
  },
});

export const selectAllItems = state => state.forms.items;
export const selectItem = function(state, ref) {
  if(typeof state.forms.items[ref] !== 'undefined') {
    return state.forms.items[ref]
  }
  else {
    return 'undefined'
  }
} 
export const { setItem, removeItem } = slice.actions;

Object.filter = (obj, predicate) => 
    Object.keys(obj)
          .filter( key => predicate(obj[key]) )
          .reduce( (res, key) => (res[key] = obj[key], res), {} );

export default slice.reducer;