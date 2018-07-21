import React from 'react';

const Nap = (props) => {
	return(
	<div className="nap">
		<h3>{props.children} </h3>
		<p>{props.description}</p>
		<button>Edit</button>
        <button onClick={props.onDelete}>Delete</button>
	</div>
		)
}

export default Nap;