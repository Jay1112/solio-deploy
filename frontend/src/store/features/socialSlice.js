import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showSocialModal: false,
  showEditSocialModal: false,
  showDeleteSocialModal: false,
  platformsList: null,
  userPlatformsList: null,
  selectedSocial: null,
};

export const socialSlice = createSlice({
  name: "social",
  initialState,
  reducers: {
    setShowSocialModal: (state, action) => {
      state.showSocialModal = action.payload;
    },
    setEditSocialModal: (state, action) => {
      state.showEditSocialModal = action.payload;
    },
    setDeleteSocialModal: (state, action) => {
      state.showDeleteSocialModal = action.payload;
    },
    setPlatformsList: (state, action) => {
      if (Array.isArray(action.payload) || action.payload === null) {
        state.platformsList = action.payload;
      }
    },
    setUserPlatformsList: (state, action) => {
      if (Array.isArray(action.payload) || action.payload === null) {
        state.userPlatformsList = action.payload;
      }
    },
    setSelectedSocial: (state, action) => {
      state.selectedSocial = action.payload;
    },
  },
});

export const {
  setShowSocialModal,
  setPlatformsList,
  setUserPlatformsList,
  setSelectedSocial,
  setEditSocialModal,
  setDeleteSocialModal,
} = socialSlice.actions;

export default socialSlice.reducer;
