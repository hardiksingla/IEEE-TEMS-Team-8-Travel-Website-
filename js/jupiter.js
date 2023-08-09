let activities = [
    {
      name: "Jupiter's Great Red Spot Observation",
      des:
        "Use advanced spacecraft to observe and study Jupiter's iconic storm, the Great Red Spot, from a safe distance.",
      image: "../images/Jupiter_Ac1.jpeg"
    },
    {
      name: "Radiation Shielded Habitats",
      des:
        "Stay in radiation-shielded habitats on the moons to protect against Jupiter's intense radiation belts.",
      image: "../images/Jupiter_Ac2.jpeg"
    },
    {
      name: "Interplanetary Astronomy",
      des:
        "Utilize the unique perspective from Jupiter's moons to conduct astronomical observations of distant celestial objects and phenomena.",
      image: "../images/Jupiter_Ac3.jpeg"
    },
    {
      name: "Jovian Moon Exploration",
      des:
        "Visit the four largest moons of Jupiter - Io, Europa, Ganymede, and Callisto - each with unique features and potential for scientific discoveries.",
      image: "../images/Jupiter_Ac4.jpeg"
    },
    {
      name: "Io Volcano Observation",
      des:
        "Witness the active volcanic activity on Io, Jupiter's innermost moon, and study the interactions between its volcanic plumes and Jupiter's magnetic field.",
      image: "../images/Jupiter_Ac5.jpeg"
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