const Joi = require("joi");
const { default: mongoose } = require("mongoose");
const { route } = require("../routes/user");

const vehicleSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 3,
    maxlength: 50,
  },
  amenities: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50,
  },
  info: {
    type: String,
  },
  licenseNo: {
    type: String,
  },
  vehicleNo: {
    type: String,
  },
  vehicleType: {
    type: String,
  },
  capacity: {
    type: String,
  },
  route: {
    type: String,
  },

});

const Vehicle = mongoose.model("Vehicle", vehicleSchema);

function validateVehicle(vehicle) {
  const schema = Joi.object({
    name: Joi.string().required().min(3).max(50),
    amenities: Joi.string().required().min(3).max(50),
    info: Joi.string(),
    licenseNo: Joi.string(),
    vehicleNo: Joi.string(),
    vehicleType: Joi.string(),
    capacity: Joi.string(),
    route: Joi.string(),
  });

  var result = schema.validate(user);

  return result;
}

exports.Vehicle = Vehicle;
exports.validate = validateVehicle;
