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

const Platforms = props => {
  return (
    <div>
      {platforms.map((item, index) => (
        <List key={index} dense>
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
