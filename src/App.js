import Content from './content';
import { Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    <div style={{background:'#0f1624',maxHeight:"100%",}} className='font-mono'>
      <Content style={{width: "100%", display: "flex", justifyContent: "center",height:"10px",}} ></Content>
    </div>
  );
}
