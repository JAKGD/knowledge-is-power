const router = require('express').Router();
const { User } = require('../../models');

router.post('/login', async (req, res) => {
  console.log(req.body, "request")
  try {
    const dbUserData = await User.findOne({
      where: {
        username: req.body.username,
      },
    });
    if (!dbUserData) {
      res.status(400).json({ message: 'Incorrect username. Please try again!' });
      return;
    }
    else {
      console.log("correctusername")
    }

    // Uncomment when we can add users via Signup
    // const validPassword = await dbUserData.checkPassword(req.body.password);
    // if (!validPassword) {
    //   res.status(400).json({ message: 'Incorrect password. Please try again!' });
    //   return;
    // }
    // else {
    //   console.log("validpassword")
    // }
    const userId = dbUserData.get({ plain: true }).id;
    req.session.save(() => {
      req.session.loggedIn = true; 
      req.session.user_id = userId; 
      res.status(200).json({ user: dbUserData, message: 'You are now logged in!' });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});


module.exports = router;
