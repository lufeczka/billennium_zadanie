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
  itemvalue: string;

  constructor (
    @Inject(tree_token) private tree_: any[]
  ) { }

  ngOnInit() {
    this.tree_.forEach(element => {
      element.ifdrop = false;
      element.ifchecked = false;
    });
  }

  fn(item) {
    if (this.openArray.indexOf(item) !== -1) {
      this.openArray.splice(this.openArray.indexOf(item), 1);
    } else {
      this.openArray.push(item);
    }
    document.getElementById('array').innerText = this.openArray.toString();
  }
}


