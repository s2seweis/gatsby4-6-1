require ('dotenv').config ({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  plugins: [
    'gatsby-plugin-gatsby-cloud',
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-source-strapi',
      options: {
        // apiURL:  "http://localhost:1337",

        apiURL: 'https://strapi4-8-2.herokuapp.com',

        //delpoyed
        accessToken: '9a09cc791f40d7aaed5a6e4536b2c7fac9dc6b04521a59fb34b342ef7c1bc8d38664d64b888e78db09fea3ccd46c1eebd984d27929a7ef1ae1f3de03b83789c64e4cfd26bcff79375e6c32a4445ce0ae1f024b5c03f0c1826111c888b7fd734405f6c46a2a617fd522e44583b744f8b7bc9bdd4aa3dfd7a969144c23023d1ddb',

        //local
        // accessToken: "2cabf5a0efa03b8d516063e98aa4e49f700aedad0aa07f518f74f46ceae4ee6c9baef8473a9ba235a52afba4b8da806dd39a8e265b2424337a24eaae153939b281ddf035e5b1d129678adee72c843533fc204f1e2c0e422da1531df52d2c2ac12912a915b1f54a8f2ff4600d269571fc97acd965cbce8c40e9d5551f07a4abcf",
        collectionTypes: [
          {
            singularName: 'article',
            queryParams: {
              publicationState: process.env.GATSBY_IS_PREVIEW === 'true'
                ? 'preview'
                : 'live',
              populate: {
                cover: '*',
                blocks: {
                  populate: '*',
                },
              },
            },
          },
          {
            singularName: 'author',
          },
          {
            singularName: 'category',
          },
        ],
        singleTypes: [
          {
            singularName: 'about',
            queryParams: {
              populate: {
                blocks: {
                  populate: '*',
                },
              },
            },
          },
          {
            singularName: 'global',
            queryParams: {
              populate: {
                favicon: '*',
                defaultSeo: {
                  populate: '*',
                },
              },
            },
          },

          `info`,
        ],
      },
    },
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-transformer-remark',
  ],
};
