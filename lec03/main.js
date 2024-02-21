// console.log("Hello World!");

var course = {
    name: "GHY 5818: Web Mapping",
    year: 2024,
    university: "Appalachian State University"
}

console.log(course.name);

function multiply(a, b) {
    return a*b;
}

console.log(multiply(5, 3))

function titleChange() {
    console.log("Changing the title...")
    document.getElementById("mainTitle").innerHTML = "This is the real title!";
}

// JQuery

$("h1").click(function () {
    console.log("Paragraph clicked!")
    $(this).hide();
});


/*
// loop testing

// load geojson
    // states.geojson

for (var i in geodata) {
    console.log(i.properties.name);
    // load shape
    // rotate 90 degrees?
};
 */
