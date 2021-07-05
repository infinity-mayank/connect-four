import React from 'react';
import avatar1 from "../assets/avatar01.png";
import avatar2 from "../assets/avatar02.png";
import UserAvatar from "./UserAvatar";
import './cell.css';

function Cell(props) {
  const { value, columnIndex, play } = props;

  const renderCellContent = () => {
    if(!value) {
      return;
    }

    if(value === 1) {
      return <UserAvatar avatar={avatar1} userId={1} forGameCell={true} />
    }

    return <UserAvatar avatar={avatar2} userId={2} forGameCell={true} />
  }

  return (
    <td>
      <div className="cell" onClick={() => {play(columnIndex)}}>
        {
          renderCellContent()
        }
      </div>
    </td>
  );
}

export default Cell;
