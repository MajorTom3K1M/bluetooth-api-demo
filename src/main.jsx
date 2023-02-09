import React from "react";
import { createRoot } from 'react-dom/client';
import { BluetoothConnection } from './bluetooth';

const App = () => {
  return <BluetoothConnection/>;
};

const domNode = document.getElementById('app');
const root = createRoot(domNode);
root.render(<App />);