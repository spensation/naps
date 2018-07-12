import React from 'react';
import { Link } from 'react-router-dom';

const Naps = (props) => {
  console.log('InNaps', props)
  

  const renderNaps = props.naps.map((nap, i) =>
      <div key={i} className="nap-card" >
        <div className="nap">
          <Link className="view-nap-link" to={`/naps/${nap.id}`}>
            <h4>{nap.name}</h4>
            <p>{nap.description}</p>
          </Link>
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

