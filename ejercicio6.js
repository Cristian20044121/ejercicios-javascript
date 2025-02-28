const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  let xhr = new XMLHttpRequest();
  xhr.open("get", "plantilla6.html");
  xhr.addEventListener("load", () => {
    if (xhr.status == 200) {
        console.log(xhr.response);
      const div = document.querySelector(".div");
      div.innerHTML = xhr.response;
    }
  });
  xhr.send();
});
