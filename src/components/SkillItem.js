import React from 'react';
import {
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Slider,
} from '@material-ui/core';

const SkillItem = props => {
  return (
    <div>
      <List dense>
        <ListItem>
          <ListItemAvatar>
            <Avatar src={props.image} />
          </ListItemAvatar>
          <ListItemText primary={props.title} secondary={props.sub} />
        </ListItem>
        <Slider min={0} max={100} value={props.number} />
      </List>
    </div>
  );
};

export default SkillItem;
