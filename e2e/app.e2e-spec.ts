import { A2autocompletePage } from './app.po';

describe('a2autocomplete App', function() {
  let page: A2autocompletePage;

  beforeEach(() => {
    page = new A2autocompletePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
