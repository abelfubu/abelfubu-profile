import React from 'react';
import { platforms } from './SkillsData';
import {
  List,
  ListItem,
  Link,
  ListItemText,
  ListItemAvatar,
  Avatar,
} from '@material-ui/core';
import EmailIcon from '@material-ui/icons/Email';

const Platforms = props => {
  return (
    <div>
      {platforms.map((item, index) => (
        <List dense>
          <ListItem>
            <ListItemAvatar>
              <Avatar alt={item.title} src={item.image} />
            </ListItemAvatar>
            <Link href={item.link} target='_blank' rel='noreferrer'>
              <ListItemText primary={item.title} />
            </Link>
          </ListItem>
        </List>
      ))}
    </div>
  );
};

export default Platforms;
