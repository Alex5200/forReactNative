import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import WindowIcon from '@mui/icons-material/Window';
function setKabinet() {
  return <TextField id="filled-basic" label="Filled" variant="filled" />;
}
export default function FixedBottomNavigation() {
  const [showList, setShowList] = React.useState(false);
  const [showIcon, setShowIcon] = React.useState(false);

  const onClickTrue = () => {
    setShowList(true);
    setShowIcon(false);
  };
  const onClickFalse = () => {
    setShowList(false);
    setShowIcon(true);
  };

  return (
    <Box sx={{ pb: 7 }}>
      <CssBaseline />
      {showList ? (
        <Box sx={{ paddingTop: 2, mx: 'auto', justifyContent: 'center' }}>
          {setKabinet()}{' '}
        </Box>
      ) : null}
      <List>
        {showIcon
          ? messageExamples.map(({ primary, secondary, person }, index) => (
              <ListItem button key={index + person}>
                <ListItemAvatar>{person}</ListItemAvatar>
                <ListItemText primary={primary} secondary={secondary} />
              </ListItem>
            ))
          : null}
      </List>
      <Paper
        sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}
        elevation={2}
      >
        <BottomNavigation
          showLabels
          onChange={(event, newValue) => {
            if (newValue == 0) {
            }
          }}
        >
          <BottomNavigationAction
            label="Выбор Кабинета"
            onClick={onClickTrue}
            icon={<HomeIcon />}
          />
          <BottomNavigationAction
            label="Кабинет"
            onClick={onClickFalse}
            icon={<MeetingRoomIcon />}
          />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}

const messageExamples = [
  {
    primary: 'Door',
    secondary: 'on',
    person: <MeetingRoomIcon color="info" />,
  },
  {
    primary: 'Window 1',
    secondary: 'on',
    person: <WindowIcon color="info" />,
  },
  {
    primary: 'Window 2',
    secondary: 'on',
    person: <WindowIcon color="info" />,
  },
  {
    primary: 'Window 3',
    secondary: 'off',
    person: <WindowIcon color="info" />,
  },
  {
    primary: 'Window 4',
    secondary: 'off',
    person: <WindowIcon color="info" />,
  },
];
