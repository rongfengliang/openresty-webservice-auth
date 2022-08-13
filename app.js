var soap = require('soap');
var url = 'http://localhost/calculator.asmx?wsdl';
var args = {intA: 2,intB:3};
soap.createClient(url, {
    wsdl_options:{
        headers: {'token': 'mytoken'},
    }
}, function(err, client) {
    console.dir(client)
    client.addHttpHeader("token","mytoken")
    client.Add(args, function(err, result) {
        console.log(result.AddResult);
    });
});