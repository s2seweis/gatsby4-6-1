import React from 'react';

const Footer = () => {
  const currentYear = new Date ().getFullYear ();

  return (
    <footer
      style={{background: 'darkolivegreen', color: 'white'}}
      className="mt-16 bg-neutral-100 py-8 text-neutral-700"
    >
      <div
        // style={{display: 'flex', gap: '20%', justifyContent: 'center'}}
        className="container"
      >
        <p>
          Camiguin | Agoho
        </p>
        <p>Mitzi Falmarin</p>
      </div>
    </footer>
  );
};

export default Footer;
