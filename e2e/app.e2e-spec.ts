import { YourdaybymkPage } from './app.po';

describe('yourdaybymk App', () => {
  let page: YourdaybymkPage;

  beforeEach(() => {
    page = new YourdaybymkPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
