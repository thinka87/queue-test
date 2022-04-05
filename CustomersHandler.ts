//Using this function handle customers queue
export  const handleCustomers =  (customerQueue: number[] ):number | false => {
   
    //if no customers in queue
    if(customerQueue.length===0){
        console.log ("No customers in queue");
        return false;
    }
   
    //get the first customer in the queue and process
    const customer = customerQueue.shift();

    //mimic doing something with the customer
    console.log(`customer with package number ${customer} dealt and left`);
    return customer;
};