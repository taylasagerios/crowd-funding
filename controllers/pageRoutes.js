const router = require('express').Router();
const { User, Project } = require('../models');
const {areAuth, withAuth} = require('../utils/auth');


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

router.get('/login', areAuth , async (req, res) => {
    res.render('login');
})

router.get('/profle', withAuth, async (req, res) => {
    
})

module.exports = router;