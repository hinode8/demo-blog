'use strict'

module.exports = function(sequelize, DataTypes) {
  let BlogPost = sequelize.define('blog_post', {
    title: {
      type: DataTypes.STRING
    },
    content: {
      type: DataTypes.TEXT
    },
    slug: {
      type: DataTypes.STRING
    },
    area: {
      type: DataTypes.INTEGER
    },
    image: {
      type: DataTypes.TEXT
    }
  })

  return BlogPost
}