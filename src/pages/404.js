import React from 'react';
import Layout from '../components/Layout/layout';

const contact = () => {

  return (
    <Layout>

      <section
        style={{width: '50%', margin: 'auto', marginTop: '100px'}}
        className="contact-page"
      >
        <article className="contact-form">
          <div style={{marginTop: '20px'}}>
            <a
              style={{
                fontSize: '1.3rem',
                padding: '5px',
                marginLeft: '20px',
              }}
              href="javascript:history.back()"
            >
              <button type="button" class="btn btn-link">Go Back</button>
            </a>
          </div>
          <h3>Thats a dead End!!!</h3>
        </article>
      </section>
    </Layout>
  );
};

export default contact;