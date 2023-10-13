import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getContacts,
  createContacts,
  deleteContacts,
} from 'servises/contactsApi';

export const getContactsThunk = createAsyncThunk('contacts/get', () =>
  getContacts()
);
export const createContactsThunk = createAsyncThunk('contacts/create', data =>
  createContacts(data)
);
export const deleteContactsThunk = createAsyncThunk('contacts/delete', id =>
  deleteContacts(id)
);
