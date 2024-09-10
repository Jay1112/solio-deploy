import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showCreatePersonalizedModal: false,
  showEditPersonalizedModal: false,
  showDeletePersonalizedModal: false,
  personalizedItemsList: null,
  personalizedTypesList: null,
  selectedPersonalized: null,
};

export const personalizedSlice = createSlice({
  name: "personalized",
  initialState,
  reducers: {
    setPersonalizedItemsList: (state, action) => {
      state.personalizedItemsList = action.payload;
    },
    setPersonalizedTypesList: (state, action) => {
      state.personalizedTypesList = action.payload;
    },
    setShowCreatePersonalizedModal: (state, action) => {
      state.showCreatePersonalizedModal = action.payload;
    },
    setShowEditPersonalizedModal: (state, action) => {
      state.showEditPersonalizedModal = action.payload;
    },
    setShowDeletePersonalizedModal: (state, action) => {
      state.showDeletePersonalizedModal = action.payload;
    },
    setSelectedPersonalized: (state, action) => {
      state.selectedPersonalized = action.payload;
    },
  },
});

export const {
  setPersonalizedItemsList,
  setPersonalizedTypesList,
  setShowCreatePersonalizedModal,
  setShowDeletePersonalizedModal,
  setShowEditPersonalizedModal,
  setSelectedPersonalized,
} = personalizedSlice.actions;

export default personalizedSlice.reducer;
