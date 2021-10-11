import { useStore } from 'effector-react';

import { block } from 'bem-cn';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';

import { useFeatureModel } from '../../context';

import './style.scss';

const b = block('clients-list');

function ClientsList() {
  const { clients$ } = useFeatureModel();
  const clients = useStore(clients$);

  if (!clients.length) {
    return null;
  }
  
  return (
    <div className={b()}>
      <List>
        <ListSubheader>
          Компании
        </ListSubheader>
        {clients.map(client => {
          return (
            <ListItem key={client.id} disablePadding>
              <ListItemButton>
                <ListItemText primary={client.name} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </div>
  );
}

export { ClientsList };
