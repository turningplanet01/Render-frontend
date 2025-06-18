import React, { useEffect, useState } from 'react';

function App() {
  const [msg, setMsg] = useState('');

  useEffect(() => {
    fetch('https://hello-render-rv1z.onrender.com/api/hello')

      .then(res => res.json())
      .then(data => setMsg(data.message));
  }, []);

  return <div>{msg}</div>;
}

export default App;
