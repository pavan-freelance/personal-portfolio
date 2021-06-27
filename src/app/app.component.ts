import { Component, OnInit, HostListener } from '@angular/core';
import { faFacebook, faTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faMobileAlt, faLaptop, faServer, faCodeBranch } from '@fortawesome/free-solid-svg-icons';
import { environment } from '../environments/environment';

declare let ga: Function;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isCollapsed = true;
  faFacebook = faFacebook;
  faTwitter = faTwitter;
  faLinkedin = faLinkedin;
  faInstagram = faInstagram;
  faMobileAlt = faMobileAlt;
  faLaptop = faLaptop;
  faServer = faServer;
  faCodeBranch = faCodeBranch;

  screenWidth: any;
  screenHeight: any;

  socialLinks = {
    facebook: 'https://www.facebook.com/pavan.mp.54/',
    instagram: 'https://www.instagram.com/pavan_2304/',
    twitter: 'https://twitter.com/mppavan23',
    linkedin: 'https://www.linkedin.com/in/pavan-reddy-a64651148/',
    mail: 'mailto:pavanreddy.freelance@gmail.com'
  };

  ngOnInit() {
    if (environment.production) {
      ga('create', 'G-J3FGDEBVLK', 'auto');
      ga('send', 'pageview');
    }

    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;
    console.log(this.screenWidth);
  }

  onToggle() {
    if (this.screenWidth < 769) {
      this.isCollapsed = !this.isCollapsed;
    }
  }

  openSocialLink(link: string) {
    window.open(this.socialLinks[link], '_blank');
  }
}
