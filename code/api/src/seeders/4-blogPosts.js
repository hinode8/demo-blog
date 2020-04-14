'use strict';

const params = require('../config/params');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('blog_posts', [
      {
        title: 'NINJA Cafe',
        content: 'All clerks are disguised as barista',
        slug: 'cafe-doom',
        area: params.blogPost.area.namba.id,
        image: '',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Cafe DOOM',
        content: 'The cafe where you spend the last day of your life',
        slug: 'cafe-doom',
        area: params.blogPost.area.namba.id,
        image: '',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Cafe Socrates',
        content: 'All customers will be enlightened',
        slug: 'cafe-socrates',
        area: params.blogPost.area.yodoyabashi.id,
        image: '',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Cafe XXX',
        content: 'cafe for adults only',
        slug: 'cafe-xxx',
        area: params.blogPost.area.umeda.id,
        image: '',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('products', null, {});
  }
}
