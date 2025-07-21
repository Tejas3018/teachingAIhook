import axios from 'axios';
import { useState } from 'react';
import HookResult from './components/HookResult';

function App() {
  const [topic, setTopic] = useState('');
  const [hook, setHook] = useState('');
  const [loading, setLoading] = useState(false);

  const generateHook = async () => {
    try {
      setLoading(true);
      const response = await axios.post('http://localhost:5000/api/hook', { topic });
      setHook(response.data.hook);
    } catch (error) {
      console.error('Error:', error);
      setHook('❌ AI failed to generate hook');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App" style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>🎓 AI Teaching Hook Generator</h1>
      <input
        type="text"
        placeholder="Enter topic (e.g. Photosynthesis)"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        style={{ padding: '10px', width: '300px', marginRight: '10px' }}
      />
      <button onClick={generateHook} style={{ padding: '10px 20px' }}>
        Generate Hook
      </button>

      {loading ? (
        <p>⏳ Generating hook...</p>
      ) : hook && (
        <HookResult hook={hook} />
      )}
    </div>
  );
}

export default App;
