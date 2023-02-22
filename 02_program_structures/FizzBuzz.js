let fizzOrBuzz;
for (let i = 1; i < 100; i++) {
    fizzOrBuzz = "";
    if (i % 3 == 0) fizzOrBuzz = "Fizz";
    if (i % 5 == 0) fizzOrBuzz = fizzOrBuzz + "Buzz";
    console.log(`${i}.${fizzOrBuzz}`);
}