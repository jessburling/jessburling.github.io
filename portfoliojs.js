function openNav() {
    document.getElementById("myNav").style.display = "block";
    hideBtn();
    hideLogo();
  }
  
  function closeNav() {
    document.getElementById("myNav").style.display = "none";
    showBtn();
    showLogo();
  }

function hideLogo() {
    document.getElementById("top-logo").style.visibility = "hidden";
}

function showLogo() {
    document.getElementById("top-logo").style.visibility = "visible";
}

function hideBtn() {
    document.getElementById("burger-icon").style.visibility = "hidden";
}

function showBtn() {
    document.getElementById("burger-icon").style.visibility = "visible";
}