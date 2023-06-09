const router = require('express').Router();
const { User } = require('../../models');

//Post route to login
router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      
      res.json({ user: userData, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(400).json(err);
  }
});

//Post route to logout
router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

//Post route for creating new account
router.post('/register', async (req, res) => {
  try {
    const userData = await User.create(req.body);
    res.status(200).json(userData);

  } catch (err) {
    res.status(500).json(err)
  }
})

//GET route to get the logged-in user id
router.get('/id', (req, res) => {
  const userId = req.session.user_id;
  res.json( { userId });
});

module.exports = router;
