/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const allRealizations = [{
  id: 'kuchnie',
  name: 'Meble Kuchenne',
}, {
  id: 'lazienki',
  name: 'Meble Do Łazienki',
}, {
  id: 'szafy-garderoby',
  name: 'Szafy I Garderoby',
}, {
  id: 'inne',
  name: 'Inne',
}]

exports.createPages = async ({ graphql, actions, boundActionCreators }) => {
  const path = require(`path`);
  const { createRedirect } = actions;
  const { createPage } = boundActionCreators;

  const result = (await graphql(`
    query {
      allFile {
          edges {
            node {
              relativePath
              relativeDirectory
              childImageSharp {
                full: fluid(maxWidth: 2000, quality: 95) {
                  srcWebp
                  srcSetWebp
                  originalName
                  src
                  maxHeight: presentationHeight
                  maxWidth: presentationWidth
                }
                preview: fluid(maxWidth: 300, quality: 100) {
                  srcWebp
                  srcSetWebp
                  originalName
                  src
                  maxHeight: presentationHeight
                  maxWidth: presentationWidth
                }
              }
            }
          }
      }
    }
  `)).data.allFile.edges;
  const imagesMap = result.reduce((acc, file) => {
    if ( file.node.relativeDirectory === 'images/realizacje/kuchnie' ) {
      acc['kuchnie'].push(file.node.childImageSharp);
    }

    if ( file.node.relativeDirectory === 'images/realizacje/szafy-garderoby' ) {
      acc['szafy-garderoby'].push(file.node.childImageSharp);
    }

    if ( file.node.relativeDirectory === 'images/realizacje/lazienki' ) {
      acc['lazienki'].push(file.node.childImageSharp);
    }

    if ( file.node.relativeDirectory === 'images/realizacje/inne' ) {
      acc['inne'].push(file.node.childImageSharp);
    }

    if ( file.node.relativePath.startsWith('images/realizacje/kuchnie-main') ) {
      acc['kuchnie-main'] = file.node.childImageSharp.full.srcWebp;
    }

    if ( file.node.relativePath.startsWith('images/realizacje/lazienki-main') ) {
      acc['lazienki-main'] = file.node.childImageSharp.full.srcWebp;
    }

    if ( file.node.relativePath.startsWith('images/realizacje/szafy-garderoby-main') ) {
      acc['szafy-garderoby-main'] = file.node.childImageSharp.full.srcWebp;
    }

    if ( file.node.relativePath.startsWith('images/realizacje/inne-main') ) {
      acc['inne-main'] = file.node.childImageSharp.full.srcWebp;
    }

    return acc;
  }, {
    'kuchnie': [],
    'szafy-garderoby': [],
    'lazienki': [],
    'inne': [],
  });

  createRedirect({ fromPath: '/serwis/menu/id/1', toPath: '/', isPermanent: true });

  allRealizations.forEach(i => {
    createPage({
      path: `realizacje/${i.id}`,
      component: path.resolve(`./src/templates/RealizationTemplate.js`),
      context: {
        id: i.id,
        name: i.name,
        introImage: imagesMap[`${i.id}-main`],
        images: imagesMap[i.id],
      },
    })
  });
};
