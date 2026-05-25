abstract class Account {
    int accNo;
    String holder;
    double totalBalance;

    Account(int accNo, String holder, double totalBalance) {
        this.accNo = accNo;
        this.holder = holder;
        this.totalBalance = totalBalance;
    }

    void addMoney(double money) {
        totalBalance += money;
        System.out.println("Amount Deposited: " + money);
    }

    void showInfo() {
        System.out.println("Account Number: " + accNo);
        System.out.println("Account Holder Name: " + holder);
        System.out.println("Balance: " + totalBalance);
    }

    abstract void findInterest();
}

class SavingAcc extends Account {

    SavingAcc(int accNo, String holder, double totalBalance) {
        super(accNo, holder, totalBalance);
    }

    void findInterest() {
        double interestValue = totalBalance * 0.05;
        System.out.println("Savings Account Interest: " + interestValue);
    }
}

class CurrentAcc extends Account {

    CurrentAcc(int accNo, String holder, double totalBalance) {
        super(accNo, holder, totalBalance);
    }

    void findInterest() {
        double interestValue = totalBalance * 0.02;
        System.out.println("Current Account Interest: " + interestValue);
    }
}

public class Experiment10 {

    public static void main(String[] args) {

        SavingAcc firstAccount = new SavingAcc(101, "Rahul", 10000);
        CurrentAcc secondAccount = new CurrentAcc(102, "Anita", 20000);

        System.out.println("----- Savings Account -----");
        firstAccount.addMoney(2000);
        firstAccount.showInfo();
        firstAccount.findInterest();

        System.out.println();

        System.out.println("----- Current Account -----");
        secondAccount.addMoney(3000);
        secondAccount.showInfo();
        secondAccount.findInterest();
    }
}