import { Component, OnInit, Inject, ViewChildren, QueryList, AfterViewInit } from '@angular/core';
import { tree_token } from '../assets/mock_tree.js';
import { CheckboxComponent } from './checkbox/checkbox.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChildren(CheckboxComponent, {read: CheckboxComponent}) checkbox: QueryList<CheckboxComponent>;
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
    if (this.openArray.indexOf(item.value) !== -1) {
      this.openArray.splice(this.openArray.indexOf(item.value), 1);
      if (item.children) {
        item.children.forEach(element => {
          this.openArray.splice(this.openArray.indexOf(element.value), 1);
        });
      }
      document.getElementById('array').innerText = this.openArray.toString();

    } else {
      this.openArray.push(item.value);
      if ( item.children ) {
        item.children.forEach(element => {
          if (this.openArray.indexOf(element.value) === -1) {
            this.openArray.push(element.value);
          }
        });
        document.getElementById('array').innerText = this.openArray.toString();
      }
    }
  }

  getvalue() {
    this.search = document.getElementById('search')['value'];
  }

  checkParent(item) {
    let flag = false;
    if (this.search === '') {
      return true;
    }
    item.children.forEach(element => {
      if (element.value.toString().toLocaleLowerCase().includes(this.search.toLocaleLowerCase())) {
        flag = true;
      }
    });
    if (flag) {
      return true;
    }
    if (this.search.toLocaleLowerCase().startsWith(item.value.toString().toLocaleLowerCase())) {
      return true;
    }
    return false;
  }

  checkChildren(itemvalue) {
    if (this.search === '') {
      return true;
    }
    if (itemvalue.toString().toLocaleLowerCase().includes(this.search.toLocaleLowerCase())) {
      return true;
    }
    return false;
  }
}


