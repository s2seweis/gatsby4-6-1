import React from 'react';
// import Seo from "../components/Seo"
// import Seo from "../components/seo"

import Layout from '../components/layout';

const contact = () => {
  // const seo = {
  //     metaTitle: title,
  //     metaDescription: title,
  //   }

  return (
    <Layout>

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

      <section
        style={{width: '50%', margin: 'auto', marginTop: '100px'}}
        className="contact-page"
      >
        <article style={{margin: 'auto'}} className="contact-form">
          <h3 style={{textAlign: 'center'}}>
            This will coming soon. In Work.{' '}
          </h3>

        </article>

        <div
          class="ui breadcrumb"
          style={{
            display: 'flex',
            justifyContent: 'center',
            // marginBottom: '50px',
            marginTop: '50px',
            paddingBottom: '50px',
          }}
        >
          <a class="section" href="/news">News</a>

          <div class="divider">/</div>
          <a class="section" href="/about">About</a>

          <div class="divider">/</div>
          <a class="section " href="/index-all-recipes">Index</a>
          {/* class="active section " */}
        </div>

      </section>
    </Layout>
  );
};

export default contact;
