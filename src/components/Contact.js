import React from 'react';
import { ListItem, ListItemIcon, List, ListItemText } from '@material-ui/core';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';

const Contact = props => {
  return (
    <div style={{ padding: '20px 0' }}>
      <List dense>
        <ListItem>
          <ListItemIcon>
            <EmailIcon color='primary' />
          </ListItemIcon>
          <ListItemText primary={`Email: ${props.email}`} />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <PhoneIcon color='primary' />
          </ListItemIcon>
          <ListItemText primary={`Tel: ${props.tel}`} />
        </ListItem>
      </List>
    </div>
  );
};

export default Contact;
