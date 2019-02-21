import { Component, OnInit, Inject } from '@angular/core';
import { tree_token } from '../assets/mock_tree.js';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'zad3';
  openArray = [];

  constructor (
    @Inject(tree_token) private tree_: any[]
  ) { }

  ngOnInit() {
    this.tree_.forEach(element => {
      this.openArray.push(false);
      element.ifdrop = false;
      element.ifchecked = false;
    });
    console.log(this.tree_);
  }

  
  fn() {
    console.log('elo')
  }


}


