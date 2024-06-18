import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../transaction.service';
import { NavigationExtras, Router } from '@angular/router';


@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrl: './transaction-list.component.css',
  providers: [DatePipe]
})

export class TransactionListComponent implements OnInit{
  displayedColumns: string[] = ['id', 'date', 'Comments', 'Action'];
  dataSource = [];
  startDate = '1638997755000';
  endDate = '1639502071000';

  constructor(
    private datePipe: DatePipe, 
    private transactionService: TransactionService, 
    private router: Router
  ){}
  
  ngOnInit(){
    this.transactionService.getAllTransactionData(this.startDate, this.endDate).subscribe(data => {
      this.dataSource = data;
    })
  }  

  showDetails(id: string, date: Number, comments: string){
    const navigationExtras: NavigationExtras = {
      queryParams: { "id": id, "date": date, "comments": comments } ,
      skipLocationChange: true,
    }
      
    this.router.navigate(['/transactionDetail'], navigationExtras);
  }
}