import { Component, OnInit } from '@angular/core';
// 1. Import the UserService
import { ArticlesService } from '../articles.service';

// 2. Import the User Object/Schema
import { Article } from '../article';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {
  articles: Article
  constructor(private articlesService: ArticlesService) { }

  ngOnInit(){
    this.getArticles();
  }

  getArticles(): void {
    this.articlesService.getArticles().subscribe(
      (response:any) => {
        this.articles = response.articles
        // console.log(this.articles)
      }
    );
  }

}
