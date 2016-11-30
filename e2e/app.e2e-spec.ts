import { ProductManagementNg2Page } from './app.po';

describe('product-management-ng2 App', function() {
  let page: ProductManagementNg2Page;

  beforeEach(() => {
    page = new ProductManagementNg2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
