module.exports = function () {
    let routes = {};

    routes.get = function (req, res) {
        res.status(200).send('index.html');
    };

    return routes;
};