export default function Footer() {
  return (
    <footer style={{ background: '#333', color: '#fff', padding: '2rem' }}>
      <img src="/images/logo.png" alt="Little Lemon Logo" />
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#menu">Menu</a></li>
        </ul>
      </nav>
      <div className="contact">
        <p>123 Main Street, Chicago</p>
        <p>(555) 555-5555</p>
      </div>
      <div className="social">
        <a href="#">Facebook</a> | <a href="#">Instagram</a>
      </div>
    </footer>
  );
}