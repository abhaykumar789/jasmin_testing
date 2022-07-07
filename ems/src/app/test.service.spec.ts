import { TestBed } from '@angular/core/testing';

import { TestService } from './test.service';

describe('TestService', () => {
  let service: TestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestService);
  });

  it('[SPEC-1]: SERVICE IS CREATED', () => {
    expect(service).toBeTruthy();
  });
  
  it('[SPEC-2]: TEST CASE FOR RETURN Value FROM GETALLDATA METHOD', () => {
    service.getAllData().subscribe(data=>{
      expect(JSON.stringify(data)).toEqual(JSON.stringify(['a','b','c']));
    });
   
 });

});
