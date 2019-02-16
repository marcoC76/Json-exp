var obj
fetch('https://api.sheety.co/cba083a5-cc85-4703-a5d0-2307f8968d31')
    .then(function (response) {
        return response.json();
        
    })
    .then(function (data) {
        obj = data
        console.log('obj = ', obj);
        
    })
    .catch(function (err) {
        console.error(err);
    });