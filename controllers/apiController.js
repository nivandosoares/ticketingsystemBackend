const ticket = require("../models/ticketModel");
//todo: list only classrooms

exports.list = function (req, res) {
  ticket.find({}).then(function (ticket) {
    res.send(ticket);
  });
};

//Insert data into database
exports.create = function (req, res, next) {
  ticket
    .create(req.body)
    .then(function (ticket) {
      res.send("Ticket created! successfully");
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
        .findOne({ _id: req.params.id })
        .then(function (ticket) {
          res.send(ticket);
        })
        .catch(next);
    });
  res.send({ type: "Ticket Updated!" });
};

//Delete data from database
exports.delete = function (req, res, next) {
  ticket
    .findByIdAndRemove({ _id: req.params.id })
    .then(function (ticket) {
      res.send("Ticket deleted! successfully");
    })
    .catch(next);
};
