
const router = require('express').Router();
const { User, Post, Comment } = require('../models');
const withAuth = require('../utils/auth'); 



// router.get('/', async (req, res) => {
//   try {
//     const dbPostData = await Post.findAll({
//       include: [{
//           model: User,
//           attributes: ['username'],
//         }],
//     });
//     const posts = dbPostData.map((post) => post.get({ plain: true }));
//     res.render('homepage', { posts, loggedIn: req.session.loggedIn });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

router.get('/signup', (req, res) => {
  res.render('signup', { loggedIn: req.session.loggedIn });
});



router.get('/login', (req, res) => {
  res.render('login', { loggedIn: req.session.loggedIn });
});


module.exports = router;
