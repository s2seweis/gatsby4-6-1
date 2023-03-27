// import React from 'react';
// import {useStaticQuery, graphql} from 'gatsby';

// import Layout from '../components/layout';
// import Seo from '../components/seo';

// // import BlocksRenderer from "../components/blocks-renderer"
// import Headings from '../components/headings';

// import Infotext from '../components/info';

// import {GatsbyImage, getImage} from 'gatsby-plugin-image';

// const Info = () => {
//   //   const { strapiAbout } = useStaticQuery(graphql`
//   //     query {
//   //       strapiAbout {
//   //         title
//   //         blocks {
//   //           ...Blocks
//   //         }
//   //       }
//   //     }
//   //   `)

//   const {strapiInfo} = useStaticQuery (graphql`
// query {
//   strapiInfo {
//     title
//     description
//     image {
//       localFile {
//         childImageSharp {
//           gatsbyImageData
//         }
//       }
//     }
//   }
// }
// `);

//   const {title, image} = strapiInfo;
//   console.log(title);
//   console.log(image);

//   const seo = {
//     metaTitle: title,
//     metaDescription: title,
//   };

//   return (

//     <Layout>
//       <Seo seo={seo} />
//       <Headings title={strapiInfo.title} />


//       {/* <Infotext title={strapiInfo.title} ></Infotext> */}


//       <GatsbyImage
//         image={getImage (image.localFile)}
//         alt={image.alternativeText}
//       />

//     </Layout>
//   );
// };

// export default Info;
