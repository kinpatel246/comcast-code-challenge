import React, { useEffect, useState } from 'react';
import { fetchTodos } from '../services/api';
import { Table, TableBody, TableCell, TableHead, TableRow, Paper, TableContainer, Typography } from '@mui/material';
import Pagination from './Pagination';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

const TodoTable: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const limit = 10; // Limit number of todos per page

  useEffect(() => {
    const loadTodos = async () => {
      try {
        const data = await fetchTodos(limit);
        setTodos(data);
      } catch (err) {
        setError(err.message);
      }
    };
    loadTodos();
  }, [page]);

  const handlePageChange = (newPage: number) => setPage(newPage);

  return (
    <Paper>
      <Typography variant="h5" component="div" style={{ padding: '16px' }}>Todo List</Typography>
      {error ? (
        <Typography color="error">{error}</Typography>
      ) : (
        <>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell>Title</TableCell>
                  <TableCell>Completed</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {todos.map(todo => (
                  <TableRow key={todo.id}>
                    <TableCell>{todo.id}</TableCell>
                    <TableCell>{todo.title}</TableCell>
                    <TableCell>{todo.completed ? 'Yes' : 'No'}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Pagination page={page} onPageChange={handlePageChange} />
        </>
      )}
    </Paper>
  );
};

export default TodoTable;
