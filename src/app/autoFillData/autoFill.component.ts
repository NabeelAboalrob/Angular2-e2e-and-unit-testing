import { Component, OnInit } from '@angular/core';
import { autoFill }          from './autoFill.service';
import { Posts }             from './Posts';

@Component({
  selector: 'Auto-Fill-Form',
  templateUrl: './autoFill.component.html',
  styleUrls: ['./autoFill.component.css'],
  providers: [autoFill]
})

export class autoFillComponent implements OnInit{
  formTitle = 'API Auto-filled form';
  userIdLabel = 'User ID';
  idLabel = 'ID';
  titleLabel = 'Title';
  bodyLabel = 'Body';

  Posts : Posts;
  Title = "";
  UserID = 0;
  Body = "";
  ID = 0;

  constructor(private _autoFill:  autoFill){ }

   getPosts(): void {
    this._autoFill.getAllItems() .subscribe(Posts => {
        this.Title = Posts[0].title;
        this.UserID = Posts[0].userId;
        this.ID = Posts[0].id;
        this.Body = Posts[0].body;
    });
  }
 
  ngOnInit(): void {
    this.getPosts();
  }}
