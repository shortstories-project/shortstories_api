const comment = (sequelize, DataTypes) => {
  const Comment = sequelize.define('comment', {
    body: {
      type: DataTypes.TEXT,
      validate: { notEmpty: true },
    },
  })

  Comment.associate = models => {
    Comment.belongsTo(models.User)
    Comment.belongsTo(models.Story)
  }

  return Comment
}

export default comment
