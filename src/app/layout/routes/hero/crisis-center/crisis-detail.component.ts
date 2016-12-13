import {
  Component, OnInit, HostBinding,
  trigger, transition,
  animate, style, state
}  from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {Crisis, CrisisService}         from './crisis.service';
import {DialogService}  from '../dialog.service';
@Component({
  template: `
  <div *ngIf="crisis">
    <h3>"{{editName}}"</h3>
    <div>
      <label>Id: </label>{{crisis.id}}</div>
    <div>
      <label>Name: </label>
      <input [(ngModel)]="editName" placeholder="name"/>
    </div>
    <p>
      <button (click)="save()">Save</button>
      <button (click)="cancel()">Cancel</button>
    </p>
  </div>
  `,
  styles: ['input {width: 20em}'],
  animations: [
    trigger('routeAnimation', [
      state('*',
        style({
          opacity: 1,
          transform: 'translateX(0)'
        })
      ),
      transition(':enter', [
        style({
          opacity: 0,
          transform: 'translateX(-100%)'
        }),
        animate('0.2s ease-in')
      ]),
      transition(':leave', [
        animate('0.5s ease-out', style({
          opacity: 0,
          transform: 'translateY(100%)'
        }))
      ])
    ])
  ]
})
export class CrisisDetailComponent implements OnInit {
  @HostBinding('@routeAnimation') get routeAnimation() {
    return true;
  }

  @HostBinding('style.display') get display() {
    return 'block';
  }

  @HostBinding('style.position') get position() {
    return 'absolute';
  }

  crisis: Crisis;
  editName: string;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private service: CrisisService) {
  }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      this.service.getCrisis(id).then(crisis => (this.crisis = crisis, this.editName = this.crisis.name));
    });
  }

  cancel() {
    this.gotoCrises();
  }

  save() {
    this.crisis.name = this.editName;
    this.gotoCrises();
  }


  gotoCrises() {
    let crisisId = this.crisis ? this.crisis.id : null;
    this.router.navigate(['../', {id: crisisId, foo: 'foo'}], {relativeTo: this.route}); // 相对导航

  }
}
