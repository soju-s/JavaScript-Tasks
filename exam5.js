var animals = [
    { name: "Jason", species:"rabbit"},
    { name: "Jessica", species:"dog"},
    { name: "Jacky", species:"owl"},
    { name: "Luke", species:"fish"},
    { name: "Junior", species:"rat"},
    { name: "Thomas", species:"cat"}
   ]

//  a. Display the details of Dog species from the given array
console.log('details of dog species =');
console.log(animals.find(a=>a.species=='dog'));
// b. Display all the species name
console.log('all species names are');
b=animals.map(a=>a.species)
console.log(b);
