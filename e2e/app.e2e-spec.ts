import { SignPage } from './app.po';

describe('sign App', function() {
  let page: SignPage;

  beforeEach(() => {
    page = new SignPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
