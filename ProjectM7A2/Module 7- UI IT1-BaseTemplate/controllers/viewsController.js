const axios = require('axios');
const courses = require('./../dev-data/data/courses.json');

exports.getLandingPAge = async (req, res) => {
  res.status(200).render('overview', {
    title: `Over View`
  
  });
};

exports.getLoginForm = (req, res) => {
  res.status(200).render('login', {
    title: 'Log into your account'
  });
};

exports.getSignInForm = (req, res) => {
  res.status(200).render('newUser', {
    title: 'Sign in New User'
  });
};

exports.getCourse = async (req, res) => {
  res.status(200).render('courses', {
    title: `Get Course`
  });
};

exports.createNewCourse = async (req, res) => {
  res.status(200).render('newCourse', {
    title: `Create New Course`
  });
};

// adding the loan list for the views 
exports.getLoan = async (req, res) => {
  const query = await axios.get('http://localhost:3000/api/v1/loans')
  console.log(query.data.data.loans)
  res.status(200).render('loanlist', {
    title: `Get loanlists`,
    "loans": query.data.data.loans
  });
};


exports.getCoursesJSON = async (req, res) => {
  res.status(200).render('allCourses', {
    title: `Get courses from JSON`,
    "courses": courses
  });
};



