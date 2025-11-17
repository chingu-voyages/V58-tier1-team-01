import Location from '../assets/images/Location.svg';
export default function Nav() {
  return (
    <nav className='navbar'>
      <div className='logo'>
        <img src={Location} alt="Location" />
        <span>Chingu Map</span>
      </div>
      <div className='links'>
        <a href="#home">Home</a>
        <a href="#about">Map</a>
        <a href="#contact">List</a>
      </div>
      <div className='date'>
        <button>Nov 12, 2025</button>
      </div>
    </nav>
  )
}
