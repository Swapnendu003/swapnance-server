const User = require('../models/UserSchema');

exports.addOrUpdateUser = async (req, res) => {
  try {
    const { name, totalIncome } = req.body;

    let user = await User.findOne({ name });
    if (!user) {
      user = new User({ name, totalIncome });
    } else {
      user.totalIncome = totalIncome;
    }

    await user.save();
    res.status(200).json({ message: 'User details added/updated successfully', user });
  } catch (error) {
    res.status(500).json({ message: 'Error adding/updating user details', error });
  }
};

// Get User Information
exports.getUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching user details', error });
  }
};
