import React from 'react';
import './style.css';
import PropTypes from 'prop-types';

const Editor = ({value, reference, onUpdate}) => {
    return ( <textarea
        className="notepad"
        type="text"
        title="Editor"
        value={value}
        ref={reference}
        placeholder="write your markdown here"
        onChange={(e) => onUpdate(e.target.value)}
    /> );
}

Editor.propTypes = {
    reference: PropTypes.object.isRequired,
    value: PropTypes.string.isRequired,
    onUpdate: PropTypes.func.isRequired
}
 
export default Editor;