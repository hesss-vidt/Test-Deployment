exports.dashboard = (req, res) => {
    res.json({
        message: "Selamat datang di Dashboard",
        user: req.user
    });
};