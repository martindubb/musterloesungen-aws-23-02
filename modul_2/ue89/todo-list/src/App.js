import './App.css';
import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Checkbox from '@mui/material/Checkbox';



function App() {
  const [todos, setTodos] = React.useState([]);
  const [inputValue, setInputValue] = React.useState('');

  const handleClick = () => {
    if (inputValue === "") return;

    const task = {
      text: inputValue,
      checked: false
    }
    setTodos([...todos, task]);
    setInputValue('');
  }

  const toogleCheck = (index) => {
    const newTodos = [...todos];
    newTodos[index].checked = !newTodos[index].checked;
    setTodos(newTodos);
  }

  return (
    <>
      <Container maxWidth="md" align="center">
        <Typography variant="h1">
          My ToDo List
        </Typography>
        <hr />
        <Stack direction="row" spacing={2} justifyContent="center" margin="2em">
          <TextField id="outlined-basic" label="ToDo hier beschreiben..." variant="outlined" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
          <Button variant="contained" onClick={handleClick}>hinzufügen</Button>
          <Button variant="contained" onClick={() => setTodos([])}>Alle löschen</Button>
        </Stack>
        <br />
        <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', border: '1px solid gray' }}>
          <List>
            {todos.length <= 0 ? <p className="muted">ToDos erscheinen hier </p> : null }
            {todos.map((task, index) => {
              return (
                <ListItem>
                  <ListItemButton onClick={() => toogleCheck(index)}>
                    <ListItemIcon>
                      <Checkbox checked={task.checked} />
                    </ListItemIcon>
                    <ListItemText primary={task.text} className={task.checked ? "done" : ""} />
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
        </Box>
      </Container>
    </>
  );
}

export default App;
