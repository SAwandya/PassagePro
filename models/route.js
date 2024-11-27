const Joi = require("joi");
const { default: mongoose } = require("mongoose");
const { route } = require("../routes/user");

const routeSchema = new mongoose.Schema({
  from: { type: String, required: true },
  to: { type: String, required: true },
  distance: { type: Number, required: true },
  estimatedTime: { type: String, required: true },
});

const Route = mongoose.model("Route", routeSchema);

function validateroute(route) {
  const schema = Joi.object({
    from: Joi.string().required(),
    to: Joi.string().required(),
    distance: Joi.number().required(),
    estimatedTime: Joi.string().required(),
  });

  var result = schema.validate(route);

  return result;
}

exports.Route = Route;
exports.validate = validateroute;
