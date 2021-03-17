import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'northwind';
  user: string = 'eyyüp sayılır';
  
}
//BURASI datatyı yonettiğimiz yerin ta kendissi
//componeten -> htmşl datasının yönettiği yer
//{-> demek obje demekir. obje içerisnde bir çok özellik verileblir
//[-> demek array demek
//Angular da veri göstermek için{{}} şeklinde kullanılır
//any-> her türlü veri tipi olur ve {}->obje demektir
//built-in->kendi içinde hazır olan