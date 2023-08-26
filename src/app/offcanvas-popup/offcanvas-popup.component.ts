import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-offcanvas-popup',
  templateUrl: './offcanvas-popup.component.html',
  styleUrls: ['./offcanvas-popup.component.css'],
})
export class OffcanvasPopupComponent implements OnInit {
  progress = 1;
  progressBarHidden = false;
  toggleHidden = false;
  toggle!: boolean;

  constructor() {}

  ngOnInit(): void {
    this.startProgress();
  }

  startProgress(): void {
    const interval = setInterval(() => {
      if (this.progress < 100) {
        this.progress++;
        this.closeAlert();
      } else {
        let toggle = document.querySelector<HTMLElement>('.btn-container');
        clearInterval(interval);
        this.progressBarHidden = true;
        this.toggleHidden = true;
        this.showCustomAlert();
      }
    }, 100);
  }

  toggleProgressBar(): void {
    this.progressBarHidden = !this.progressBarHidden;
  }

  showCustomAlert(): void {
    const customAlert = document.getElementById('customAlert');
    if (customAlert) {
      customAlert.style.display = 'block';
    }
  }
  closeAlert(): void {
    const customAlert = document.getElementById('customAlert');
    if (customAlert) {
      customAlert.style.display = 'none';
    }
  }
}
