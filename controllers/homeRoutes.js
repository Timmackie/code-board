const router = require('express').Router();
<<<<<<< HEAD
const { User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
  try {
    const userData = await User.findAll({
      attributes: { exclude: ['password'] },
      order: [['name', 'ASC']],
    });

    const users = userData.map((project) => project.get({ plain: true }));

    res.render('homepage', {
      users,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

=======
const { User, Posts } = require('../models');
const withAuth = require('../utils/auth');

>>>>>>> develop
router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

<<<<<<< HEAD
=======

router.get('/', (req,res) => {
  res.redirect('/5')
})


router.get('/:numPosts', withAuth, async (req, res) => {
  try {
    const userPost = await Posts.findAll({
      include: [{ model: User, attributes: { exclude: ['password'] } }],
      limit: parseInt(req.params.numPosts),
      order: [[ 'id', 'DESC' ]]
    });

    const posts = userPost.map((project) => project.get({ plain: true }));
    const end = posts.length >= req.params.numPosts
    res.render('homepage', {
      posts,
      end,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err)
  }
});

>>>>>>> develop
module.exports = router;
