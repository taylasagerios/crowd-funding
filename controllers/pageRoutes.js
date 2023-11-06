const router = require('express').Router();
const { User, Project } = require('../models');


router.get('/', async (req, res) => {
    const projectData = await Project.getAll();
    const projects = projectData.map((project) => project.get({ plain: true }));
    res.render('homepage', {projects: projects});
})

router.get('project/:id', async (req, res) => {
    const projectData = await Project.findByPK({
        where: {
            id: req.params.id
        }
    })
    res.render('project', projectData);
});

router.get('login', async (req, res) => {
    res.render('login');
})

module.exports = router;