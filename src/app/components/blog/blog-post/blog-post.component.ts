import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import * as firebase from 'firebase/app'; // for typings
import { FirebaseApp } from 'angularfire2'; // for methods

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.less']
})
export class BlogPostComponent implements OnInit {

  post;

  constructor(private route: ActivatedRoute, private db: AngularFireDatabase, private fb: FirebaseApp) { }

  ngOnInit() {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.db.object(`/BlogPost/${params.get('post')}`))
      .subscribe(p => {
        if (p.ImageUrl) {
          const storageRef = this.fb.storage().ref().child(p.ImageUrl);
          storageRef.getDownloadURL().then(url => {
            p.Image = url;
            this.post = p;
          });
        }  else {
          p.Image = '/assets/images/IMG_0091.JPG';
          this.post = p;
        }
      });
  }

}
