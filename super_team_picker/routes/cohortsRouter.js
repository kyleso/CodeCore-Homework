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
	const formData = req.query
	
	res.locals.formData = formData;

	knex('cohorts')
		.where('id', id)
		.first()
		.then(cohort => {
      if ( cohort ) {
        res.render('cohorts/show', { cohort: cohort });
      } else {
        res.redirect('/cohorts')
      }
		});
});

router.delete('/:id', (req, res) => {
	knex('cohorts')
		.where('id', req.params.id)
		.del()
		.then(() => {
			res.redirect('/cohorts');
		});
});

router.get('/:id/edit', (req, res) => {
	knex('cohorts')
		.where('id', req.params.id)
		.first()
		.then(cohort => {
			res.render('cohorts/edit', { cohort: cohort });
		});
});

router.patch('/:id', (req, res) => {
	const updatedCohort = {
    imageURL: req.body.imageURL,
    name: req.body.name,
    members: req.body.members
	};
	knex('cohorts')
		.where('id', req.params.id)
		.update(updatedCohort)
		.then(() => {
			res.redirect(`/cohorts/${req.params.id}`);
		});
});

// router.get('/:id', (req, res) => {
	// const formData = req.query
	// console.log(formData)
	// const pickMethod = formData.pickMethod;
	// const quantity = formData.quantity;

	// res.locals.formData = formData;

	// if (pickMethod && quantity) {
	// 	res.render('cohorts/show', {
	// 		pickMethod: pickMethod,
	// 		quantity: quantity
	// 	})
	// }
// })

module.exports = router;
