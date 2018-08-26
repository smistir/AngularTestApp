import { Component, OnInit } from '@angular/core';
import { TestItemService } from './test-item.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'My First Angular App';
  subTitle: string = 'A test bed..';
  message: string = '';
  testDataList: string[] = [];

  constructor(private testItemService: TestItemService){
  }

  ngOnInit() {
    this.subTitle = this.testItemService.getSubTitle();
    
    //One Service Call - Get By ID
    let testItemReturned : Observable<string> = this.testItemService.getTestItem();
    testItemReturned.subscribe((item) => {
      this.message = item;
    });

    //Other Service Call - Get All
    let listItemsReturned : Observable<string[]> = this.testItemService.getTestItemsList();
    listItemsReturned.subscribe((dataList) => {
      this.testDataList = dataList;
    });
  }
}