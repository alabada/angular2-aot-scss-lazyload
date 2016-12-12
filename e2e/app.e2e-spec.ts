import { Angular2AotScssPage } from './app.po';

describe('angular2-aot-scss App', function() {
  let page: Angular2AotScssPage;

  beforeEach(() => {
    page = new Angular2AotScssPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
