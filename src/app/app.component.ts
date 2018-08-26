import { Component } from '@angular/core';
import { TestItemService } from './test-item.service';
import { Observable } from '../../node_modules/rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'My First Angular App';
  subTitle: string = 'A test bed..';
  message: string = '';

  constructor(private testItemService: TestItemService){
  }

  ngOnInit() {
    this.subTitle = this.testItemService.getSubTitle();
    let testItemReturned : Observable<string> = this.testItemService.getTestItem();
    testItemReturned.subscribe((item) => {
      this.message = item;
    });
  }

}
