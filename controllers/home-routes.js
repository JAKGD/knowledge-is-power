
const router = require('express').Router();
const { User, Post, Comment } = require('../models');
const withAuth = require('../utils/auth'); 



router.get('/', async (req, res) => {
  try {
    const dbPostData = await Post.findAll({
      include: [{
          model: User,
          attributes: ['username'],
        }],
    });
    const posts = dbPostData.map((post) => post.get({ plain: true }));
    res.render('homepage', { posts, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});



router.get('/post/:id', async (req, res) => {
  try {
    const dbPostData = await Post.findByPk(req.params.id, {
      include: [{
        model: Comment,
        include: [{
          model: User,
        }]
      }, { model: User }],
    });
    const post = dbPostData.get({ plain: true });
    res.render('post', { post, loggedIn: req.session.loggedIn, commenter: "Commenter" });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});



router.get('/dashboard', withAuth, async (req, res) => { 
  try {
    const dbPostData = await Post.findAll({
      include: [{
        model: User,
        attributes: ['username'],
      }],
      where: {
        user_id: req.session.user_id,
      },
    });
    const posts = dbPostData.map((post) => post.get({ plain: true }));
    res.render('dashboard', { posts, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});



router.get('/dashboard/newpost', withAuth, (req, res) => { 
  res.render('newpost', { loggedIn: req.session.loggedIn });
});



router.get('/dashboard/post/:id', withAuth, async (req, res) => {  
  try {
    const dbPostData = await Post.findByPk(req.params.id, {});
    const post = dbPostData.get({ plain: true });
    res.render('editpost', { post, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});



router.get('/signup', (req, res) => {
  res.render('signup', { loggedIn: req.session.loggedIn });
});



router.get('/login', (req, res) => {
  res.render('login', { loggedIn: req.session.loggedIn });
});


module.exports = router;
