const router = require('express').Router();
const { User, Project } = require('../../models');


router.get('/', async (req, res) => {
    const projectData = await Project.getAll();
    const projects = projectData.map((project) => project.get({ plain: true }));
    res.render('homepage', {projects: projects});
})
module.exports = router;
