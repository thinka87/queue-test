/**
* Please provide your implementation in this file. 
The queue object will start emitting values as soon as it is
instantiated.
*/
import { Queue } from './queue';
import { handleCustomers } from './CustomersHandler';
const q = new Queue();

const MICRO_BREAK_INTERVAL =500; //you need a 500 milliseconds break to deal with a new customer
const customerQueue: number[] = []; //customer queue array with package number
/**
 * q.emitter will emit events at a random interval
 */
q.emitter.addListener('package', (x: number) => {
    //console.log (`customer with package number ${x} came into post office` );
    customerQueue.push(x); //Add customer to queue
});

//call handleCustomers function every 500 ms
const customersHandlerCaller = () => {
    handleCustomers(customerQueue);
    setTimeout(customersHandlerCaller,MICRO_BREAK_INTERVAL);
};
//call to Handler caller
customersHandlerCaller();