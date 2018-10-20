//
// // test adding user not from API
// var new_user = new User();
// new_user.userId = 0;
// new_user.name = 'Alexander';
// new_user.age = 18;
// new_user.save(err => {
//     if (err) console.log("error on write to database");
//     console.log("write to db success");
// });
// // Test find user not from API
// User.find((err, data) => {
//     if (err) console.log("error on req to database");
//     console.log("req to db success" + data);
// });