import { Component, OnInit } from '@angular/core';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import * as firebase from 'firebase/app'; // for typings
import { FirebaseApp } from 'angularfire2'; // for methods

@Component({
  selector: 'app-blog-all',
  templateUrl: './blog-all.component.html',
  styleUrls: ['./blog-all.component.less']
})
export class BlogAllComponent implements OnInit {
  posts;

  constructor(private db: AngularFireDatabase, private fb: FirebaseApp) { }

  ngOnInit() {
    this.db.list('/BlogPost').subscribe((posts) => {
      posts.forEach((p) => {
        const postCopy = p.Post.replace(/<img.*\/>|<a.*">|<\/a>/g, '');

        p.Preview = postCopy.length > 100 ? postCopy.substring(0, 100) + '...' : postCopy;

        if (p.ImageUrl) {
          const storageRef = this.fb.storage().ref().child(p.ImageUrl);
          storageRef.getDownloadURL().then(url => {
            p.Image = url;
          });
        } else {
          p.Image = '/assets/images/IMG_0091.JPG';
        }
      });

      this.posts = posts.sort((a, b) => {
        return new Date(b.Date).getTime() - new Date(a.Date).getTime();
      });
    });
  }

}
