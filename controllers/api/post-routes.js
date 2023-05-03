const router = require('express').Router();
const { Post } = require('../../models');



router.post('/', async (req, res) => {
  try {
    const dbPostData = await Post.create({
      title: req.body.title,
      content: req.body.content,
      user_id: req.session.user_id,
    });
    res.status(200).json(dbPostData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});



router.put('/:id', async (req, res) => {
  try {
    const dbPostData = await Post.update({
      title: req.body.title,
      content: req.body.content,
      user_id: req.session.user_id,
    },
    {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(dbPostData);
  } catch (err) {
      res.status(500).json(err);
    };
});



router.delete('/:id', async (req, res) => {
  try {
  const dbPostData = await Post.destroy({
    where: {
      id: req.params.id
    }
  });
  res.status(200).json(dbPostData);
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;
