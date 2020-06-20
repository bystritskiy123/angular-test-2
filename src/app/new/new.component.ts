import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent implements OnInit {
  visibility:boolean = true
  toggle(){
    this.visibility = !this.visibility
  }
  constructor() { }

  ngOnInit(): void {
  }

}
