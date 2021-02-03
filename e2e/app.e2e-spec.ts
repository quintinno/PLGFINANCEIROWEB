import { PLGFINANCEIROWEBPage } from './app.po';

describe('plgfinanceiroweb App', () => {
  let page: PLGFINANCEIROWEBPage;

  beforeEach(() => {
    page = new PLGFINANCEIROWEBPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
