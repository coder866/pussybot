function routeGuard(to, from, next) {
    var isAuthenticated = false;
    //this is just an example. You will have to find a better or
    // centralised way to handle you localstorage data handling
    // if (localStorage.getItem("LoggedUser")) isAuthenticated = true;
    // else isAuthenticated = false;

    if (isAuthenticated) {
        next(); // allow to enter route
    } else {
        next("/login"); // go to '/login';
    }
}
