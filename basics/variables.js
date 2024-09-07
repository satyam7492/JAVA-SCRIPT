const accountId = 12345
let accountEmail = "admin"
var password = "11111"
city = "alld."

/*
Prefer not to use var.
Because of issue in block scope and functional scope.
*/


accountEmail= "User"
password = "22222"
city = "srj"
let accountState;


console.table([accountEmail, accountId, password, city, accountState]);
 // nothing is changed don't be worry about anything //
