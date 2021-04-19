const db = require("../models");

require("mongoose");




module.exports = (app) => {

    app.get("/api/workouts/range", (req, res) => {
        db.Workout.find({}).limit(7).then(data => res.json(data))
            .catch(err => {
                console.log("error", err);
                res.json(err);
            });

    });

    app.get("/api/workouts", (req, res) => {
        db.Workout.find({}).then(data => res.json(data))
            .catch(err => {
                console.log("error", err);
                res.json(err);
            });
    });

    app.get("*", (req, res) => {
        res.redirect("/");
    });
};