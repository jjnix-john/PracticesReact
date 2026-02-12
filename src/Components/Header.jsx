import headercss from './ComponentsCss/header.module.css';
function Header() {
  return (
    <header className={headercss.header}>
      <h1 className={headercss.webName}>Website</h1>
      <div className={headercss.navItems}>
        <a href="#home">Home</a>
        <a href="#products">Products</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
        <a href="#games">Play a Game</a>
      </div>
      
    </header>
  );
}

export default Header;