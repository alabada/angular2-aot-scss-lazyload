import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';

import {Hero, HeroService}  from './hero.service';

@Component({
    template: `
    <h2>HEROES</h2>
    <ul class="items">
      <li *ngFor="let hero of heroes"
        [class.selected]="isSelected(hero)"
        (click)="onSelect(hero)">
        <span class="badge">{{hero.id}}</span> {{hero.name}}
      </li>
    </ul>
  `,
    styleUrls: ['../styles.css']
})
export class HeroListComponent implements OnInit {
    heroes: Hero[];

    private selectedId: number;

    // 依赖注入 路由服务和其他服务
    constructor(private service: HeroService,
                private route: ActivatedRoute,
                private router: Router) {
    }

    ngOnInit() {
        this.route.params.forEach((params: Params) => { // 使用 ActivatedRoute 来访问 params 这个 Observable ，以便我们订阅它，并把其中的 id 参数提取到 selectedId 中
            this.selectedId = +params['id']; // 所有的路由参数或查询参数都是字符串。
            this.service.getHeroes()
                .then(heroes => this.heroes = heroes);
        });
    }

    isSelected(hero: Hero) {
        return hero.id === this.selectedId;
    }

    // 命令式的导航到详情组件
    onSelect(hero: Hero) {
        this.router.navigate(['../ahero', hero.id], { relativeTo: this.route });
    }

}
