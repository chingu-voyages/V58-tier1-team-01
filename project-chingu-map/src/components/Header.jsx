import headerImage from '../assets/images/header-image.png';
export default function Header() {
  return (
    <header className="header">
      <article className="header-text">
        <h1>Discover the chingu world map</h1>
        <p>Explore and connect with fellow Chingu members across the globe. Our interactive map allows you to find and engage with the Chingu community in your area or anywhere in the world.</p>

        <div className="header-buttons">
             <button className="header-button-white">Get Started</button>
              <button className="header-button-black">Get Started</button>
         </div>
        </article>

        <article className="header-image">
          <img src={headerImage} alt="header-image" />
        </article>
    </header>
  )
}
