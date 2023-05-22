const router = require('express').Router();
const { User, Posts } = require('../models');
const withAuth = require('../utils/auth');

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});


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

module.exports = router;
