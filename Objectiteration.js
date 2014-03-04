var friends = {
    bill: { // 'bill' is a key. Defined as an object. For valid JSON it would be "bill"
        firstName: "Bill", 
        lastName: "Gates",
        number: "01442 879059",
        address: ["Flat 1,", "169 Sussex Gardens", "London"]
    },
    steve: {
        firstName: "Steve",
        lastName: "Jobs",
        number: "01442 878322",
        address: ["Cornerfield,", "Northchurch Common", "Berkhamsted"]
    }
};

var search = function(name) {
    for(var key in friends) { // Key is the variable. Content of the variable is a string that is a key.
        if(friends[key]['firstName'] === name) { // if friends[first key = bill] points to object, which has key "firstName", value of which in this case is "Bill"
            console.log(friends[key]);
            return friends[key];
        }
    }
};

search("Bill")