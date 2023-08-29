const User = require('../models/user');



exports.getUserProfile = async (req, res) => {
    try {
        const userId = req.user.id;
        const user = await User.findById(userId);
        res.json({ user });
    } catch (error) {
        res.status(500).json({ error: 'An error occurred' });
    }
};
