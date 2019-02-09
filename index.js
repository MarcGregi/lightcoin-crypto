

class Account {
  constructor(username) {
    this.username = username;
    this.balance = 0;  
  }
}
class Withdrawal {

  constructor(amount, account) {
    this.amount = amount;
    this.account = account; 
  }

  commit() {
    this.account.balance -= this.amount;
  }

}

class Deposit {
    constructor(amount, account) {
      this.amount = amount; 
      this.account = account; 
    }
    commit() {
      this.account.balance += this.amount; 
    }
}



// DRIVER CODE BELOW
// "drive" the application forward 

const myAccount = new Account("MarcWallet"); 


// Testing Withdrawl 
t1 = new Withdrawal(50.25, myAccount);
t1.commit();
console.log('Marc Wallet Transaction 1:', t1);

t2 = new Withdrawal(9.99, myAccount);
t2.commit();
console.log('Marc Wallet Transaction 2:', t2);

console.log('Marc Wallet Balance:', myAccount.balance);

// Testing Deposit 

t3 = new Deposit(120.00, myAccount); 
t3.commit(); 
console.log('Marc Wallet Transaction 3', t3); 

