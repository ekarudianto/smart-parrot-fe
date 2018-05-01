
describe('/ (Home Page)',() => {
    let page;
    const WEB_PAGE = 'http://localhost:8081'

    beforeAll(async () => {
      page = await global.__BROWSER__.newPage();
      await page.goto(WEB_PAGE);
    });

    afterAll(async () => {
      await page.close()
    });

    it('Should have correct title', async () => {
      let title = await page.evaluate(() => document.querySelector('h2').textContent);
      expect(title).toContain('Hello World');
    })
  }
);