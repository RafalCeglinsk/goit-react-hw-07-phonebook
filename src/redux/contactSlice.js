import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

export const initialState = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  filter: '',
};

const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    addContact: (state, action) => {
      const { name, number } = action.payload;

      if (state.contacts.find(contact => contact.name === name)) {
        alert(`${name} is already in contacts.`);
      } else {
        state.contacts.push({ id: nanoid(), name, number });
      }
    },

    removeContact: (state, action) => {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
    filterContact: (state, action) => {
      state.filter = action.payload;
    },
    localStorageCheck: (state, action) => {
      state.contacts = [...action.payload];
    },
  },
});

export const { addContact, removeContact, filterContact, localStorageCheck } =
  contactSlice.actions;
export const contactReducers = contactSlice.reducer;
