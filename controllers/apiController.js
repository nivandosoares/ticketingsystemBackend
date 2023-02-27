const ticket = require("../models/ticketModel");
//todo: list only classrooms

exports.list = function (req, res) {
  //show the recent first
  ticket
    .find({})
    .sort({ createdAt: -1 })
    .then(function (ticket) {
      res.send(ticket);
    });
};

//Insert data into database
exports.create = function (req, res, next) {
  ticket
    .create(req.body)
    .then(function (ticket) {

    })
    .then(function (ticket) {
      res.send("Ticket created successfully");
    })
    .catch(next);
};

//Update data in database
exports.update = function (req, res) {
  ticket
    .findByIdAndUpdate(
      {
        _id: req.params.id,
      },
      req.body
    )
    .then(function () {
      ticket
        .findOne({
          _id: req.params.id,
          $currentDate: {
            lastModified: true,
            "ticket.updated_at": { $type: "timestamp" },
            $set: {
              "ticket.hasSolved": "true",
            },
          },
        })
        .then(function (ticket) {
          res.send(ticket);
        })
        .catch(next);
    });
  res.send({
    type: "Ticket Updated by the Suppport team, then flagged as Solved",
  });
};

//Delete data from database
exports.delete = function (req, res, next) {
  ticket
    .findByIdAndRemove({ _id: req.params.id })
    .then(function (ticket) {
      res.send("Ticket deleted successfully");
    })
    .catch(next);
};
