import { axios } from 'axios';
import * as dotenv from 'dotenv';

dotenv.config();

const api = axios.create({
  withCredentials: true,
  baseURL: process.env.API_URL,
});

export const getNotes = async () => {
  try {
    await api.get('/');
  } catch (error) {
    console.log('ERR getNotes ', error?.message);
  }
};

export const addNote = async (data) => {
  try {
    await api.post('/add', { data });
  } catch (error) {
    console.log('ERR addNote ', error?.message);
  }
};

export const editNote = async (data) => {
  try {
    await api.patch('/edit', { data });
  } catch (error) {
    console.log('ERR editNote ', error?.message);
  }
};

export const delNote = async (id) => {
  try {
    await api.get(`/${id}'`);
  } catch (error) {
    console.log('ERR delNote ', error?.message);
  }
};

export default getNotes;
