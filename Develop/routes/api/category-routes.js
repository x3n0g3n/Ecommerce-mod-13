const router = require('express').Router(),
      { Category, Product } = require('../../models');
router.get('/', async (req, res) => {
  try {
    const categories = await Category.findAll({
      include: [Product],
    });
    res.json(categories);
  } 
  catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});
router.get('/:id', async (req, res) => {

  const categoryId = req.params.id;
  try {
    const category = await Category.findOne({
      where: { category_id: categoryId }, 
      include: [Product], 
    });
    if (!category) {
      return res.status(404).json({ message: 'Category not found' });
    }
    res.json(category);
  }
  catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  const { name } = req.body;
  try {
    const category = await Category.create({ category_name: name });
    res.status(200).json(category);
  } 
  catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});


router.put('/:id', async (req, res) => {
  const { name } = req.body,
        categoryId = req.params.id;
  try {
    await Category.update(
      { category_name: name },
      { where: { category_id: categoryId } }
    );
    const updatedCategory = await Category.findByPk(categoryId, 
      { include: Product }
    );
    if (!updatedCategory) return res.status(404).json({ message: 'Category ID not found in the database' });
    res.status(200).json(updatedCategory);
  }  
  catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  const categoryId = req.params.id;
  try {

    await Category.destroy(
      { where: { category_id: categoryId } } 
    );
    const updatedCategory = await Category.findByPk(categoryId, 
      { include: Product }
    );
    res.status(200).json({ message: 'Successfully deleted the category with the ID ' + categoryId });
  } 
  catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

module.exports = router;
