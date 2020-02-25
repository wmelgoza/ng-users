import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ArticlesService } from '../articles.service';
import { Article } from '../article';
import { Router } from '@angular/router';

@Component({
  selector: 'app-article-view',
  templateUrl: './article-view.component.html',
  styleUrls: ['./article-view.component.scss']
})
export class ArticleViewComponent implements OnInit {
  article: Article;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private articlesService: ArticlesService
    ) {}

   ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.getArticle(id);
  }
  getArticle(id): void {
    this.articlesService.getArticle(id).subscribe(
      (response:any) => {
        this.article = response.article
      }
    );
  }


}
