// CARA BIKIN OBJECT LITERAL

// Dalam object literal terdapat pasangan-pasangan key dan value

var roby = {
  lastName: 'Nurrahman',
  firstName: 'Roby',
  address: 'Bandung',
  gender: 'male',
  age: 23,
}
roby.batch = 'infinite'
roby['scores'] = [90, 100, 90]
console.log(roby)

var elinda = {}
elinda.firstName = 'Elinda'
elinda.lastName = 'Sintaresmi'
console.log(elinda)

var refqi = {}
refqi['firstName'] = 'Refqi'
var key = 'lastName'
refqi[key] = 'Ariyadi'
console.log(refqi)

var rizkyA = {
  firstName: 'Rizky',
  lastName: 'Aiman'
}
console.log(rizkyA)

var rizkyD = {}
rizkyD.firstName = 'Rizky'
rizkyD.lastName = 'Dwiputra'
console.log(rizkyD)

var fitra = {}
fitra['firstName'] = 'Akbar'
fitra['lastName'] = 'Fitra'
console.log(fitra)


// CARA AKSES VALUE DI OBJECT LITERAL

// dengan dot
console.log(roby.address)

// dengan square bracket
console.log(roby['age'])
var key = 'batch'
console.log(roby[key])


// LOOP OBJECT

for (var key in roby) {
  if (key === 'address') {
    console.log('tinggal di ' + roby[key])
  } else {
    console.log(roby[key])
  }
}
