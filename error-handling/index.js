module.exports = (app) => {
    app.use((req, res, next) => {
        res.status(404).json({ message: "cikmaz yol...." })
    })
}