import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {

  title: string = "";
  imgSrc: string = "";
  getPopHome() {
    this.title = "LOG CABIN";
    this.imgSrc = "assets/images/cabin.png";
    document.getElementById("popUp")?.classList.remove("d-none");
  }

  getPopCake() {
    this.title = "TASTY CAKE";
    this.imgSrc = "assets/images/cake.png";
    document.getElementById("popUp")?.classList.remove("d-none");
  }

  getCircusPop() {
    this.title = "CIRCUS TENT";
    this.imgSrc = "assets/images/circus.png";
    document.getElementById("popUp")?.classList.remove("d-none");
  }
  getGamePop() {
    this.title = "CONTROLLER";
    this.imgSrc = "assets/images/game.png";
    document.getElementById("popUp")?.classList.remove("d-none");
  }
  getSafePop() {
    this.title = "LOCKED SAFE";
    this.imgSrc = "assets/images/safe.png";
    document.getElementById("popUp")?.classList.remove("d-none");
  }
  getSubPop() {
    this.title = "SUBMARINE";
    this.imgSrc = "assets/images/submarine.png";
    document.getElementById("popUp")?.classList.remove("d-none");
  }

  closePopUp() {
    document.getElementById("popUp")?.classList.add("d-none");
  }
}
