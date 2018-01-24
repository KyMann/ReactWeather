/* //callbacks
function getTempCallback(location, callback) {
    //common pattern for working with asyncronyus callbacks
    callback(undefined, 78); //success
    callback('City not found'); //failure
}

getTempCallback('Philadelphia', function(err, temp) {
    //one function to differentiate between error and success cases
    if (err) {
        console.log('error', err);
    } else {
        console.log('success', temp)
    }
});
//problems, pass and fail are not exculsive, multiple combinations of pass pass, pass fail, fail fail are all availuable

function getTempPromise(location) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
        resolve(78);
        reject('city not found');
        }, 1000);
    });
}

getTempPromise('Philadelphia').then(function (temp) {
    console.log('promise success', temp);
}, function (err) {
    console.log('promise error', err);
});
//then specifies run at most one time

if (typeof 7 == 'number') {} */

function addPromise (a, b) {
    return new Promise(function (resolve, reject){
        if (typeof a == 'number' && typeof b == 'number') {
            resolve (a+b);}
        else {reject('one of these is not a number')}
        }
)};
    //2 numbers add and return
    //else fails and returns error string
addPromise(1,1).then(function(){console.log('promise success')}, function (){console.log('promise failure')});



