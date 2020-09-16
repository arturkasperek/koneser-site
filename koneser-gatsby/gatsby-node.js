/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const allRealizations = [{
  id: 'kuchnie',
  name: 'Meble Kuchenne',
  introImage: 'https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg',
  images: ["https://picsum.photos/id/0/5616/3744", "https://picsum.photos/id/1/5616/3744", "https://picsum.photos/id/10/2500/1667", "https://picsum.photos/id/100/2500/1656", "https://picsum.photos/id/1000/5626/3635", "https://picsum.photos/id/1001/5616/3744", "https://picsum.photos/id/1002/4312/2868", "https://picsum.photos/id/1003/1181/1772", "https://picsum.photos/id/1004/5616/3744", "https://picsum.photos/id/1005/5760/3840", "https://picsum.photos/id/1006/3000/2000", "https://picsum.photos/id/1008/5616/3744", "https://picsum.photos/id/1009/5000/7502", "https://picsum.photos/id/101/2621/1747", "https://picsum.photos/id/1010/5184/3456", "https://picsum.photos/id/1011/5472/3648", "https://picsum.photos/id/1012/3973/2639", "https://picsum.photos/id/1013/4256/2832", "https://picsum.photos/id/1014/6016/4000", "https://picsum.photos/id/1015/6000/4000", "https://picsum.photos/id/1016/3844/2563", "https://picsum.photos/id/1018/3914/2935", "https://picsum.photos/id/1019/5472/3648", "https://picsum.photos/id/102/4320/3240", "https://picsum.photos/id/1020/4288/2848", "https://picsum.photos/id/1021/2048/1206", "https://picsum.photos/id/1022/6000/3376", "https://picsum.photos/id/1023/3955/2094", "https://picsum.photos/id/1024/1920/1280", "https://picsum.photos/id/1025/4951/3301"],
}, {
  id: 'lazienki',
  name: 'Meble do Łazienki',
  introImage: 'https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg',
  images: ["https://picsum.photos/id/0/5616/3744", "https://picsum.photos/id/1/5616/3744", "https://picsum.photos/id/10/2500/1667", "https://picsum.photos/id/100/2500/1656", "https://picsum.photos/id/1000/5626/3635", "https://picsum.photos/id/1001/5616/3744", "https://picsum.photos/id/1002/4312/2868", "https://picsum.photos/id/1003/1181/1772", "https://picsum.photos/id/1004/5616/3744", "https://picsum.photos/id/1005/5760/3840", "https://picsum.photos/id/1006/3000/2000", "https://picsum.photos/id/1008/5616/3744", "https://picsum.photos/id/1009/5000/7502", "https://picsum.photos/id/101/2621/1747", "https://picsum.photos/id/1010/5184/3456", "https://picsum.photos/id/1011/5472/3648", "https://picsum.photos/id/1012/3973/2639", "https://picsum.photos/id/1013/4256/2832", "https://picsum.photos/id/1014/6016/4000", "https://picsum.photos/id/1015/6000/4000", "https://picsum.photos/id/1016/3844/2563", "https://picsum.photos/id/1018/3914/2935", "https://picsum.photos/id/1019/5472/3648", "https://picsum.photos/id/102/4320/3240", "https://picsum.photos/id/1020/4288/2848", "https://picsum.photos/id/1021/2048/1206", "https://picsum.photos/id/1022/6000/3376", "https://picsum.photos/id/1023/3955/2094", "https://picsum.photos/id/1024/1920/1280", "https://picsum.photos/id/1025/4951/3301"],
}, {
  id: 'salony',
  name: 'Salony',
  introImage: 'https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg',
  images: ["https://picsum.photos/id/0/5616/3744", "https://picsum.photos/id/1/5616/3744", "https://picsum.photos/id/10/2500/1667", "https://picsum.photos/id/100/2500/1656", "https://picsum.photos/id/1000/5626/3635", "https://picsum.photos/id/1001/5616/3744", "https://picsum.photos/id/1002/4312/2868", "https://picsum.photos/id/1003/1181/1772", "https://picsum.photos/id/1004/5616/3744", "https://picsum.photos/id/1005/5760/3840", "https://picsum.photos/id/1006/3000/2000", "https://picsum.photos/id/1008/5616/3744", "https://picsum.photos/id/1009/5000/7502", "https://picsum.photos/id/101/2621/1747", "https://picsum.photos/id/1010/5184/3456", "https://picsum.photos/id/1011/5472/3648", "https://picsum.photos/id/1012/3973/2639", "https://picsum.photos/id/1013/4256/2832", "https://picsum.photos/id/1014/6016/4000", "https://picsum.photos/id/1015/6000/4000", "https://picsum.photos/id/1016/3844/2563", "https://picsum.photos/id/1018/3914/2935", "https://picsum.photos/id/1019/5472/3648", "https://picsum.photos/id/102/4320/3240", "https://picsum.photos/id/1020/4288/2848", "https://picsum.photos/id/1021/2048/1206", "https://picsum.photos/id/1022/6000/3376", "https://picsum.photos/id/1023/3955/2094", "https://picsum.photos/id/1024/1920/1280", "https://picsum.photos/id/1025/4951/3301"],
}]

exports.createPages = ({ graphql, boundActionCreators }) => {
  const path = require(`path`);
  const { createPage } = boundActionCreators;

  allRealizations.forEach(i => {
    createPage({
      path: `realizacje/${i.id}`,
      component: path.resolve(`./src/templates/RealizationTemplate.js`),
      context: {
        id: i.id,
        name: i.name,
        introImage: i.introImage,
        images: i.images,
      },
    })
  });
};
