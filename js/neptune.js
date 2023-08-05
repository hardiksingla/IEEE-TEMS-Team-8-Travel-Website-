let activities = [
    {
      name: "Ice Giant Atmosphere Studies",
      des:
        "Analyze Neptune's dynamic atmosphere, studying its weather patterns, storms, and fast winds.",
      image: "../images/Neptune_Ac4.jpeg"
    },
    {
      name: "Submarine Exploration",
      des:
        "Explore the subsurface oceans that may exist on Triton, investigating the potential for life beneath its icy crust.",
      image: "../images/Neptune_Ac2.jpeg"
    },
    {
      name: "Neptune's Dark Spot Investigation",
      des:
        "Study the Great Dark Spot on Neptune, a storm system similar to Jupiter's Great Red Spot, to understand its behavior and evolution.",
      image: "../images/Neptune_Ac3.jpeg"
    },
    {
      name: "Triton Landing",
      des:
        "Land on Triton, Neptune's largest moon, to study its unique retrograde orbit and geysers erupting from its icy surface.",
      image: "../images/Neptune_Ac1.jpeg"
    },
    {
      name: "Educational Outreach",
      des:
        "Engage in educational and outreach activities, sharing the excitement of space exploration with the public and inspiring future generations of scientists and explorers.",
      image: "../images/Neptune_Ac5.jpeg"
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
  }, 3000);