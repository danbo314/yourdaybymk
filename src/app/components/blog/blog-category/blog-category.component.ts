import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import * as firebase from 'firebase/app'; // for typings
import { FirebaseApp } from 'angularfire2'; // for methods

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-blog-category',
  templateUrl: './blog-category.component.html',
  styleUrls: ['./blog-category.component.less']
})
export class BlogCategoryComponent implements OnInit {

  cat;
  posts = [];

  constructor(private route: ActivatedRoute, private db: AngularFireDatabase, private fb: FirebaseApp) { }

  ngOnInit() {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.db.object(`/BlogCategory/${params.get('category')}`))
      .subscribe(cat => {
        this.cat = cat;
        this.posts = [];
        if (cat.BlogPosts) {
          for (const key in cat.BlogPosts) {
            if (cat.BlogPosts.hasOwnProperty(key)) {
              this.db.object(`/BlogPost/${key}`).subscribe((p) => {
                if (p.ImageUrl) {
                  const storageRef = this.fb.storage().ref().child(p.ImageUrl);
                  storageRef.getDownloadURL().then(url => {
                    p.Image = url;
                    this.posts.push(p);
                    this.sort();
                  });
                } else {
                  p.Image = '/assets/images/IMG_0091.JPG';
                  this.posts.push(p);
                  this.sort();
                }
              });
            }
          }
        }
      });
  }

  sort() {
    this.posts = this.posts.sort((a, b) => {
      return new Date(b.Date).getTime() - new Date(a.Date).getTime();
    });
  }

}
