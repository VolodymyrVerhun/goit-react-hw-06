import { nanoid } from "nanoid";
import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  items: [],
};

const contactsSlice = createSlice({
  name: "items",
  initialState: INITIAL_STATE,
  reducers: {
    addContact(state, action) {
      state.items = [...state.items, { ...action.payload, id: nanoid() }];
    },
    deleteContact(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
export const selectContacts = (state) => state.contacts.items;
