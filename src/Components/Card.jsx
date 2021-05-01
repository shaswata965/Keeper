import React from "react";
// import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

function Card(props) {
    return (
        <div className="card">
            <h3>
                {props.title}
            </h3>
            <p className="card-content">
                {props.content}
            </p>

            <button className="delete"
                onClick=
                { () => { return (props.onClick(props.id)); } }
                aria-label="delete">
                <DeleteIcon/>
            </button>
        </div>

    );
}

export default Card;
