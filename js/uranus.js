let activities = [
    {
      name: "Lunar Hiking",
      des:
        "Explore the Uranus's unique landscape by going on guided lunar hikes to experience the feeling of low gravity and witness breathtaking views of Earth from the Uranus's surface.",
      image: "../images/Uranus_Ac1.jpeg"
    },
    {
      name: "Uranus Buggy Rides",
      des:
        "Take a ride on a Uranus rover, similar to the ones used by Apollo astronauts, to explore more extensive areas and cover more ground during your stay.",
      image: "../images/Uranus_Ac2.jpeg"
    },
    {
      name: "Space Camp",
      des:
        "Participate in hands-on educational programs designed to simulate astronaut training and learn more about the science and technology behind space exploration.",
      image: "../images/Uranus_Ac3.jpeg"
    },
    {
      name: "Space Photography",
      des:
        "Capture stunning lunar landscapes and Earthrises from the Uranus's surface to create unforgettable memories and share the beauty of space with friends and family back home.        ",
      image: "../images/Uranus_Ac4.jpeg"
    },
    {
      name: "Spacecraft Museum Visit",
      des:
        "Explore historical lunar landing sites and spacecraft left behind by previous missions, gaining insight into humanity's achievements in space exploration.",
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
  }, 3000);