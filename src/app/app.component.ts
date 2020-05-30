import { Component, OnInit } from '@angular/core';
import { FetchdataService } from './services/fetchdata.service';
import { IUser } from './models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private fetchDataService: FetchdataService) {
    this.config = {
      itemsPerPage: 10,
      currentPage: 1,
      totalItems: 0
    }

  }
  UserList: Array<IUser> = [];
  config: any;
  searchTerm: string = '';
  sortDir = 1;

  ngOnInit() {
    this.fetchUsers();
  }

  pageChanged(event) {
    this.config.currentPage = event;
  }

  fetchUsers() {
    this.fetchDataService.getUsers().subscribe(
      (response) => {
        this.UserList = response;
        this.config.totalItems = this.UserList.length;
      });
  }

  onSortClick(event, colName) {
    console.log(colName);
    let target = event.currentTarget,
      classList = target.classList;

    if (classList.contains('fa-arrow-up')) {
      classList.remove('fa-arrow-up');
      classList.add('fa-arrow-down');
      this.sortDir=-1;
    } else {
      classList.add('fa-arrow-up');
      classList.remove('fa-arrow-down');
      this.sortDir=1;
    }
    this.sortArr(colName);
  }

  sortArr(colName:any){
    this.UserList.sort((a,b)=>{
      let tempa= a[colName].toLowerCase();
      let tempb= b[colName].toLowerCase();
      return tempa.localeCompare(tempb) * this.sortDir;
    });
  }
}
