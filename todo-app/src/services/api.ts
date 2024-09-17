import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com/todos';

export const fetchTodos = async (limit: number) => {
  try {
    const response = await axios.get(`${API_URL}?_limit=${limit}`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch todos');
  }
};
