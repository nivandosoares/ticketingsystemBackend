const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//create a new schema

const ticketSchema = new Schema({
  ticketNumber: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  created_at: {
    type: String,
    required: true,
  },
  updated_at: {
    type: String,
    required: true,
  },
  classroom: {
    classroomNumber: {
      type: Number,
      required: true,
    },
    teacher: {
      type: String,
      required: true,
    },
    discipline: {
      type: String,
      required: true,
    },
    start: {
      type: String,
      required: true,
    },
    end: {
      type: String,
      required: true,
    },
  },

  device: {
    type: String,
    required: true,
  },
  hasSolved: {
    type: Boolean,
    required: true,
  },
});

const Ticket = mongoose.model("Ticket", ticketSchema);
module.exports = Ticket;
