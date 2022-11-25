const express = require('express');
const viewsController = require('../controllers/viewsController');

const router = express.Router();

router.get('/', viewsController.getLandingPAge);
router.get('/courses', viewsController.getCourse);
router.get('/login', viewsController.getLoginForm);
router.get('/signup', viewsController.getSignInForm);
router.get('/newCourse', viewsController.createNewCourse);
router.get('/loanList', viewsController.getLoan);
router.get('/courseList', viewsController.getCoursesJSON);


module.exports = router;
