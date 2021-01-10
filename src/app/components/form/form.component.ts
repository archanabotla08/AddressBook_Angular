import { AddressBookData } from '@angular/cli/bin/AddressBook/src/app/models/addressBookData';
import { AddressBookService } from '@angular/cli/bin/AddressBook/src/app/services/addressBook.service';
import { Component, OnInit } from '@angular/core';
import { FormControl,FormBuilder,FormGroup,Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
 

  addressBookData : AddressBookData = new AddressBookData();

  errorText: string;
  addressBookForm: any;
  addessBookId: any;
  isUpdate = false;

  constructor(
    private formBuilder: FormBuilder, 
    private addressBookService: AddressBookService,
    private router: Router, 
    private activatedRoute: ActivatedRoute ) {

    this. addressBookForm = this.formBuilder.group({
      name: ['', Validators.required],
      address: ['',],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zipCode: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      id: ['']
    });

    this.activatedRoute.params.subscribe(data => {
      if (data && data.id) {
        this.isUpdate = true;
        this.getDataById(data.id)
      }
    })

  }

  ngOnInit() {
  }

  nameValidation() {
    let nameRegex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$');
    if (nameRegex.test(this.addressBookData.name)){
        this.errorText = "";
    } else {
        this.errorText = 'Name is incorrect';
    }
  }

  phoneNumberValidation() {
    const phoneNumberRegex = RegExp('^[9][1][ ][6-9][0-9]{9}$');
    if (phoneNumberRegex.test(this.addressBookData.phoneNumber))
        this.errorText = '';
    else
        this.errorText = 'PhoneNumber is invalid.'
  }

  addressValidation(){
    const addressRegex = RegExp('^([A-Za-z0-9/,-]{3,}[ ]?)+$');
    if (addressRegex.test(this.addressBookData.address))
        this.errorText = '';
    else
        this.errorText = 'Adddress is invalid.'
  }

  getDataById(id): void {
    this.addressBookService.getAddressBookById(id).subscribe(respose => {
    this.setDataToFormBuilder(respose.data);
    }, err => {
      console.log("AddressBook Record");
    })
  }

  setDataToFormBuilder(object): void { 
    this.addressBookData.name=object.name,
    this.addressBookData.address=object.address,
    this.addressBookData.city=object.city,
    this.addressBookData.state=object.state,
    this.addressBookData.zipCode=object.zipCode,
    this.addressBookData.phoneNumber=object.phoneNumber,
    this.addressBookData.addressBookId=object.addressBookId,
    console.log(object);
  }

  onSubmit() {
    console.log("save");

    if (this.isUpdate) {
      console.log("response is ", this.addressBookData);
      this.addressBookService.updateAddressBookRecord(this.addressBookData, this.addressBookData.addressBookId).subscribe(response => {
        console.log("response is ", this.addressBookData);
        this.router.navigateByUrl('')
      }, err => {

      })
    } else {
      this.addressBookService.addAddressookRecord(this.addressBookData).subscribe(response => {
        console.log("response is ", response);
        this.router.navigateByUrl('');
      }, err => {
      })
    } 
  }

  reset(): void {
    this.addressBookForm.reset();
  }
}