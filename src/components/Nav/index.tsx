import { LanguagePicker } from './LanguagePicker';
import React from 'react';

export const Nav = () => (
    <div style={{
      position: "relative",
      width: "100%",
      height: "8vh",
      display: "flex",
      justifyContent: "end"
    }}>
      <div style={{ backgroundColor: "#000000", width: "100%", height: "100%", position: 'absolute', opacity: "0.5", zIndex: "0" }}/>
      <div style={{ zIndex: 1 }}>
        <LanguagePicker />
      </div>
    </div>
);
