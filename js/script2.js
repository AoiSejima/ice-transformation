// console.log("Is my script working?");

let Airtable = require("airtable");
// console.log(Airtable);

let base = new Airtable({ apiKey: "key2fjkLzrAFCnstQ" }).base(
    "app66e1GvFQ9PnuHC"
);

//get "tech_collection" airtable base, select all the records (records = rows)
// specify function that will recieve the data
base("iceTransformation").select({}).eachPage(gotPageOfIces, gotAllIces);

// an empty array to hold the our data
// const is another word for var 
const ices = [];

// callback function that receives our data
function gotPageOfIces(records, fetchNextPage) {
    console.log("gotPageOfIces()");
    // push(add) the records from this page to our empty array
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
  
    // call functions to log and show the techs
    consoleLogIces();
    showIces();

    // try {
    //     showIces();
    // } catch (e) {
    //     console.error(e);
    // }
};

// just loop through the techs and console.log them
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
        // let techTitle = document.createElement("h3");
        // techTitle.innerText = tech.fields.title;
        // document.body.appendChild(techTitle);

        // creating a new div container for EACH tech item
        // haven't added to the page yet by appending
        let iceContainer = document.createElement("div");
        iceContainer.classList.add("js-container");

        // creating a new tech-img elemtnt
        let iceImage = document.createElement("img");
        iceImage.classList.add("ice-image");
        iceImage.src = ice.fields.image[0].url;
        iceContainer.appendChild(iceImage);

        let iceMaterial = ice.fields.material;
        let iceTime = ice.fields.time;

        // adding techBrand as a class to each tech container
        // clicking amazon would only add amazon products to the container
        iceContainer.classList.add(iceTime);

        if (iceMaterial == 'ceramicPlate') {
            document.querySelector(".click-ceramicPlate").appendChild(iceContainer);
        }
        if (iceMaterial == 'glassBottle') {
            document.querySelector(".click-glassBottle").appendChild(iceContainer);
        }
        if (iceMaterial == 'glassVase') {
            document.querySelector(".click-glassVase").appendChild(iceContainer);
        }
        if (iceMaterial == 'colander') {
            document.querySelector(".click-colander").appendChild(iceContainer);
        }
        if (iceMaterial == 'lenineFabric') {
            document.querySelector(".click-lenineFabric").appendChild(iceContainer);
        }
        if (iceMaterial == 'newspaper') {
            document.querySelector(".click-newspaper").appendChild(iceContainer);
        }
        if (iceMaterial == 'newsprintPaper') {
            document.querySelector(".click-newsprintPaper").appendChild(iceContainer);
        }
        if (iceMaterial == 'mattePresentationPaper1') {
            document.querySelector(".click-mattePresentationPaper1").appendChild(iceContainer);
        }

        // Get all buttons with class="brand" inside the container
        var activeTime = document.getElementsByClassName("time");

        // Loop through the buttons and add the active class to the current/clicked button
        for (var i = 0; i < activeTime.length; i++) {
          activeBrand[i].addEventListener("click", function() {
            var current = document.getElementsByClassName("active");
            current[0].className = current[0].className.replace(" active", "");
            this.className += " active";
          });
        }

        if (iceContainer.classList.contains("00:00:00")){
          iceContainer.style.display = "flex";
        } else {
          iceContainer.style.display = "none";
        }

        document.querySelector(".click-00").addEventListener("click", function () {
            if (iceContainer.classList.contains("00:00:00")){
                  iceContainer.style.display = "flex";
                } else {
                  iceContainer.style.display = "none";
                }
        })
        document.querySelector(".click-01").addEventListener("click", function () {
            if (iceContainer.classList.contains("00:10:00")){
                  iceContainer.style.display = "flex";
                } else {
                  iceContainer.style.display = "none";
                }
        })
        document.querySelector(".click-02").addEventListener("click", function () {
            if (iceContainer.classList.contains("00:20:00")){
                  iceContainer.style.display = "flex";
                } else {
                  iceContainer.style.display = "none";
                }
        })
        document.querySelector(".click-03").addEventListener("click", function () {
            if (iceContainer.classList.contains("00:30:00")){
                  iceContainer.style.display = "flex";
                } else {
                  iceContainer.style.display = "none";
                }
        })
        document.querySelector(".click-04").addEventListener("click", function () {
            if (iceContainer.classList.contains("00:40:00")){
                  iceContainer.style.display = "flex";
                } else {
                  iceContainer.style.display = "none";
                }
        })
        document.querySelector(".click-05").addEventListener("click", function () {
            if (iceContainer.classList.contains("00:50:00")){
                  iceContainer.style.display = "flex";
                } else {
                  iceContainer.style.display = "none";
                }
        })
        document.querySelector(".click-06").addEventListener("click", function () {
            if (iceContainer.classList.contains("01:00:00")){
                  iceContainer.style.display = "flex";
                } else {
                  iceContainer.style.display = "none";
                }
        })
        document.querySelector(".click-07").addEventListener("click", function () {
            if (iceContainer.classList.contains("01:10:00")){
                  iceContainer.style.display = "flex";
                } else {
                  iceContainer.style.display = "none";
                }
        })
        document.querySelector(".click-08").addEventListener("click", function () {
            if (iceContainer.classList.contains("01:20:00")){
                  iceContainer.style.display = "flex";
                } else {
                  iceContainer.style.display = "none";
                }
        })
        document.querySelector(".click-09").addEventListener("click", function () {
            if (iceContainer.classList.contains("01:30:00")){
                  iceContainer.style.display = "flex";
                } else {
                  iceContainer.style.display = "none";
                }
        })
        document.querySelector(".click-10").addEventListener("click", function () {
            if (iceContainer.classList.contains("01:40:00")){
                  iceContainer.style.display = "flex";
                } else {
                  iceContainer.style.display = "none";
                }
        })
        document.querySelector(".click-11").addEventListener("click", function () {
            if (iceContainer.classList.contains("01:50:00")){
                  iceContainer.style.display = "flex";
                } else {
                  iceContainer.style.display = "none";
                }
        })
        document.querySelector(".click-12").addEventListener("click", function () {
            if (iceContainer.classList.contains("02:00:00")){
                  iceContainer.style.display = "flex";
                } else {
                  iceContainer.style.display = "none";
                }
        })
        document.querySelector(".click-13").addEventListener("click", function () {
            if (iceContainer.classList.contains("02:10:00")){
                  iceContainer.style.display = "flex";
                } else {
                  iceContainer.style.display = "none";
                }
        })
        document.querySelector(".click-14").addEventListener("click", function () {
            if (iceContainer.classList.contains("02:20:00")){
                  iceContainer.style.display = "flex";
                } else {
                  iceContainer.style.display = "none";
                }
        })
        document.querySelector(".click-15").addEventListener("click", function () {
            if (iceContainer.classList.contains("02:30:00")){
                  iceContainer.style.display = "flex";
                } else {
                  iceContainer.style.display = "none";
                }
        })
});
}
