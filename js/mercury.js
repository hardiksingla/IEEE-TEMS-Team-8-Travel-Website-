let activities = [
    {
      name: "Surface Sledding",
      des:
        "Take advantage of Mercury's low gravity and smooth plains to experience the thrill of sledding down its slopes on specially designed sleds or vehicles.",
      image: "../images/Mercury_Ac1.jpeg"
    },
    {
      name: "Magnetic Field Interaction",
      des:
        "Study the interaction between Mercury's magnetic field and the solar wind, which could provide valuable insights into the planet's magnetic history.",
      image: "../images/Mercury_Ac2.jpeg"
    },
    {
      name: "Space Photography",
      des:
        "Capture mesmerizing views of the Sun from Mercury's surface and take snapshots of the unique landscapes and terrain.",
      image: "../images/Mercury_Ac3.jpeg"
    },
    {
      name: "Spacecraft Archaeology",
      des:
        "Explore any abandoned spacecraft or probes that were sent to Mercury in the past, learning from their history and technological achievements.",
      image: "../images/Mercury_Ac4.jpeg"
    },
    {
      name: "Space Cuisine",
      des:
        "Try out specially prepared space-themed meals and sample freeze-dried astronaut food to get a taste of what it's like to dine in space.",
      image: "../images/Mercury_Ac5.jpeg"
    }
  ];
  
  const carousel = document.querySelector(".carousel");
  let sliders = [];
  
  let slideIndex = 0; // to track current slide index.
  
  const createSlide = () => {
    if (slideIndex >= activities.length) {
      slideIndex = 0;
    }
  
    // creating DOM element
    let slide = document.createElement("div");
    var imgElement = document.createElement("img");
    let content = document.createElement("div");
    let h1 = document.createElement("h1");
    let p = document.createElement("p");
  
    // attaching all elements
    imgElement.appendChild(document.createTextNode(""));
    h1.appendChild(document.createTextNode(activities[slideIndex].name));
    p.appendChild(document.createTextNode(activities[slideIndex].des));
    content.appendChild(h1);
    content.appendChild(p);
    slide.appendChild(content);
    slide.appendChild(imgElement);
    carousel.appendChild(slide);
  
    // setting up image
    imgElement.src = activities[slideIndex].image;
    slideIndex++;
  
    // setting elements classname
    slide.className = "slider";
    content.className = "slide-content";
    h1.className = "activity-title";
    p.className = "activity-des";
  
    sliders.push(slide);
  
    if (sliders.length) {
      sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${
        30 * (sliders.length - 2)
      }px)`;
    }
  };
  
  for (let i = 0; i < 3; i++) {
    createSlide();
  }
  
  setInterval(() => {
    createSlide();
  }, 6000);