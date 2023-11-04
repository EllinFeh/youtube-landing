import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './components/navbar/Navbar';
import Watch from './components/watch/Watch';
import Playlist from './components/playlist/Playlist';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<>
  <Navbar />
  <Watch />
</>
);

