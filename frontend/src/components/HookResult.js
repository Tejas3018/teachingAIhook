import React from 'react';

function HookResult({ hook }) {
  return (
    <div style={{ marginTop: '2rem', backgroundColor: '#f9f9f9', padding: '1rem', borderRadius: '8px' }}>
      <h2>📣 AI-Generated Hook:</h2>
      <p>{hook}</p>
    </div>
  );
}

export default HookResult;
