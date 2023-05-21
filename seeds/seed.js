const sequelize = require('../config/connection');
<<<<<<< HEAD
const { User } = require('../models');

const userData = require('./userData.json');
=======
const { User, Posts } = require('../models');

const userData = require('./userData-seeds.json');
const postsData = require('./posts-seeds.json')
>>>>>>> develop

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

<<<<<<< HEAD
  await User.bulkCreate(userData, {
=======
  const users = await User.bulkCreate(userData, {
>>>>>>> develop
    individualHooks: true,
    returning: true,
  });

<<<<<<< HEAD
=======
  const posts = await Posts.bulkCreate(postsData);

>>>>>>> develop
  process.exit(0);
};

seedDatabase();
