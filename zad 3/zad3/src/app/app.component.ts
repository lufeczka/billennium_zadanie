import { Component, OnInit, Inject, ViewChildren, QueryList, AfterViewInit } from '@angular/core';
import { tree_token } from '../assets/mock_tree.js';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { ConsoleReporter } from 'jasmine';

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

  printChecked(item) {
    if (this.openArray.indexOf(item.value) !== -1) {
      this.openArray.splice(this.openArray.indexOf(item.value), 1);
      this.deleteChildren(item, this.openArray);
    } else {
      this.addParentWithChildren(item, this.openArray);
    }
    document.getElementById('array').innerText = this.openArray.toString();
    console.log(this.openArray)
  }

  deleteChildren(item, array) {
    if (item.children) {
      item.children.forEach(element => {
        if (array.indexOf(element.value) !== -1) {
          array.splice(array.indexOf(element.value), 1);
        }
      });
    }
  }

  addParentWithChildren(item, array) {
    array.push(item.value);
    if ( item.children ) {
      item.children.forEach(element => {
        if (array.indexOf(element.value) === -1) {
          array.push(element.value);
        }
      });
    }
  }

  getvalue() {
    this.search = document.getElementById('search')['value'];
  }

  checkParent(item) {
    let flag = false;

    item.children.forEach(element => {
      if (this.checkChildren(element.value)) {
        flag = true;
      }
    });

    if (this.search.toLocaleLowerCase().startsWith(item.value.toString().toLocaleLowerCase()) || flag || this.search === '' ) {
      return true;
    }
    return false;
  }

  checkChildren(itemvalue) {
    if (this.search === '' || itemvalue.toString().toLocaleLowerCase().includes(this.search.toLocaleLowerCase())) {
      return true;
    }
    return false;
  }
}


