import React from 'react';
import './App.css';
import Medicine from './Medicine.js';
function App() {
  return (
    <div className='App'>
      {/* <Medicine></Medicine> */}
      <Medicine medicineName='Cebosh 400mg' sweetDish='Kheer' />
      <hr />
      <Medicine medicineName='Klariced 250mg' sweetDish='Jaleebi' />
      <hr />
      <Medicine medicineName='Leflox 250mg' sweetDish='Gajar ka Halwa' />
    </div>
  );
}
export default App;