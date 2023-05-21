const User = require('./User');
<<<<<<< HEAD

module.exports = { User };
=======
const Posts = require('./Posts');

User.hasMany(Posts, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
  });
  
  Posts.belongsTo(User, {
    foreignKey: 'user_id'
  });

module.exports = { User, Posts };
>>>>>>> develop
