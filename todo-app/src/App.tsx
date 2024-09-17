import React from 'react';
import { Container } from '@mui/material';
import TodoTable from './components/TodoTable';

const App: React.FC = () => {
  return (
    <Container>
      <TodoTable />
    </Container>
  );
};

export default App;
