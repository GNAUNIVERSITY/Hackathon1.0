// filter array 
let filterarray = [];

// gallery card array

let galleryarray = [{
        id: 1,
        name: "National Agro-Industry ",
        src: "download.png",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, delectus."
    },
    {
        id: 2,
        name: "Kaveri Seed Company",
        src: "download1.png",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, delectus."
    },
    {
        id: 3,
        name: "Raghuvansh AgroFarms",
        src: "download2.jfif",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, delectus."
    },
    {
        id: 4,
        name: "Goodricke Group",
        src: "download3.jpg",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, delectus."
    },
    {
        id: 5,
        name: "JK Agri Genetics",
        src: "download4.jpg",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, delectus."
    },
    {
        id: 6,
        name: "Dhunseri Tea & Industries",
        src: "download5.jpg",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, delectus."
    }
];



showgallery(galleryarray);


// create function to show card


function showgallery(curarra) {
    document.getElementById("card").innerText = "";
    for (var i = 0; i < curarra.length; i++) {
        document.getElementById("card").innerHTML += `
        <div class="col-md-4 mt-3" >
           <div class="card p-3 ps-5 pe-5">
               <h4 class="text-capitalize text-center">${curarra[i].name}</h4>

          <img src="${curarra[i].src}" width="100%" height="320px"/>
          <p class="mt-2">${curarra[i].desc}</p>
          <button class="btn btn-primary w-100 mx-auto">More</button>
       
          </div>
          </div>
       `
    }

}

// For Live Searching Product

document.getElementById("myinput").addEventListener("keyup", function() {
    let text = document.getElementById("myinput").value;

    filterarray = galleryarray.filter(function(a) {
        if (a.name.includes(text)) {
            return a.name;
        }

    });
    if (this.value == "") {
        showgallery(galleryarray);
    } else {
        if (filterarray == "") {
            document.getElementById("para").style.display = 'block'
            document.getElementById("card").innerHTML = "";
        } else {

            showgallery(filterarray);
            document.getElementById("para").style.display = 'none'
        }
    }

});