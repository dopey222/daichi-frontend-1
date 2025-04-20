import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('https://49f9-240b-10-22a1-6700-cb94-1bfc-e639-417a.ngrok-free.app/api/ask', { prompt });
      const reply = res.data.choices[0].message.content;
      setResponse(reply);
    } catch (error) {
      console.error(error);
      setResponse('エラーが発生しました');
    }
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      minHeight: '100vh',
      backgroundColor: '#f5f5f5',
      padding: '20px'
    }}>
      <h1 style={{ color: '#333' }}>Chat-Da-I-Chi</h1>
      <form onSubmit={handleSubmit} style={{ width: '100%', maxWidth: '600px' }}>
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          rows="4"
          placeholder="質問を入力してください..."
          style={{
            width: '100%',
            padding: '10px',
            fontSize: '16px',
            borderRadius: '8px',
            border: '1px solid #ccc',
            marginBottom: '10px',
            resize: 'none'
          }}
        />
        <button
          type="submit"
          style={{
            width: '100%',
            padding: '10px',
            fontSize: '16px',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer'
          }}
        >
          送信
        </button>
      </form>
      <div style={{
        width: '100%',
        maxWidth: '600px',
        backgroundColor: 'white',
        padding: '20px',
        marginTop: '20px',
        borderRadius: '8px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
      }}>
        <h2 style={{ color: '#333' }}>Da-I-Chiからの返答:</h2>
        <p style={{ whiteSpace: 'pre-wrap' }}>{response}</p>
      </div>
    </div>
  );
}

export default App;
