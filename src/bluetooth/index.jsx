import React, { useState } from "react";

export const BluetoothConnection = () => {
    const [device, setDevice] = useState(null);

    const connectToDevice = async () => {
      try {
        const device = await navigator.bluetooth.requestDevice({
          filters: [{ services: ["battery_service"] }]
        });
  
        setDevice(device);
      } catch (error) {
        console.error(error);
      }
    };


    return (
      <div>
        <button onClick={connectToDevice}>Connect to device</button>
        {device ? (
          <p>Connected to device: {device.name}</p>
        ) : (
          <p>Not connected to any device</p>
        )}
      </div>
    );
};

