import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransactionListComponent } from './transaction-list/transaction-list.component';
import { TransactionDetailComponent } from './transaction-detail/transaction-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/transactionList', pathMatch: 'full' },
  { path: 'transactionList', component: TransactionListComponent },
  { path: 'transactionDetail', component: TransactionDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
