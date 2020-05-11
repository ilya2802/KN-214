function switchPrimary() {
  for (let i = 0; i < document.getElementsByTagName("a").length; i++) {
    document.getElementsByTagName("a")[i].style.color = "rgb(40, 253, 255)";
  }
  document.getElementsByClassName("header__title")[0].style.color =
    "rgb(40, 253, 255)";
  document.getElementsByClassName("advantages__fishka")[0].style.color =
    "rgb(40, 253, 255)";
  document.getElementsByClassName("boards__title")[0].style.color =
    "rgb(40, 253, 255)";
  document.getElementsByClassName("boadrs__text")[0].style.color =
    "rgb(40, 253, 255)";
  document.getElementsByClassName("boadrs__text")[1].style.color =
    "rgb(40, 253, 255)";
  document.getElementsByClassName("boadrs__text")[2].style.color =
    "rgb(40, 253, 255)";
  document.getElementsByClassName("channel__header")[0].style.color =
    "rgb(40, 253, 255)";
  document.getElementsByClassName("surprise__header")[0].style.color =
    "rgb(40, 253, 255)";
  document.getElementsByClassName("surprise__title")[0].style.color =
    "rgb(40, 253, 255)";
  document.getElementsByClassName("surprise__title")[1].style.color =
    "rgb(40, 253, 255)";
  document.getElementsByClassName("surprise__title")[2].style.color =
    "rgb(40, 253, 255)";
  document.getElementsByClassName("photo__header-span")[0].style.color =
    "rgb(40, 253, 255)";
  document.getElementsByClassName("photo__title")[0].style.color =
    "rgb(40, 253, 255)";
  document.getElementsByClassName("photo__title")[1].style.color =
    "rgb(40, 253, 255)";
  document.getElementsByClassName("photo__title")[2].style.color =
    "rgb(40, 253, 255)";

  document.getElementsByClassName("channel")[0].style.backgroundColor = "#fff";
  document.getElementsByClassName(
    "surprise__overlay"
  )[0].style.backgroundColor = "rgba(0,0,0,.8)";
  document.getElementsByClassName(
    "advantages__overlay"
  )[0].style.backgroundColor = "rgba(0,0,0,.8)";
  document.getElementsByClassName("overlay")[0].style.backgroundColor =
    "rgba(0,0,0,.8)";
  document.getElementsByClassName("overlay")[0].style.backgroundColor =
    "rgba(0,0,0,.8)";
  document.getElementsByClassName("surprise")[0].style.backgroundColor =
    "rgba(0,0,0,.8)";

  document.getElementsByClassName("photo")[0].style.backgroundColor = "#fff";
  document.getElementsByClassName("feedback__wrap")[0].style.backgroundColor =
    "#fff";
  document.getElementsByClassName("photo")[1].style.backgroundColor = "#fff";
  document.getElementsByClassName("header__info")[0].style.background =
    "url(img/ps.png) no-repeat center top";
  document.getElementsByClassName("header__info")[0].style.backgroundSize =
    "cover";
  document.getElementsByClassName("header__info")[0].style.backgroundPositionY =
    "-100em";

  document.body.style.backgroundColor = "#94e1ff";
}

function switchSecondary() {
  for (let i = 0; i < document.getElementsByTagName("a").length; i++) {
    document.getElementsByTagName("a")[i].style.color = "yellow";
  }
  document.getElementsByClassName("header__title")[0].style.color = "yellow";
  document.getElementsByClassName("advantages__fishka")[0].style.color =
    "yellow";
  document.getElementsByClassName("boards__title")[0].style.color = "yellow";
  document.getElementsByClassName("boadrs__text")[0].style.color = "yellow";
  document.getElementsByClassName("boadrs__text")[1].style.color = "yellow";
  document.getElementsByClassName("boadrs__text")[2].style.color = "yellow";
  document.getElementsByClassName("channel__header")[0].style.color = "yellow";
  document.getElementsByClassName("surprise__header")[0].style.color = "yellow";
  document.getElementsByClassName("surprise__title")[0].style.color = "yellow";
  document.getElementsByClassName("surprise__title")[1].style.color = "yellow";
  document.getElementsByClassName("surprise__title")[2].style.color = "yellow";
  document.getElementsByClassName("photo__header-span")[0].style.color =
    "yellow";
  document.getElementsByClassName("photo__title")[0].style.color = "yellow";
  document.getElementsByClassName("photo__title")[1].style.color = "yellow";
  document.getElementsByClassName("photo__title")[2].style.color = "yellow";

  document.getElementsByClassName("channel")[0].style.backgroundColor =
    "#94e1ff";
  document.getElementsByClassName(
    "surprise__overlay"
  )[0].style.backgroundColor = "#94e1ff";
  document.getElementsByClassName(
    "advantages__overlay"
  )[0].style.backgroundColor = "#94e1ff";
  document.getElementsByClassName("overlay")[0].style.backgroundColor =
    "94e1ff";
  document.getElementsByClassName("overlay")[0].style.backgroundColor =
    "94e1ff";
  document.getElementsByClassName("surprise")[0].style.backgroundColor =
    "94e1ff";

  document.getElementsByClassName("photo")[0].style.backgroundColor = "#903456";
  document.getElementsByClassName("feedback__wrap")[0].style.backgroundColor =
    "#000";
  document.getElementsByClassName("photo")[1].style.backgroundColor = "#903456";
  document.getElementsByClassName("header__info")[0].style.background =
    "url(img/gal2.jpg) no-repeat center top";

  let a = document.getElementById("header-id");
  a.classList.remove("header__info");
  a.classList.add("header__info2");

  document.body.style.backgroundColor = "#94e1ff";
}
