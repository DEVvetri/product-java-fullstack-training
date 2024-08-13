package assignment;
import java.util.ArrayList;
import java.util.List;

class Account {
    private String accountNumber;
    private String accountHolderName;
    private double balance;

    public Account(String accountNumber, String accountHolderName, double balance) {
        this.accountNumber = accountNumber;
        this.accountHolderName = accountHolderName;
        this.balance = balance;
    }

    public String getAccountNumber() {
        return accountNumber;
    }

    public String getAccountHolderName() {
        return accountHolderName;
    }

    public double getBalance() {
        return balance;
    }

    public void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
            System.out.println("Deposited: " + amount + ", New Balance: " + balance);
        } else {
            System.out.println("Invalid deposit amount.");
        }
    }

    public void withdraw(double amount) {
        if (amount > 0 && amount <= balance) {
            balance -= amount;
            System.out.println("Withdrew: " + amount + ", New Balance: " + balance);
        } else {
            System.out.println("Invalid or insufficient balance for withdrawal.");
        }
    }

    @Override
    public String toString() {
        return "Account{" +
                "Account Number='" + accountNumber + '\'' +
                ", Account Holder Name='" + accountHolderName + '\'' +
                ", Balance=" + balance +
                '}';
    }
}

class Bank {
    private List<Account> accounts;

    public Bank() {
        accounts = new ArrayList<>();
    }

    public void addAccount(Account account) {
        accounts.add(account);
        System.out.println("Account added: " + account.getAccountHolderName());
    }

    public void removeAccount(String accountNumber) {
        Account accountToRemove = findAccount(accountNumber);
        if (accountToRemove != null) {
            accounts.remove(accountToRemove);
            System.out.println("Account removed: " + accountToRemove.getAccountHolderName());
        } else {
            System.out.println("Account not found.");
        }
    }

    public void deposit(String accountNumber, double amount) {
        Account account = findAccount(accountNumber);
        if (account != null) {
            account.deposit(amount);
        } else {
            System.out.println("Account not found.");
        }
    }

    public void withdraw(String accountNumber, double amount) {
        Account account = findAccount(accountNumber);
        if (account != null) {
            account.withdraw(amount);
        } else {
            System.out.println("Account not found.");
        }
    }

    private Account findAccount(String accountNumber) {
        for (Account account : accounts) {
            if (account.getAccountNumber().equals(accountNumber)) {
                return account;
            }
        }
        return null;
    }

    public void displayAccounts() {
        if (accounts.isEmpty()) {
            System.out.println("No accounts in the bank.");
        } else {
            for (Account account : accounts) {
                System.out.println(account);
            }
        }
    }
}

public class Back {
    public static void main(String[] args) {
        Bank bank = new Bank();

        Account account1 = new Account("12345", "Alice", 1000.0);
        Account account2 = new Account("67890", "Bob", 1500.0);

        bank.addAccount(account1);
        bank.addAccount(account2);

        bank.displayAccounts();

        bank.deposit("12345", 200.0);

        bank.withdraw("67890", 300.0);

        bank.removeAccount("12345");

        bank.displayAccounts();
    }
}
