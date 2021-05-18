import React from 'react';
import './day.scss';

const listOptions2 = () => {
    let options1 = [];
    for (let i = 0; i < 12; i++) {
      options1.push({
        name: `The anime a1 ${i + 1}`,
        id: i + 1,
      });
    }
    return options1;
  };

day.propTypes = {};

function day() {
  var color
    return (
        <div className="day">
        {listOptions2().map((item, index) => {
          if(index % 2 == 0){
             color ="black"
          }
         else{
            color ="unset"
          }
           return (
          <div className="day__item" style={{backgroundColor:color}} key={index}>
            <div className="day__avt"></div>
            {item.name}
          </div>
        )})}
        </div>
    );
}

export default day;