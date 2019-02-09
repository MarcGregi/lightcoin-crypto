

class Account {
  constructor(username) {
    this.username = username;
    this.balance = 0;  
  }
}

class Transaction {
  constructor(amount, account) {
    this.amount = amount; 
    this.account = account; 
  }
  commit() {
    this.account.balance += this.value; 
  }
}

class Withdrawl extends Transaction {
  commit() {
    this.account.balance -= this.amount; 
  } 
  get value() {
    return -this.value; 
  }
}

class Deposit extends Transaction {
  commit() {
    this.account.balance += this.amount; 
  } 
  get value() {
    return this.value; 
  }
}



// DRIVER CODE BELOW
// "drive" the application forward 

const myAccount = new Account("MarcWallet"); 

console.log('Starting Marc Wallet Coin Balance: ', myAccount.balance); 

const t3 = new Deposit(120.00, myAccount); 
t3.commit(); 

const t1 = new Withdrawl(50.00, myAccount);
t1.commit();


console.log('Marc Wallet Balance:', myAccount.balance);




// class Withdrawal {

//   constructor(amount, account) {
//     this.amount = amount;
//     this.account = account; 
//   }

//   commit() {
//     this.account.balance -= this.amount;
//   }

// }

// class Deposit {
//     constructor(amount, account) {
//       this.amount = amount; 
//       this.account = account; 
//     }
//     commit() {
//       this.account.balance += this.amount; 
//     }
// }

