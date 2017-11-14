import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import * as firebase from 'firebase/app'; // for typings
import { FirebaseApp } from 'angularfire2'; // for methods

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.less']
})
export class BlogComponent implements OnInit {
  categories;

  constructor(private db: AngularFireDatabase, private fb: FirebaseApp, private router: Router) {}

  ngOnInit() {
    this.db.list('/BlogCategory').subscribe((cats) => {
      this.categories = cats.sort((a, b) => {
        if (a.SortOrder < b.SortOrder) {
          return -1;
        }
        return 1;
      });

      this.categories.forEach((cat) => {
        if (cat.ImageUrl) {
          const storageRef = this.fb.storage().ref().child(cat.ImageUrl);
          storageRef.getDownloadURL().then(url => {
            cat.Image = url;
          });
        } else {
          cat.Image = '/assets/images/IMG_0090.JPG';
        }
      });
    });

    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
      window.scrollTo(0, 0);
    });
  }
}
