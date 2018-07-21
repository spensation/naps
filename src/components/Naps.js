 import React from 'react';

const Naps = (props) => {
  console.log('inNaps', props)

  const onDelete = function () {
    props.onDelete(props.name);
  }

  const renderNaps = props.naps.map((nap, i) =>
      <div key={i} className="nap-card" >
        <div className="nap">       
          <h4>{nap.name}</h4>
          <p>{nap.description}</p>
          <button>Edit</button>
          <button onClick={props.onDelete}>Delete</button>
        </div>
        
      </div>
  );

  return (
    <div>
      {renderNaps}
    </div>
  )
}

export default Naps;

