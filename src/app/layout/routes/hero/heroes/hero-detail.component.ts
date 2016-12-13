import { Component, OnInit, HostBinding,
  trigger, transition, animate,
  style, state } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Hero, HeroService }  from './hero.service';

@Component({
  template: `
  <h2>HEROES</h2>
  <div *ngIf="hero">
    <h3>"{{hero.name}}"</h3>
    <div>
      <label>Id: </label>{{hero.id}}</div>
    <div>
      <label>Name: </label>
      <input [(ngModel)]="hero.name" placeholder="name"/>
    </div>
    <p>
      <button (click)="gotoHeroes()">Back</button>
    </p>
  </div>
  `,
  animations: [
    trigger('routeAnimation', [
      state('*',
        style({
          opacity: 1,
          transform: 'translateX(0)'
        })
      ),
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translateX(-100%)'
        }),
        animate('0.2s ease-in')
      ]),
      transition('* => void', [
        animate('0.5s ease-out', style({
          opacity: 0,
          transform: 'translateY(100%)'
        }))
      ])
    ])
  ],
  styleUrls: ['../styles.css']
})
export class HeroDetailComponent implements OnInit {

  @HostBinding('@routeAnimation') get routeAnimation() {
    return true;
  }

  @HostBinding('style.display') get display() {
    return 'block';
  }

  @HostBinding('style.position') get position() {
    return 'absolute';
  }

  hero: Hero;

  constructor(
    private route: ActivatedRoute, // ActivatedRoute ：一站式获得路由信息
    private router: Router,
    private service: HeroService) {}

  ngOnInit() {
    this.route.params.forEach((params: Params) => { // 用 ActivatedRoute 服务来接收本路由的参数。使用到了params可观察对象
      let id = +params['id']; // (+) converts string 'id' to a number
      this.service.getHero(id).then(hero => this.hero = hero);
    });
  }

  gotoHeroes() {
    let heroId = this.hero ? this.hero.id : null;
    this.router.navigate(['../../heroes', { id: heroId, foo: 'foo' }], { relativeTo: this.route });
  }
}
