describe("The textAddBill function", function () {

    it("should return true if action was added to the bill and false if not", function () {
        var instanceOfTextFactory = TextFactory();
        assert.equal(true, instanceOfTextFactory.textAddBill("call"));
        assert.equal(true, instanceOfTextFactory.textAddBill("sms"));
        assert.equal(false, instanceOfTextFactory.textAddBill("data"));
        assert.equal(false, instanceOfTextFactory.textAddBill(""));
        assert.equal(false, instanceOfTextFactory.textAddBill(null));
    });


});

describe("The textBillTotals function", function () {

    it("should return an object containing all the values for the appropriate dom elements", function () {

        var instanceOfTextFactory = TextFactory();

        instanceOfTextFactory.textAddBill("call")
        instanceOfTextFactory.textAddBill("call")
        instanceOfTextFactory.textAddBill("call")

        assert.deepEqual({
            totalTextBill: 8.25,
            callTextBill: 8.25,
            smsTextBill: 0,
        }, instanceOfTextFactory.textBillTotals());

    });

    it("should return an object containing all the values for the appropriate dom elements", function () {

        var instanceOfTextFactory = TextFactory();

        instanceOfTextFactory.textAddBill("sms")
        instanceOfTextFactory.textAddBill("sms")
        instanceOfTextFactory.textAddBill("sms")

        assert.deepEqual({
            totalTextBill: 2.25,
            callTextBill: 0,
            smsTextBill: 2.25,
        }, instanceOfTextFactory.textBillTotals());

    });
    it("should return an object containing all the values for the appropriate dom elements", function () {

        var instanceOfTextFactory = TextFactory();

        instanceOfTextFactory.textAddBill("sms")
        instanceOfTextFactory.textAddBill("sms")
        instanceOfTextFactory.textAddBill("sms")
        instanceOfTextFactory.textAddBill("call")
        instanceOfTextFactory.textAddBill("call")
        instanceOfTextFactory.textAddBill("call")
        assert.deepEqual({
            totalTextBill: 10.50,
            callTextBill: 8.25,
            smsTextBill: 2.25,
        }, instanceOfTextFactory.textBillTotals());

    });
});

var desc = "The getColorString Function";
var testDesc = "return the appropriate color class for a given total";

describe(desc,test);

function test() {
    it(testDesc,actualTest);
    it(testDesc, function () {
        var instanceOfTextFactory = TextFactory();
        
        instanceOfTextFactory.textAddBill("sms")
        instanceOfTextFactory.textAddBill("sms")
        instanceOfTextFactory.textAddBill("call")
        instanceOfTextFactory.textAddBill("call")
        instanceOfTextFactory.textAddBill("call") 
        instanceOfTextFactory.textAddBill("sms")
        instanceOfTextFactory.textAddBill("sms")
        instanceOfTextFactory.textAddBill("sms")
        instanceOfTextFactory.textAddBill("call")
        instanceOfTextFactory.textAddBill("call")
        instanceOfTextFactory.textAddBill("call") 
    
    
        var totalM = instanceOfTextFactory.textBillTotals().totalTextBill;
        var totaalM = "other string";

        assert.equal( "invalid" , instanceOfTextFactory.colorString(totaalM))
    });
    it(testDesc, function () {
        var instanceOfTextFactory = TextFactory();
        
        instanceOfTextFactory.textAddBill("sms")
        instanceOfTextFactory.textAddBill("sms")
        instanceOfTextFactory.textAddBill("call")
        instanceOfTextFactory.textAddBill("call")
        instanceOfTextFactory.textAddBill("call") 
        instanceOfTextFactory.textAddBill("sms")
        instanceOfTextFactory.textAddBill("sms")
        instanceOfTextFactory.textAddBill("sms")
        instanceOfTextFactory.textAddBill("call")
        instanceOfTextFactory.textAddBill("call")
        instanceOfTextFactory.textAddBill("call")
        instanceOfTextFactory.textAddBill("sms")
        instanceOfTextFactory.textAddBill("sms")
        instanceOfTextFactory.textAddBill("sms")
        instanceOfTextFactory.textAddBill("call")
        instanceOfTextFactory.textAddBill("call")
        instanceOfTextFactory.textAddBill("call")  
    
    
        var totalM = instanceOfTextFactory.textBillTotals().totalTextBill;
        

        assert.equal( "warning" , instanceOfTextFactory.colorString(totalM))
    });
}



function actualTest() {
    var instanceOfTextFactory = TextFactory();

    instanceOfTextFactory.textAddBill("sms")
    instanceOfTextFactory.textAddBill("sms")
    instanceOfTextFactory.textAddBill("sms")
    instanceOfTextFactory.textAddBill("call")
    instanceOfTextFactory.textAddBill("call")
    instanceOfTextFactory.textAddBill("call") 
    instanceOfTextFactory.textAddBill("sms")
    instanceOfTextFactory.textAddBill("sms")
    instanceOfTextFactory.textAddBill("sms")
    instanceOfTextFactory.textAddBill("call")
    instanceOfTextFactory.textAddBill("call")
    instanceOfTextFactory.textAddBill("call") 
    instanceOfTextFactory.textAddBill("sms")
    instanceOfTextFactory.textAddBill("sms")
    instanceOfTextFactory.textAddBill("sms")
    instanceOfTextFactory.textAddBill("call")
    instanceOfTextFactory.textAddBill("call")
    instanceOfTextFactory.textAddBill("call") 
    instanceOfTextFactory.textAddBill("sms")
    instanceOfTextFactory.textAddBill("sms")
    instanceOfTextFactory.textAddBill("sms")
    instanceOfTextFactory.textAddBill("call")
    instanceOfTextFactory.textAddBill("call")
    instanceOfTextFactory.textAddBill("call") 
    instanceOfTextFactory.textAddBill("sms")
    instanceOfTextFactory.textAddBill("sms")
    instanceOfTextFactory.textAddBill("sms")
    instanceOfTextFactory.textAddBill("call")
    instanceOfTextFactory.textAddBill("call")
    instanceOfTextFactory.textAddBill("call") 


    var totalM = instanceOfTextFactory.textBillTotals().totalTextBill
    
    // This the test
    assert.equal( "danger" , instanceOfTextFactory.colorString(totalM))
}



