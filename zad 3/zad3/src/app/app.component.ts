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
  search = '';

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
    console.log('1')
    if (this.openArray.indexOf(item) !== -1) {
      this.openArray.splice(this.openArray.indexOf(item), 1);
    } else {
      this.openArray.push(item);
    }
    document.getElementById('array').innerText = this.openArray.toString();
  }

  getvalue(){
    this.search = document.getElementById('search').value;
  }

  checkParent(itemvalue) {
    if (this.search === '') {
      return true;
    }
    if(this.search.toLocaleLowerCase().startsWith(itemvalue.toString().toLocaleLowerCase())) {
      return true;
    }
    return false;
  }

  checkChildren(itemvalue) {

    if (this.search === '') {
      return true;
    }
    if(itemvalue.toString().toLocaleLowerCase().includes(this.search.toLocaleLowerCase()) {
      return true;
    }
    return false;
  }
}


