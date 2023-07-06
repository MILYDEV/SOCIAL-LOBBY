
var menuList = document.getElementById("menuList")

menuList.style.maxHeight = "0px";

function togglemenu() {
    if (menuList.style.maxHeight == "0px")
        {
            menuList.style.maxHeight = "150px"
        }
    else
        {
            menuList.style.maxHeight = "0px"
        }
}


    function updateLiveTime() {
      var currentDate = new Date();
      var day = currentDate.getDate();
      var month = currentDate.getMonth() + 1; // Ingat: Januari dimulai dari 0
      var year = currentDate.getFullYear();

      var formattedTime = day + ' / ' + month + ' / ' + year;

      // Memperbarui konten tag h4 dengan waktu terkini
      document.getElementById('live-time').textContent = formattedTime;
    }

    setInterval(updateLiveTime, 1000);