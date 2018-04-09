import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './route-data-example.component.html'
})
export class RouteDataExampleComponent implements OnInit {

  public projectName: string;

  constructor(private _route: ActivatedRoute) {

  }


  ngOnInit(): void {
    this._route.data.subscribe(x => {
      this.projectName = x.projectName;
    });
  }

}
