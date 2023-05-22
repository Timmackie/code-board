const router = require('express').Router();
const { Posts, User } = require('../../models');
const withAuth = require('../../utils/auth');


//Create a new post 
router.post('/create', async (req, res) => {
    try {
        const postData = {
            ...req.body,
            user_id: req.session.user_id
        };

        const userPost = await Posts.create(postData);
        res.status(200).json(userPost);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/:id', async (req, res) => {
    //Find all posts by logged-in user ID
    try {
        const userID = req.session.user_id;
        const userPost = await Posts.findAll({
            where: { user_id: userID },
        });
        res.status(200).json(userPost);
    } catch (err) {
        res.status(500).json(err)
    }
});


router.delete('/:id', withAuth, async (req, res) => {
    // Delete one post by its `id` value
    try {
      const product = await Posts.destroy({
        where: {
            id: req.params.id,
        },
      });
      res.status(200).json(product);
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;