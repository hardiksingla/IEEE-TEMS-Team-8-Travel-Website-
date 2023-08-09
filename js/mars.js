let activities = [
    {
      name: "Rover Expeditions",
      des:
        "Explore the Martian surface with advanced rovers capable of traveling long distances, studying geological features, and searching for signs of past or present life.",
      image: "../images/Mars_Ac1.jpeg"
    },
    {
      name: "Martian Base Camp",
      des:
        "Stay in a self-sustaining habitat or a Martian base camp, simulating life on Mars and conducting scientific research.",
      image: "../images/Mars_Ac2.jpeg"
    },
    {
      name: "Martian Geology",
      des:
        "Investigate the unique geology of Mars, including its vast canyons, ancient riverbeds, and potential sites of valuable resources.",
      image: "../images/Mars_Ac3.jpeg"
    },
    {
      name: "Astronomy and Sky Observations",
      des:
        "Observe the Martian sky, which is known for its pinkish hue and two moons, Phobos and Deimos, and study the distant stars and planets from the Martian surface.",
      image: "../images/Mars_Ac4.jpeg"
    },
    {
      name: "Ice Mining",
      des:
        "Study the potential for extracting water ice from Martian polar regions, a crucial resource for future human settlers.",
      image: "../images/Mars_Ac5.jpeg"
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