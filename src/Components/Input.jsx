import React, {useState} from "react";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Zoom from '@material-ui/core/Zoom';

function Input(props) {
    const [extend,
        setExtend] = useState(false);

    function handleClick() {
        setExtend(true);
    }

    return (
        <div className="note">
            <form className="button">{extend && <input
                    className="title"
                    type="text"
                    onChange={props.onTitle}
                    placeholder="Title"
                    value={props.title}/>}

                <textarea
                    className="content"
                    type="text"
                    onClick={handleClick}
                    onChange={props.onContent}
                    placeholder="Take A Note"
                    rows="1"
                    value={props.content}/>
                <Zoom in={extend}>
                    <Fab className="Fab" onClick={props.onClick}>
                        <AddIcon/>
                    </Fab>
                </Zoom>
            </form>
        </div>
    );
}

export default Input;
