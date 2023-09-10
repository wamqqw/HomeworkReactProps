import React, { useState, useEffect } from 'react';

function Clock() {
  const [currentTime, setCurrentTime] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
  });
  return (
    <div>
      <p>Current Time : {currentTime.toLocaleTimeString()}</p>
    </div>
  );
}
export default Clock;
