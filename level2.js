
function createBankAccount(initial) {
    let money = initial;

    return {
        deposit(amount) {
            if (amount > 0) {
                money += amount;
                console.log("Deposited:", amount, "RWF");
            } else {
                console.log("Invalid deposit amount");
            }
        },

        withdraw(amount) {
            if (amount <= 0) {
                console.log("Invalid withdrawal amount");
            } else if (amount > money) {
                console.log("Insufficient funds");
            } else {
                money -= amount;
                console.log("Withdrawn:", amount, "RWF");
            }
        },

        balance() {
            return money;
        }
    };
}

// Create an account with 10,000 RWF
const account = createBankAccount(10000);

// Test the account
account.deposit(5000);
account.withdraw(3000);

console.log("Current balance:", account.balance(), "RWF");

account.withdraw(20000);

console.log("Final balance:", account.balance(), "RWF");
