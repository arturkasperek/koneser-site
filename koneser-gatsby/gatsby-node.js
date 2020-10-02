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

exports.createPages = async ({ graphql, boundActionCreators }) => {
  const path = require(`path`);
  const { createPage } = boundActionCreators;

  const result = (await graphql(`
    query {
      allFile {
          edges {
            node {
              relativePath
              relativeDirectory
              childImageSharp {
                fluid(maxWidth: 2000, quality: 100) {
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
      acc['kuchnie'].push(file.node.childImageSharp.fluid);
    }

    if ( file.node.relativeDirectory === 'images/realizacje/szafy-garderoby' ) {
      acc['szafy-garderoby'].push(file.node.childImageSharp.fluid);
    }

    if ( file.node.relativeDirectory === 'images/realizacje/lazienki' ) {
      acc['lazienki'].push(file.node.childImageSharp.fluid);
    }

    if ( file.node.relativeDirectory === 'images/realizacje/inne' ) {
      acc['inne'].push(file.node.childImageSharp.fluid);
    }

    if ( file.node.relativePath.startsWith('images/showcase/kuchnie') ) {
      acc['kuchnie-main'] = file.node.childImageSharp.fluid.src;
    }

    if ( file.node.relativePath.startsWith('images/showcase/lazienki') ) {
      acc['lazienki-main'] = file.node.childImageSharp.fluid.src;
    }

    if ( file.node.relativePath.startsWith('images/showcase/szafy-garderoby') ) {
      acc['szafy-garderoby-main'] = file.node.childImageSharp.fluid.src;
    }

    if ( file.node.relativePath.startsWith('images/showcase/inne') ) {
      acc['inne-main'] = file.node.childImageSharp.fluid.src;
    }

    return acc;
  }, {
    'kuchnie': [],
    'szafy-garderoby': [],
    'lazienki': [],
    'inne': [],
  });

  console.log('imagesMap is', imagesMap)

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
