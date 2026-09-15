let username = "    misterklinsmissestheweekend"
//remove all spaces, change the casing and get the first character
console.log(username.trim().toUpperCase().charAt(0));
//first the trim method runs and returns "misterklinsmissestheweekend"
//then the toUpperCase runs the results of the trim method and returns
// "MISTERKLINSMISSESTHEWEEKEND"
// then charAt(0) runs on that and returns "M"