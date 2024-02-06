
let body_x = document.querySelector("body") ;
let main = document.querySelector(".main") ;

body_x.addEventListener("click", (e)=>{
  if (e.target.classList[0] == "image") {
    main.innerHTML = `<img src=${e.target.dataset.url} alt=""> <i class="fa-solid fa-xmark"></i>`;
    main.classList.add("main2") ;
  } else {
    main.classList.remove("main2") ;
    main.innerHTML = "" ;
  }
})
