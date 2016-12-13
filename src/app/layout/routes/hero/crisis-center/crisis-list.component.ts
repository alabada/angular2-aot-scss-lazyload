import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { Crisis, CrisisService } from './crisis.service';

@Component({
  templateUrl: './crisis-list.component.html',
  styleUrls: ['../styles.css']
})
export class CrisisListComponent implements OnInit {
  crises: Crisis[];
  public selectedId: number;

  constructor(
    private service: CrisisService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  isSelected(crisis: Crisis) {
    return crisis.id === this.selectedId;
  }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      this.selectedId = params['id'];
      this.service.getCrises()
        .then(crises => this.crises = crises);
    });
  }

  // 相对导航
  onSelect(crisis: Crisis) {
    this.selectedId = crisis.id;

    this.router.navigate([crisis.id], { relativeTo: this.route });
  }
}
