
const bankAcc = {
    accountNumber: 1234,
    owner: "Purva",
    balance: 1000,
    deposit: function() {
        let depositAmount = prompt("Enter deposit amount:");
        depositAmount = parseFloat(depositAmount);

        if (!isNaN(depositAmount) && depositAmount >= 0) {
           x=this.balance += depositAmount;
           print=document.getElementById("printmsg").innerHTML="Available Balance : "+x;
            
        } else {
            alert("Please enter a valid non-negative number for deposit.");
            this.deposit(); // Recursive call until valid input is received
        }
    },
    withdraw: function() {
        let withdrawAmount = prompt("Enter withdrawal amount:");
        withdrawAmount = parseFloat(withdrawAmount);
        if( !isNaN(withdrawAmount) && withdrawAmount >= 0)
        {
            x= this.balance -= withdrawAmount;
            print=document.getElementById("printmsg").innerHTML="Available Balance : "+x;
            
        } else{
            alert("Enter a valid amount");
            this.withdraw();
        }
        
    },
    getBalance: function(){
        print=document.getElementById("printmsg").innerHTML="Available Balance : "+this.balance;
            
    }

};

