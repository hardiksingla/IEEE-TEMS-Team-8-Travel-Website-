let activities = [
    {
      name: "Saturn's Rings Tour",
      des:
        "Fly through and study Saturn's magnificent ring system, witnessing its intricate structures and learning about its composition and origin.",
      image: "../images/Saturn_Ac1.jpeg"
    },
    {
      name: "Saturnian Aurora Observation",
      des:
        "Study the beautiful and enigmatic auroras on Saturn, created by interactions between its magnetic field and solar winds.",
      image: "../images/Saturn_Ac2.jpeg"
    },
    {
      name: "Cassini Heritage Tour",
      des:
        "Visit sites of historical interest related to the Cassini-Huygens mission, a spacecraft that provided valuable insights into Saturn and its moons.",
      image: "../images/Saturn_Ac3.jpeg"
    },
    {
      name: "Space Agriculture Experiments",
      des:
        "Conduct experiments in space agriculture on Saturn's moons to study the feasibility of self-sustaining human colonies in the outer solar system.",
      image: "../images/Saturn_Ac4.jpeg"
    },
    {
      name: "Enceladus Flyby",
      des:
        "Perform flybys of Enceladus, one of Saturn's moons, known for its icy surface and active geysers that may harbor subsurface oceans.",
      image: "../images/Saturn_Ac5.jpeg"
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