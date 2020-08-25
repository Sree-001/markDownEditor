import React from 'react';
import './style.css';
import PropTypes from 'prop-types';

const Preview = ({ reference, title }) => {
	return <div className="preview-container" title={title} ref={reference} />;
};

Preview.propTypes = {
	reference: PropTypes.object.isRequired,
	title: PropTypes.string.isRequired
}

export default Preview;
