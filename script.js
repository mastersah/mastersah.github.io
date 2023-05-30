function toggleClass(className) {
    const nav_elem = ["home","courses","awards","publications"]; //,"sketching"];
    for (let i = 0; i < nav_elem.length; i++) {
        document.getElementById(nav_elem[i]).classList.add("hidden");
        document.getElementById(nav_elem[i]).classList.remove("visible");
        // console.log(className+" "+nav_elem[i])
    }
    document.getElementById(className).classList.remove("hidden");
    document.getElementById(className).classList.add("visible");
  }

  function addactive(index) {
    const litem = document.querySelectorAll('.navbar li');
    litem.forEach(item => {
        item.classList.remove("visiting")
    });
    litem[index].classList.add("visiting")
  }