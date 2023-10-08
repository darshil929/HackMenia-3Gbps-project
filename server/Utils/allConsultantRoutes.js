exports.allConsultantRoutes = (app) => {
    app.use(
        "/consultant",
        require("../Consultant/Routes/coursesRoute")
    );
}