import React from 'react';

const Footer = () => {
  const currentYear = new Date ().getFullYear ();

  return (
    <footer
      style={{background: 'darkolivegreen', color: 'white'}}
      className="mt-16 bg-neutral-100 py-8 text-neutral-700"
    >
      <div className="container-footer">

        <div className="footer-e1">

          <p>
            Copyright SWT
          </p>
         


        </div>

        <div className="footer-e2">
          <p>About</p>
        </div>

        <div className="footer-e3">
          <p>Contact</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
