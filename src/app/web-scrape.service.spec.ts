import { TestBed } from '@angular/core/testing';

import { WebScrapeService } from './web-scrape.service';

describe('WebScrapeService', () => {
  let service: WebScrapeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebScrapeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
