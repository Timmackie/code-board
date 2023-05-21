const router = require('express').Router();
const { User, Posts } = require('../../models');


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

module.exports = router;