//Slide-in side bar  
  function myMenuFunction() {
    const menu = document.getElementById("myNavMenu");
    const icon = document.getElementById("menuIcon");

    menu.classList.toggle("show");

    // Toggle icon
    // if (menu.classList.contains("show")) {
    //   icon.classList.replace("uil-bars", "fa-xmark");  // cancel icon
    // } else {
    //   icon.classList.replace("fa-xmark", "uil-bars"); // menu icon
    // }

  // Reset the icon classes
  icon.className = "fas " + (menu.classList.contains("show") ? "fa-xmark" : "uil-bars");

  }
  

/*----------Dark mode------------*/
const body = document.querySelector("body"),
    toggleSwitch = document.getElementById("toggle-switch");

toggleSwitch.addEventListener("click", ()=> {
    body.classList.toggle("dark");
});


/*-------------Typing Effect----------------*/

var typingEffect = new Typed(".typedText", {
    strings: ["Turning Clicks into Seamless Connections", "Bringing Ideas to life Through Code", "Giving the Online Presence You Deserve"],

    loop: true,
    typeSpeed: 70,
    backSpeed: 60,
    backDelay: 2000,
    showCursor: false,

});



/*--------Scroll Animation-------*/

const sr = ScrollReveal({
    origin: "top",
    distance: "80px",
    duration: 2000,
    reset: true,
});

sr.reveal(".my-name", {delay: 100});
sr.reveal(".featured-name", {delay: 100});
// sr.reveal(".text-info", {delay: 200});
sr.reveal(".text-btn", {delay: 200});
sr.reveal(".social_icons", {delay: 200});
sr.reveal(".featured-image", {delay: 320});

sr.reveal(".project-box", {interval: 200});

sr.reveal(".top-header", {});

const srLeft = ScrollReveal({
    origin: "left",
    distance: "80px",
    duration: 2000,
    reset: true,
})

srLeft.reveal(".about-info", {delay: 100});
srLeft.reveal(".contact-info", {delay: 100});

const srRight = ScrollReveal({
    origin: "right",
    distance: "80px",
    duration: 2000,
    reset: true,
})

srRight.reveal(".form-control", {delay: 100});
srRight.reveal(".portfolio-img", {delay: 100});

const srBottom = ScrollReveal({
    origin: "bottom",
    distance: "80px",
    duration: 2000,
    reset: true,
})

srBottom.reveal(".skills", {delay: 100});
srBottom.reveal(".tagcloud-container", {delay: 100});


/*----active link----*/

const sections = document.querySelectorAll("section[id]");

  function scrollActive() {
    const scrollY = window.scrollY;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 50;
      const sectionId = current.getAttribute("id");

      const navLink = document.querySelector(".nav-menu a[href*=" + sectionId + "]");

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLink?.classList.add("active-link");
      } else {
        navLink?.classList.remove("active-link");
      }
    });
  }

  window.addEventListener("scroll", scrollActive);

// About-me tagcloud
// const myTags = [
//     'HTML', 'CSS', 'JavaScript', 'React', 'PHP',
//     'NodeJS', 'MySQL', 'Git', 'Github', 'Flutter'
//   ];

// const container = '#tagcloud';

//   const options = {
//     radius: 200,
//     maxSpeed: 'normal',
//     initSpeed: 'normal',
//     direction: 135,
//     keep: true
//   };

//   TagCloud(container, myTags, options);

const myTags = [
  'ReactJs', 'TypeScript', 'PHP',
'Node.js', 'Next.js', 'MySQL', 'PostgreSQL', 'Flutter'
];

const container = '#tagcloud';
let tagCloudInstance;

function createTagCloud() {
  // Destroy existing TagCloud instance if present
  if (tagCloudInstance?.destroy instanceof Function) {
    tagCloudInstance.destroy();
  }

  const screenWidth = window.innerWidth;

  // Define options - you can tweak radius or speed per screen size here if needed
  const options = {
    radius: 240,
    maxSpeed: 'normal',
    initSpeed: 'normal',
    direction: 135,
    keep: true
  };

  tagCloudInstance = TagCloud(container, myTags, options);
}

// Initialize TagCloud on page load
createTagCloud();

// Debounce function to limit how often resize triggers
function debounce(func, delay) {
  let timer;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(func, delay);
  };
}

// Reinitialize TagCloud on window resize with debounce
window.addEventListener('resize', debounce(createTagCloud, 200));




//   e-mail


document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const formData = new FormData(this);

    fetch('send-mail.php', {
      method: 'POST',
      body: formData
    })
    .then(res => res.text())
    .then(data => {
      alert(data);
      this.reset();
    })
    .catch(err => {
      alert('Message failed to send');
      console.error(err);
    });
  });


