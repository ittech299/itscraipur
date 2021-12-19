window.onload = function () {
    console.log("loaded")
    var typed = new Typed('#typed', {
        strings: ["Welcome to Information Technology Support Center", "All Types Of Online Forms","Multi Color Designing","All Type Of Printing Work","Estamp","All Types Of Computer Related Works"],
        backSpeed: 15,
        smartBackspace: true,
        backDelay: 1200,
        startDelay: 1000,
        typeSpeed: 25,
        loop: true,
    });
};

/* Hamburger */

burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navlist = document.querySelector('.nav-list')
img = document.querySelector('.img-primary')


burger.addEventListener('click',()=>{
    navlist.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp');
    img.classList.toggle('img-resp');
    
})
//contact form
window.addEventListener("DOMContentLoaded", function () {
  // get the form elements defined in your form HTML above

  var form = document.getElementById("my-form");
  // var button = document.getElementById("my-form-button");
  //var status = document.getElementById("status");

  // Success and Error functions for after the form is submitted

  function success() {
   // form.reset();
    //status.classList.add("success");
    //status.innerHTML = "Thanks!";
    alert('Your Mail Has Been Send Successfully');
  }

  function error() {
    //status.classList.add("error");
    alert('There Is Some Technical Problem In Sending Email')
  }

  // handle the form submission event

  form.addEventListener("submit", function (ev) {
    ev.preventDefault();
    var data = new FormData(form);
    ajax(form.method, form.action, data, success, error);
  });
});

// helper function for sending an AJAX request

function ajax(method, url, data, success, error) {
  var xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200) {
      success(xhr.response, xhr.responseType);
    } else {
      error(xhr.status, xhr.response, xhr.responseType);
    }
  };
  xhr.send(data);
}