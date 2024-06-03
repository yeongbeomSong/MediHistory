import React, {useState, useEffect} from 'react';

function ServerConnect() {

  const result = session.getAttribute("result");

  return (
    <div>
        {result}
    </div>
  );
}

export default ServerConnect;