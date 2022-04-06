import { handleCustomers } from './CustomersHandler';

describe("handleCustomers", () => {

    it("handleCustomers should be a function", async  () => {
      expect(typeof handleCustomers).toBe("function");
    });

    it("handleCustomers should return false for empty customers list", async  () => {
      const customerQueue: number[] = [];
      expect(handleCustomers(customerQueue)).toBe(false);
    });

    it("handleCustomers should follow FIFO", async  () => {
      const customerQueue: number[] = [4,5,6];
      expect(handleCustomers(customerQueue)).toBe(4);
    });
});