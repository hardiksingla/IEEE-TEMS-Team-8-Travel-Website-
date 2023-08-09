let activities = [
    {
      name: "Venusian Cloud City",
      des:
        "Stay in a floating habitat high in Venus's atmosphere, where temperatures and pressures are more Earth-like. This would be a safer and more comfortable option compared to the surface.",
      image: "../images/Venus_Ac1.jpeg"
    },
    {
      name: "Heat-Resistant Rover Exploration",
      des:
        "Deploy heat-resistant rovers to the surface of Venus to explore its volcanic plains and investigate the possibility of unique forms of life surviving in extreme conditions.",
      image: "../images/Venus_Ac2.jpeg"
    },
    {
      name: "Venusian Volcano Tour",
      des:
        "Explore Venus's active volcanoes and lava flows, witnessing the planet's geological activity up close.",
      image: "../images/Venus_Ac3.jpeg"
    },
    {
      name: "Solar Power Demonstration",
      des:
        "Investigate the use of solar power on Venus, taking advantage of its proximity to the Sun, despite challenges in harnessing energy due to its thick atmosphere.",
      image: "../images/Venus_Ac4.jpeg"
    },
    {
      name: "Greenhouse Research",
      des:
        "Study potential methods of terraforming Venus, understanding how to modify its atmosphere and climate to make it more habitable for humans.",
      image: "../images/Venus_Ac5.jpeg"
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