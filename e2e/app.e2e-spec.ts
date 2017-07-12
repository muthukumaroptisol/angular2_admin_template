import { MicroAdminPage } from './app.po';

describe('micro-admin App', function() {
  let page: MicroAdminPage;

  beforeEach(() => {
    page = new MicroAdminPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
