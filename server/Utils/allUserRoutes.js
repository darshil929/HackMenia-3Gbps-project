exports.allUserRoutes = (app) => {
    app.use(
        "/user",
        require("../Users/Routes/coursesRoute"),
        require("../Users/Routes/jobRoute"),
        require("../Users/Routes/webinarRoute")
    );
    app.use("/auth",
        require("../routes")
    )
}