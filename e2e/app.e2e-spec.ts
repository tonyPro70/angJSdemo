import { HiLoTestPage } from './app.po';

describe('hi-lo-test App', function() {
  let page: HiLoTestPage;

  beforeEach(() => {
    page = new HiLoTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
