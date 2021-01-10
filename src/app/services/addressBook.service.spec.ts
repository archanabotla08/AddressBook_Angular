import { AddressBookService } from '@angular/cli/bin/AddressBook/src/app/services/addressBook.service';
import { TestBed } from '@angular/core/testing';



describe('AddressBookService', () => {
  let service: AddressBookService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddressBookService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});