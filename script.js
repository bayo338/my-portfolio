// function myMenuFunction() {
//     var menuBth = document.getElementById("myNavMenu");

//     if (menuBth.className === "nav-menu") {
//         menuBth.className += "responsive";
//     } else {
//         menuBth.className = "nav-menu";
//     }
// };

// function myMenuFunction() {
//     var menu = document.getElementById("myNavMenu");
  
//     // Toggle 'responsive' class
//     if (menu.classList.contains("responsive")) {
//       menu.classList.remove("responsive");
//     } else {
//       menu.classList.add("responsive");
//     }
//   };



  function myMenuFunction() {
    var menu = document.getElementById("myNavMenu");
    menu.classList.toggle("show");
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

const srBottom = ScrollReveal({
    origin: "bottom",
    distance: "80px",
    duration: 2000,
    reset: true,
})

srBottom.reveal(".skills", {delay: 100});
srBottom.reveal(".tagcloud-container", {delay: 100});


/*----active link----*/

const sections = document.querySelectorAll(".section[id]");

function scrollActive() {
    const scrollY = window.scrollY;

    sections.forEach((current) => {

        const sectionHeight = current.offsetHeight,

            sectionTop = current.offsetTop - 50,
            sectionId = current.getAttribute("id");

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionTop + sectionHeight) {
                document
                    .querySelector(".nav-menu a[href*=" + sectionId + "]")
                    .classList.add("active-link");
            } else {
                document
                    .querySelector(".nav-menu a[href*=" + sectionId + "]")
                    .classList.remove("active-link");
            }

    });
}

window.addEventListener("scroll", scrollActive);

const myTags = [
    'HTML', 'CSS', 'JavaScript', 'React', 'PHP',
    'NodeJS', 'MySQL', 'Git', 'Github', 'Flutter'
  ];

const container = '#tagcloud';

  const options = {
    radius: 200,
    maxSpeed: 'fast',
    initSpeed: 'normal',
    direction: 135,
    keep: true
  };

  TagCloud(container, myTags, options);


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


