const {
    expect
} = require("chai");
const request = require("request");
let cat = {
    title: "Testing unit cat",
    subTitle: "testing",
    describtion: "test post",
    path: ""
};
let url = 'http://localhost:3000/api/cat';


describe("Testing POST api", function() {
    it("Posting cat if array size is 4", function (done) {
        //this unit will convert object into array check the length statically defined and will return test status
        let CatArray = Object.values(cat);
        if (CatArray.length === 4) {
            request.post({
                url: url,
                form: cat
            });
            console.log("done posting...! TEST PASSED...!");
            done();
        } else {
            console.log("Length does not match..! TEST FAILED...!");
        }
        
    });
});

describe("Testing GET api", function() {
        it("Test if type of the data is string or not", function(done) {
            request(url, function(err, res, body) {
                // this unit checks the type of the data and parse it into json format 
                if (typeof body == 'string') {
                    let parsedOP = JSON.parse(body);
                    console.log("show the output...!");
                    console.log(parsedOP);
                    console.log("Done Parsing...!");
                    done();
                } else {
                    console.log("Type of the data is not String...! TEST FAILED...!");
                }
            });
        });
    });

describe("test delete api", function() {
    it("delete cat from db", function(done) {
        request.delete({
            url: url,
            form: cat
        }, function(err, res, body) {
            done();
        });
    });
});