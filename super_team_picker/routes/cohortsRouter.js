const express = require("express");
const router = express.Router();
const knex = require("../db/client");

router.get("/", (req, res) => {
  knex("cohorts")
    .orderBy("createAt", "desc")
    .then(cohorts => {
      res.render("cohorts/index", { cohorts: cohorts });
    });
});

router.get("/new", (req, res) => {
  res.render("cohorts/new");
});

router.post("/", (req, res) => {
  const newCohort = req.body;
  knex("cohorts")
    .insert(newCohort)
    .returning("*")
    .then(cohorts => {
			const [cohort] = cohorts;
			res.redirect(`/cohorts/${cohort.id}`);
		});
});

router.get('/:id', (req, res) => {
	const id = req.params.id;
	knex('cohorts')
		.where('id', id)
		.first()
		.then(cohort => {
			res.render('cohorts/show', { cohort: cohort });
		});
});

module.exports = router;
