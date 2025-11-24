import React, { useState } from 'react';

const XLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !password) {
      setMessage('Invalid username or password');
      return;
    }

    if (username === 'user' && password === 'password') {
      setMessage('Welcome, user!');
    } else {
      setMessage('Invalid username or password');
    }
  };

  return (
    <div
      style={{
        maxWidth: 360,
        margin: '40px auto',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <form onSubmit={handleSubmit} noValidate>
        {/* Username Field */}
        <div style={{ marginBottom: 12 }}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            aria-required="true"
            style={{ width: '100%', padding: 8, boxSizing: 'border-box' }}
          />
        </div>

        {/* Password Field */}
        <div style={{ marginBottom: 12 }}>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            aria-required="true"
            style={{ width: '100%', padding: 8, boxSizing: 'border-box' }}
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          style={{ padding: '8px 16px', cursor: 'pointer' }}
        >
          Submit
        </button>
      </form>

      {/* Login message */}
      {message && <p style={{ marginTop: 16, fontWeight: 600 }}>{message}</p>}
    </div>
  );
};

export default XLogin;
