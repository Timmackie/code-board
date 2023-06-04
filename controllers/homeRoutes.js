const router = require('express').Router();
const { User, Posts } = require('../models');
const withAuth = require('../utils/auth');

// Displays login page, redirects to homepage if user is already logged in
router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

// Default route to homepage and generates 5 posts
router.get('/', (req,res) => {
  res.redirect('/5')
})

// Route for displaying a certain number of posts on the homepage, grabs user posts with connected user info from database
router.get('/:numPosts', withAuth, async (req, res) => {
  try {
    const userPost = await Posts.findAll({
      include: [{ model: User, attributes: { exclude: ['password'] } }],
      limit: parseInt(req.params.numPosts),
      order: [[ 'id', 'DESC' ]]
    });

    // Extract plain data from the retrieved posts
    const posts = userPost.map((project) => project.get({ plain: true }));
     // Check if there are more posts than the specified number, to determine if there are more posts to load
    const end = posts.length >= req.params.numPosts

    // Render the homepage template with the retrieved posts and other variables
    res.render('homepage', {
      posts,
      end,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err)
  }
});
// Exports router
module.exports = router;
