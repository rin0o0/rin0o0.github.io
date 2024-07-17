function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}

function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}

document.querySelectorAll(".carousel").forEach((carousel) => {
    const items = carousel.querySelectorAll(".carousel__item");
    const buttonsHtml = Array.from(items, () => {
        return `<span class="carousel__button"></span>`;
    });
  
    carousel.insertAdjacentHTML(
      "beforeend",
      `
          <div class="carousel__nav">
              ${buttonsHtml.join("")}
          </div>
      `
    );
  
    const buttons = carousel.querySelectorAll(".carousel__button");
  
    buttons.forEach((button, i) => {
      button.addEventListener("click", () => {
        // un-select all the items
        items.forEach((item) =>
          item.classList.remove("carousel__item--selected")
        );
        buttons.forEach((button) =>
          button.classList.remove("carousel__button--selected")
        );
  
        items[i].classList.add("carousel__item--selected");
        button.classList.add("carousel__button--selected");
      });
    });
  
    // Select the first item on page load
    items[0].classList.add("carousel__item--selected");
    buttons[0].classList.add("carousel__button--selected");
  });
  

  var counter = 2
  setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++
    if (counter > 5){
      counter = 1;
    }
  }, 4000);


  //===========================SENDING TO EMAIL FUNCTION=============================

function SendMail(){
  var params = {
      from_name : document.getElementById("name").value,
      phone_number : document.getElementById("phone_no").value,
      message : document.getElementById("message").value,
      email : document.getElementById("email_ad").value
  }
  emailjs.send("service_tsb95n1","template_zh0v6xy", params);
}

//===========================BUTTON ANIMATION===================================
send_btn = document.querySelector(".send-btn");

send_btn.onclick = function(){
    this.innerHTML = "<div class='loader'></div>";
    setTimeout(() => {
        this.innerHTML ="Message Sent";
        this.style = "background: black; color:white; pointer-events:none;";
    },2000)
    SendMail();
}



dnl_btn = document.querySelector(".dnl-btn");

dnl_btn.onclick = function(){
    this.innerHTML = "<div class='loader'></div>";
    setTimeout(() => {
        this.innerHTML ="Downloaded";
        this.style = "background: grey; color:black; pointer-events:none;";
    },1500)
}
