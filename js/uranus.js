let activities = [
    {
      name: "Ice Volcano Investigations",
      des:
        "Study potential ice volcanoes on Miranda, Uranus's innermost moon, to understand the processes shaping its surface.",
      image: "../images/Uranus_Ac1.jpeg"
    },
    {
      name: "Uranian Moon Hopping",
      des:
        "Explore the diverse moons of Uranus, such as Miranda, Ariel, Umbriel, Titania, and Oberon, each with its distinct surface features and geological characteristics.",
      image: "../images/Uranus_Ac2.jpeg"
    },
    {
      name: "Uranus Ring System Observations",
      des:
        "Examine Uranus's faint ring system to understand its composition and dynamics.",
      image: "../images/Uranus_Ac3.jpeg"
    },
    {
      name: "Umbriel's Dark Surface",
      des:
        "Explore the dark and heavily cratered terrain of Umbriel, Uranus's third-largest moon, to unravel its geologic history.",
      image: "../images/Uranus_Ac4.jpeg"
    },
    {
      name: "Subsurface Ocean Exploration",
      des:
        "Investigate the possibility of subsurface oceans on Uranus's moons, like Miranda and Titania, and study their potential habitability.",
      image: "../images/Uranus_Ac5.jpeg"
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