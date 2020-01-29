import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.css']
})
export class FeatureComponent implements OnInit {
  feature: string;
  id: string;
  paramsSubscriptions: Subscription;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.feature = this.route.snapshot.paramMap.get('feature');
    this.id = this.route.snapshot.paramMap.get('id');
    this.paramsSubscriptions = this.route.paramMap.subscribe(
      (paramMap: ParamMap) => {
        this.feature = paramMap.get('feature');
        this.id = paramMap.get('id');
      }
    );
  }

}
