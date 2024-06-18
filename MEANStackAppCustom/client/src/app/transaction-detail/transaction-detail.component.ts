import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TransactionService } from '../transaction.service';

@Component({
  selector: 'app-transaction-detail',
  templateUrl: './transaction-detail.component.html',
  styleUrl: './transaction-detail.component.css'
})
export class TransactionDetailComponent{

  transactionId = '';
  transactionDate = '';
  transactionComments = '';

  constructor(private route: ActivatedRoute, private router: Router, private transactionService: TransactionService) { 
    this.route.queryParams.subscribe(params => {
      this.transactionId = params["id"];
      this.transactionDate = (new Date(parseInt(params["date"]))).toLocaleDateString();
      this.transactionComments = params["comments"];
    });
  }

  back(): void {
    this.router.navigate(['/transactionList']);
  }

  update(): void {
    this.transactionService.updateComment(this.transactionId, this.transactionComments).subscribe(data => {
      if(data.modifiedCount == 1){
        alert("Comments Updated");
      }
      else{
        alert("Comments Update failed, please try again!");
      }
    })
  }
}
