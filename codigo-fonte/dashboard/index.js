document.addEventListener('DOMContentLoaded', function () {
  let sidebar = document.querySelector(".sidebar");
  let sidebarBtn = document.querySelector(".sidebarBtn");
  sidebarBtn.onclick = function() {
    sidebar.classList.toggle("active");
    if(sidebar.classList.contains("active")){
      sidebarBtn.classList.replace("bx-menu" ,"bx-menu-alt-right");
    }else
      sidebarBtn.classList.replace("bx-menu-alt-right", "bx-menu");
  }

  document.getElementById("profile-icon").addEventListener("click", function() {
    document.querySelector(".dropdown-menu").classList.toggle("show");
  });

  function setStatus(status) {
    console.log("Status alterado para:", status);
    document.querySelector(".dropdown-menu").classList.remove("show");
  }
});
