import React from 'react';
import './all.scss';

const listOptions1 = () => {
    let options1 = [];
    for (let i = 0; i < 12; i++) {
      options1.push({
        name: `The anime a ${i + 1}`,
        id: i + 1,
      });
    }
    return options1;
  };

all.propTypes = {};

function all() {
    return (
        <div className="all">
        {listOptions1().map((item, index) => {
           return (
          <div className="all__item" key={index}>
            <div className="all__avt"></div>
            {item.name}
          </div>
        )})}
        </div>
    );
}

export default all;