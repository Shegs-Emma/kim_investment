import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface StateProps {
  popUpOpen: boolean;
}

const initialState = {
  popUpOpen: false,
};

const ModalSlice = createSlice({
  name: 'Modal',
  initialState,
  reducers: {
    togglePopUp(state: StateProps, action: PayloadAction<any>) {
      return (state = {
        ...initialState,
        popUpOpen: action.payload,
      });
    },
  },
});

const { reducer, actions } = ModalSlice;

export const { togglePopUp } = actions;

export default reducer;
