import { errorHandler } from "../utils/error.js";
import bycryptjs from "bcryptjs";
import User from "../models/user.model.js";

export const userController = (req, res) => {
  res.json({
    message: "hehe",
  });
};

export const updateUser = async (req, res, next) => {
  if (req.user.id !== req.params.id)
    return next(errorHandler(401, "Only update your own account"));

  try {
    if (req.body.password) {
      req.body.password = bycryptjs.hashSync(req.body.password, 10);
    }
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          username: req.body.username,
          email: req.body.email,
          password: req.body.password,
          avatar: req.body.avatar,
        },
      },
      { new: true }
    );

    const { password, ...rest } = updatedUser._doc;

    res.status(200).json(rest);
  } catch (error) {
    next(error);
  }
};
