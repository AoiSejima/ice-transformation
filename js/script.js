// console.log("Hello is this working?")

// load the airtable library, call it "Airtable"
let Airtable = require("airtable");
console.log(Airtable);

// connect our airtable base to our website using API key
let base = new Airtable({ apiKey: "key2fjkLzrAFCnstQ" }).base(
    "appkjFKTVoK8Banc1"
);

//get our airtable data, specify how to retrieve it
base("iceTransformation").select({}).eachPage(gotPageOfIces, gotAllIces);

// an empty array to hold our book data
// could type in arrays? ["dots" "lines"] but this is left empty
const ices = [];

// callback function that receives our data
function gotPageOfIces(records, fetchNextPage) {
    console.log("gotPageOfIces()");
    // add the records from this page to our array
    // push is another word for add
    ices.push(...records);
    // request more pages
    fetchNextPage();
;}

// call back function that is called when all pages are loaded
function gotAllIces(err) {
    console.log("gotAllIces()");
  
    // report an error, you'd want to do something better than this in production
    if (err) {
      console.log("error loading data");
      console.error(err);
      return;
    }
  
    // call functions to log and show the spirals
    consoleLogIces();
    showIces();
};

// just loop through the spirals and console.log them
function consoleLogIces() {
    console.log("consoleLogIces()");
    ices.forEach((ice) => {
      console.log("Ice:", ice);
    });
};
  
// loop through airtable data, and display them onto our page
function showIces() {
    console.log("showIces()");
    ices.forEach((ice) => {

        // creating a new div container, where our info will go
        let iceContainer = document.createElement("div");
        iceContainer.classList.add("ice-container");
        document.querySelector(".js-container").appendChild(iceContainer);
      
        let iceTitle = document.createElement("h2");
        iceTitle.classList.add("ice-title");
        iceTitle.innerText = ice.fields.title;
        iceContainer.appendChild(iceTitle);

        let iceTime = document.createElement("h2");
        iceTime.classList.add("ice-time");
        iceTime.innerText = ice.fields.time;
        iceContainer.appendChild(iceTime);

        let iceImage = document.createElement("img");
        iceImage.classList.add("ice-image");
        iceImage.src = ice.fields.image[0].url;
        iceContainer.appendChild(iceImage);

        // add event lister
        // when user clicks on iceContiner
        // other elements will appear or disappear
        iceContainer.addEventListener("click", function(){
            // toggle = light switch
            iceTitle.classList.toggle("active");
            iceTime.classList.toggle("active");
        });

        // get genre field from airtable, 
        // loop through the array and add each genre as a class to the song container
        let iceMaterial = ice.fields.material;
        iceMaterial.forEach(function(material){
        iceContainer.classList.add(material)
        });

        // add event listener to filter (to add an active class to ice)
        let filterCeramicPlate = document.querySelector(".js-ceramicPlate");
        filterCeramicPlate.addEventListener("click", function(){

            if (iceContainer.classList.contains("ceramicPlate")) {
                iceContainer.style.display = "block";
            } else {
                iceContainer.style.display = "none";
            }
        });

        let filterGlassBottle = document.querySelector(".js-glassBottle");
        filterGlassBottle.addEventListener("click", function(){

            if (iceContainer.classList.contains("glassBottle")) {
                iceContainer.style.display = "block";
            } else {
                iceContainer.style.display = "none";
            }
        });

        let filterGlassVase = document.querySelector(".js-glassVase");
        filterGlassVase.addEventListener("click", function(){

            if (iceContainer.classList.contains("glassVase")) {
                iceContainer.style.display = "block";
            } else {
                iceContainer.style.display = "none";
            }
        });

        let filterLenineFabric = document.querySelector(".js-lenineFabric");
        filterLenineFabric.addEventListener("click", function(){

            if (iceContainer.classList.contains("lenineFabric")) {
                iceContainer.style.display = "block";
            } else {
                iceContainer.style.display = "none";
            }
        });

        let filterNewspaper = document.querySelector(".js-newspaper");
        filterNewspaper.addEventListener("click", function(){

            if (iceContainer.classList.contains("newspaper")) {
                iceContainer.style.display = "block";
            } else {
                iceContainer.style.display = "none";
            }
        });

        let filterNewsprintPaper = document.querySelector(".js-newsprintPaper");
        filterNewsprintPaper.addEventListener("click", function(){

            if (iceContainer.classList.contains("newsprintPaper")) {
                iceContainer.style.display = "block";
            } else {
                iceContainer.style.display = "none";
            }
        });

        let filterMattePresentationPaper1 = document.querySelector(".js-mattePresentationPaper1");
        filterMattePresentationPaper1.addEventListener("click", function(){

            if (iceContainer.classList.contains("mattePresentationPaper1")) {
                iceContainer.style.display = "block";
            } else {
                iceContainer.style.display = "none";
            }
        });

        let filterMattePresentationPaper2 = document.querySelector(".js-mattePresentationPaper2");
        filterMattePresentationPaper2.addEventListener("click", function(){

            if (iceContainer.classList.contains("mattePresentationPaper2")) {
                iceContainer.style.display = "block";
            } else {
                iceContainer.style.display = "none";
            }
        });

        let filterMattePresentationPaper3 = document.querySelector(".js-mattePresentationPaper3");
        filterMattePresentationPaper3.addEventListener("click", function(){

            if (iceContainer.classList.contains("mattePresentationPaper3")) {
                iceContainer.style.display = "block";
            } else {
                iceContainer.style.display = "none";
            }
        });

        let filterReset = document.querySelector(".js-reset");
        filterReset.addEventListener("click", function(){
            iceContainer.style.display = "block";
        });
});
}