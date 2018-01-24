/* var names = ['Kyle', 'Jay', 'Nick', 'Kevin']

names.forEach(function (name) {
    console.log('forEach', name);
});

names.forEach(name => {console.log('arrow', name)});
//we can have multiple statements with curly braces ehre

names.forEach(name => console.log('arrow', name)); */

var returnMe = (name) => name+'!';
console.log(returnMe('Kyle'));

//annomoys functions have a this
//arrow take on their parent's this binding