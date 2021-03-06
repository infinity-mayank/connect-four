import React from 'react';
import Cell from "./Cell";

function Row(props) {
  const { row, play } = props;

  return (
    <tr>
      {row.map((cell, i) => <Cell key={i} value={cell} columnIndex={i} play={play} />)}
    </tr>
  );
}

export default Row;
