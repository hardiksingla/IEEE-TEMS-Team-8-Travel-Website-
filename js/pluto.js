let activities = [
    {
      name: "Charon Landing",
      des:
        "Land on Charon, Pluto's largest moon, to investigate its icy terrain and geological characteristics.",
      image: "../images/Pluto_Ac1.jpeg"
    },
    {
      name: "Spaceborne Telescopes",
      des:
        "Use Pluto's distance from Earth to establish a spaceborne telescope, taking advantage of the lack of atmospheric interference for deep-space observations.",
      image: "../images/Pluto_Ac2.jpeg"
    },
    {
      name: "Pluto's Icy Plains",
      des:
        "Explore Pluto's vast, frozen plains and study its unique landscape, including its striking heart-shaped region, informally known as Tombaugh Regio.",
      image: "../images/Pluto_Ac3.jpeg"
    },
    {
      name: "Moons of Pluto",
      des:
        "Study the other small moons of Pluto, such as Nix, Hydra, Kerberos, and Styx, to understand their origins and properties.",
      image: "../images/Pluto_Ac4.jpeg"
    },
    {
      name: "Polar Lights Observation",
      des:
        "Enjoy a chance to witness the mysterious polar lights on Pluto, caused by interactions with solar winds and its thin atmosphere.",
      image: "../images/Pluto_Ac5.jpeg"
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