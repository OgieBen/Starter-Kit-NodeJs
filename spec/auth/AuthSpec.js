// describe("Auth", () => {

//     const Auth = require('../../app/dist/app/prod/auth/Auth');
//     const DBHelper = require('../../app/dist/app/prod/data/db/DBHelper');

//     let auth;
//     let dbHelper;


//     beforeEach(() => {
//         auth = new Auth.Auth();
//         dbHelper = new DBHelper.DBHelper();

//         spyOn(auth, 'getDb')
//         spyOn(auth, 'login')

//         auth.getDb();
//         auth.login("", "", () => {

//         });

//     });

//     describe("db suite", () => {

//         it("should have called getDb", () => {
//             expect(auth.getDb).toHaveBeenCalled();
//         });

//         it("should return Database reference", () => {
//             expect(auth._dbc).toEqual(jasmine.any(DBHelper.DBHelper));
//         });
//     });




//     describe("login suite", () => {
//         it("should have called login", () => {
//             expect(auth.login).toHaveBeenCalled();
//         });

//         it("should be called with three parameters", () => {
//             expect(auth.login).toHaveBeenCalledWith(jasmine.anything(String), jasmine.anything(String), jasmine.any(Function));
//         });
//     })


//     describe("authetication suite", () => {

//         beforeEach(() => {

//             spyOn(auth, 'authenticate');
//             auth.authenticate("", "", () => { });
//         })

//         it('should be called', () => {
//             expect(auth.authenticate).toHaveBeenCalled();
//         })

//         it('should be called with:  String,  String,  callback Function', () => {
//             expect(auth.authenticate).toHaveBeenCalledWith(jasmine.any(String), jasmine.any(String), jasmine.any(Function));
//         })

//     })


//     describe("signUp suite", () => {
//         beforeEach(() => {

//             spyOn(auth, 'signUp');
//             auth.signUp("", "", "", () => { });

//             it('should be called', () => {
//                 expect(auth.signUp).toHaveBeenCalled();
//             })

//             it('should be called with arguments:  String,  String, String,  callback Function', () => {
//                 expect(auth.signUp).toHaveBeenCalledWith(jasmine.any(String), jasmine.any(String), jasmine.any(String), jasmine.any(Function));
//             })

//         })
//     })


//     describe("validate suite", () => {

//         let mValidate = new Auth.Auth();

//         beforeEach(() => {
//             auth = new Auth.Auth();
//             spyOn(auth, "validate");
//             auth.validate("", "", "");
//         });

//         it("should have called validate", () => {
//             expect(auth.validate).toHaveBeenCalled();
//         });

//         it("should take String, String, String as arguments", () => {
//             expect(auth.validate).toHaveBeenCalledWith(jasmine.any(String), jasmine.any(String), jasmine.any(String));
//         });

//         it("should return true for valid parameters", () => {
           
//             expect(mValidate.validate("", "", "")).toEqual(true);
//         })
//     });


//     describe("addUser suite", () => {
       
//         beforeEach(() => {
//             spyOn(auth, "addUser");

//             auth.addUser("", "", "", () => {

//             });
//         });

//         it("should call addUser", () => {
//             expect(auth.addUser).toHaveBeenCalled();
//         });

//         it("should have been called with: String, String, String, Function", () => {
//             expect(auth.addUser).toHaveBeenCalledWith(jasmine.any(String), jasmine.any(String), jasmine.any(String),jasmine.any(Function));
//         })
//     })





// });