import React from 'react';
import './CuteButton.css';

export default function CuteButton({ children, ...props }) {
  return <button className="cute-button" {...props}>{children}</button>;
}