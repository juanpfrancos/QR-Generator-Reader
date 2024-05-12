import { Component, OnInit } from '@angular/core';
import { QrCodeService } from '../qrservice.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-generateqr',
  templateUrl: './generateqr.component.html',
  imports: [CommonModule],
  standalone: true
})
export class GenerateqrComponent implements OnInit {
  qrCodeBase64: string = "iVBORw0KGgoAAAANSUhEUgAAAZoAAAGaAQAAAAAefbjOAAADLElEQVR4nO2bTc6cOBCGnxos9RKkHKCPYm6QI0VzpLkBPkoOEAkvWwK9s7AN/SWzSNIa6HQXCxpsHlEW7nL92cQvH+mvX2fAIYcccsghhxx6TcjqEbARIFnAxmwGrAa5PTCeIp5DB0Kh/MQJIH8CWAOwmtJ1CZA/CegWAOxo8Rw6DcpNAaShE3Huig9idr2VDjML54nn0GFQ+KElhwX6BcgB4oQgnyWeQ6dDmr67LcbE//Amh54TajqiF5CrpSAAi/OAlY7Wdrh4Dp0FJTMzG4A4g405AHQifg3YyFpcjbPEc+hoHbErAJFXU7reytdXut5MHzXE04/JoUcgJEnQS0Anae7KraSlPhO1VAMjStL05GNy6BGozAhNgKZeqt+crlwRZ9DUL/UknxGvDjUdsasHOjW9sdxNhv1hnxEvDdWPLC1VR9CrRKh25UGcoaoMnxGvDhXLsjoR2RCsQWmoTSoB7BKhWpur+uRjcugRqC0Ed4tD11RBv1RTUlqQdr3x5GNy6BGo/e1zwOAii9NqJKsOp7Yr6G+mo8Vz6DyoE1FLSYRr6hfsy9dAy3Bc9J/QceI5dBRUfY3YYg+7eamp3/zQeXNGfdV4deiD96mF4mZMm8ooOsLjEe8DbZmumVYds0AUQB5KnwBZnNfjxXPoJEhTDtjYt+qYMQdqHBMwG9bijNp4ingOHR+PiFqNZJ0gDygNmNJnUctm/rnovkriycfk0CPQB8tyNyUl1QDEDNWOwOMR7wBtUewWu95yGECnu6sotyzfAbrPa6glvWu4snkdLUPuM+IdoK0+oq4LtQy7r4nwVjjRrjwe8SZQ0QJ3Yapcw5XSvNpeKXGSeA6dEaECYFsmWtSqnLbtG75qvA1UnQuwL/NWedvfbPc16ukc8Rw6Htr2dNHfTH8PoClfVOqzk5nVIu2TxHPoMOj7PV1KwyyLWk2wGnFaTSWenQc8G/6OUDYj2UW792kjnUjXzd7448bk0M8fP+7p6r8Fpc/fDOig1NLtxTIHi+fQWdC+p4uiFIA4r9Z2hNe20vGHjMmhB3TE/Z6uetKH5ruO332TQw455JBDDjn0atC/WLs9radCgB0AAAAASUVORK5CYII=";

  constructor(private qrCodeService: QrCodeService) { }

  ngOnInit(): void {
    this.qrCodeService.getQrCode().subscribe(
      response => {
        this.qrCodeBase64 = response.qr_code_base64;
      },
      error => {
        console.error("An error occurred while fetching QR code:", error);
        // Aquí puedes manejar el error si es necesario
      }
    );
  }
}
