import { InputDateFormatPage } from './app.po';

describe('input-date-format App', function() {
  let page: InputDateFormatPage;

  beforeEach(() => {
    page = new InputDateFormatPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
