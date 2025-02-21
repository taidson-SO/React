'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import  ListSubheader  from '@mui/material/ListSubheader';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import DateRangeIcon from '@mui/icons-material/DateRange';
import MenuIcon from '@mui/icons-material/Menu';
import EventIcon from '@mui/icons-material/Event';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import AddTaskIcon from '@mui/icons-material/AddTask';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function TemporaryDrawer({onSectionChange}: {onSectionChange: (section: string) => void}) {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        <ListSubheader>Tarefas</ListSubheader>
        {['Anual', 'Mensal', 'Semanal', 'Diária'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton onClick={() => {onSectionChange(text)}}>
              <ListItemIcon>
                { index === 0 && <EventAvailableIcon /> }
                { index === 1 && <CalendarMonthIcon /> }
                { index === 2 && <DateRangeIcon /> }
                { index === 3 && <EventIcon /> }
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />

      <List>
        <ListSubheader>Configurações</ListSubheader>
        {['Adicionar Tarefa', 'Perfil'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton onClick={() => console.log(text)}>
              <ListItemIcon>
                { index === 0 && <AddTaskIcon /> }
                { index === 1 && <AccountCircleIcon /> }
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)} startIcon={<MenuIcon />}  variant='outlined'>Open drawer</Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
