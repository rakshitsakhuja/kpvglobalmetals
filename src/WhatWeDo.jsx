const metals = [
  {
    name: 'Copper',
    img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=100&q=80',
    desc: 'Copper scrap and ingots for electrical, construction, and industrial applications.'
  },
  {
    name: 'Aluminum',
    img: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=100&q=80',
    desc: 'Aluminum scrap and ingots, lightweight and corrosion-resistant.'
  },
  {
    name: 'Zinc',
    img: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=100&q=80',
    desc: 'Zinc scrap and ingots for galvanizing and alloy production.'
  },
  {
    name: 'Other Non-Ferrous Metals',
    img: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=100&q=80',
    desc: 'We also supply lead, nickel, tin, and more.'
  }
];

function WhatWeDo() {
  return (
    <section>
      <h1>What We Do</h1>
      <p>
        KPV Global Metals Inc. specializes in the export of non-ferrous metals worldwide. We source, process, and deliver metals such as copper, aluminum, zinc, and more, ensuring quality and timely delivery to our global partners.
      </p>
      <div className="metals-list">
        {metals.map((metal) => (
          <div className="metal-card" key={metal.name}>
            <img src={metal.img} alt={metal.name} />
            <h3>{metal.name}</h3>
            <p>{metal.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhatWeDo; 