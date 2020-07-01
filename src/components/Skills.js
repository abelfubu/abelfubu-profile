import React from 'react';
import SkillItem from './SkillItem';
import { data } from './SkillsData';

const Skills = props => {
  return (
    <div>
      {data.map((item, index) => (
        <SkillItem
          key={index}
          image={item.image}
          number={item.number}
          title={item.title}
          sub={item.sub}
        />
      ))}
    </div>
  );
};

export default Skills;
