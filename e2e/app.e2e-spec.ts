import { IsaFrontendPage } from './app.po';

describe('isa-frontend App', () => {
  let page: IsaFrontendPage;

  beforeEach(() => {
    page = new IsaFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
