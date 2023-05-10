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

      <section style={{width:"50%", margin:"auto", marginTop:"100px"}} className="contact-page">
        <article className="contact-form">
          <h3>get in touch</h3>
          <form
            action="https://formsubmit.co/weissenborn.sebastian@gmail.com"
            method="POST"
          >
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="name"
                className="form-control"
              />
              <input type="hidden" name="_captcha" value="false" />
              <input
                type="hidden"
                name="_next"
                value="https://precious-conkies-b8586b.netlify.app/thankyou"
              />

              <input
                type="hidden"
                name="_subject"
                value="Message From My Portfolio!!!"
              />

              <input
                type="email"
                name="email"
                placeholder="email"
                className="form-control"
                required
              />
              <textarea
                name="message"
                rows="5"
                placeholder="message"
                className="form-control"
              />
            </div>
            <button
              style={{backgroundColor: 'lightblue'}}
              type="submit"
              className="submit-btn btn"
            >
              submit here
            </button>
          </form>
        </article>
      </section>
    </Layout>
  );
};

export default contact;