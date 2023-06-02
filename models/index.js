const User = require('./User');
const Posts = require('./Posts');
// Establishes connection with user and posts models
User.hasMany(Posts, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
  });
  
  // Define the inverse association where a post belongs to a user
  Posts.belongsTo(User, {
    foreignKey: 'user_id'
  });

  // Export the User and Posts models together
module.exports = { User, Posts };
