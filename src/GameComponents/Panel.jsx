import Character from './Character';
import Walls from './Walls';
import Food from './Food';
import panel from './GameComponentsCss/panel.module.css';
import VerticalWall from './VerticalWall';

function Panel() {
  return (
    <>
    <div className={panel.panel}>

      <Character />
      <Walls />
      <Walls />
      <VerticalWall />
      <Food />

    </div></>
    
  );
}

export default Panel;