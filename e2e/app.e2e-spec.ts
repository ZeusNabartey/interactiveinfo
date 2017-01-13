import { CvwebsitePage } from './app.po';

describe('cvwebsite App', function() {
  let page: CvwebsitePage;

  beforeEach(() => {
    page = new CvwebsitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
