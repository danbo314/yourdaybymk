import { Component } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import * as firebase from 'firebase/app'; // for typings
import { FirebaseApp } from 'angularfire2'; // for methods

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.less']
})
export class BlogComponent {
  categories;
  posts;

  private JSObject: Object = Object;

  constructor(db: AngularFireDatabase, private fb: FirebaseApp) {
    db.list('/BlogCategory').subscribe((cats) => {
      this.categories = cats.sort((a, b) => {
        if (a.SortOrder < b.SortOrder) {
          return -1;
        }
        return 1;
      });
      this.categories.forEach((cat) => {
        if (cat.BlogPosts) {
          for (const key in cat.BlogPosts) {
            if (cat.BlogPosts.hasOwnProperty(key)) {
              db.object(`/BlogPost/${key}`).subscribe((p) => {
                if (p.ImageUrl) {
                  const storageRef = fb.storage().ref().child(p.ImageUrl);
                  storageRef.getDownloadURL().then(url => {
                    p.Image = url;
                    cat.BlogPosts[key] = p;
                  });
                } else {
                  p.Image = '/assets/images/IMG_0091.JPG';
                  cat.BlogPosts[key] = p;
                }
              });
            }
          }
        }
      });
    });
  }
}
