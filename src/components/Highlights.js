export default function Highlights() {
  return (
    <section id="highlights">
      <h2>This week’s specials!</h2>
      <div className="specials-container" style={{ display: 'flex', overflowX: 'auto' }}>
        <div className="dish-card">
          <img src="/images/greek-salad.jpg" alt="Greek Salad" />
          <h3>Greek Salad</h3>
          <p>Crisp lettuce, feta cheese, olives, and a light dressing.</p>
          <p>$12.99</p>
        </div>
      </div>
      <button>Order Online</button>
    </section>
  );
}