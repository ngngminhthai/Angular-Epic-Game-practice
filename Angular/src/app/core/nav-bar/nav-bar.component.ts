import { AfterViewInit, Component, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../services/account.service';
import { CartService } from '../services/cart.service';
import { FormGroup, FormControl } from '@angular/forms';
import { FormService } from '../services/form.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit, AfterViewInit {


  cartNumber: number;
  form: FormGroup;


  currentUser: string;

  constructor(private formService: FormService, private renderer: Renderer2, private cartService: CartService, private router: Router, private accountService: AccountService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      myInput: new FormControl('')
    });

    this.cartNumber = this.cartService.cartLenght;
    this.cartService.cartNumber.subscribe((data: number) => {
      console.log(data);
      this.cartNumber = data;
    })
    this.currentUser = this.accountService.currentUser;
    this.accountService.userSubcribe.subscribe((user: string) => {
      this.currentUser = user;
      console.log(this.currentUser);
    })
  }

  ngAfterViewInit() {
    setTimeout(() => {

      var elem = this.renderer.selectRootElement('#myInput');

      // this.renderer.listen(elem, "focus", () => { console.log('focus') });

      // this.renderer.listen(elem, "blur", () => { console.log('blur') });

      elem.focus();

    }, 1000);
  }

  
  handleInput() {
    this.formService.setContentInput(this.form.controls["myInput"].value);
  }

  login() {
    window.location.href = "login";
  }
  signUp() {
    window.location.href = "signup";
  }
  logout() {
    this.accountService.logout();
  }

}
