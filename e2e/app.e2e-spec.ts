import { GroceriesPage } from './app.po';

describe('groceries App', () => {
  let page: GroceriesPage;

  beforeEach(() => {
    page = new GroceriesPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
