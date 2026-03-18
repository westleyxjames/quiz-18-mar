// Wallet Management System
class WalletManager {
    constructor() {
        this.points = this.getPoints();
        this.earnings = this.getEarnings();
    }

    getPoints() {
        return parseInt(localStorage.getItem('quizPoints') || '0');
    }

    getEarnings() {
        return parseFloat(localStorage.getItem('quizEarnings') || '0');
    }

    addPoints(amount) {
        this.points += amount;
        localStorage.setItem('quizPoints', this.points.toString());
        this.updateDisplay();
    }

    cashout() {
        if (this.points >= 1000) {
            const inrAmount = Math.floor(this.points / 1000);
            this.earnings += inrAmount;
            this.points -= inrAmount * 1000;
            
            localStorage.setItem('quizPoints', this.points.toString());
            localStorage.setItem('quizEarnings', this.earnings.toString());
            
            this.updateDisplay();
            return { success: true, amount: inrAmount };
        }
        return { success: false, amount: 0 };
    }

    updateDisplay() {
        // Update wallet points in header
        const walletElements = document.querySelectorAll('.wallet-points');
        walletElements.forEach(el => {
            el.textContent = `${this.points} pts`;
        });

        const walletMobileElements = document.querySelectorAll('.wallet-points-mobile');
        walletMobileElements.forEach(el => {
            el.textContent = `${this.points} Points`;
        });

        // Update wallet page if on wallet page
        this.updateWalletPage();
    }

    updateWalletPage() {
        const pointsDisplay = document.getElementById('totalPoints');
        const earningsDisplay = document.getElementById('totalEarnings');
        const cashoutAmountDisplay = document.getElementById('cashoutAmount');
        const pointsToNextDisplay = document.getElementById('pointsToNext');
        const pointsInrDisplay = document.getElementById('pointsInr');
        const canCashoutBtn = document.getElementById('cashoutBtn');

        if (pointsDisplay) pointsDisplay.textContent = this.points;
        if (earningsDisplay) earningsDisplay.textContent = `₹${this.earnings}`;
        if (cashoutAmountDisplay) cashoutAmountDisplay.textContent = Math.floor(this.points / 1000);
        if (pointsToNextDisplay) pointsToNextDisplay.textContent = 1000 - (this.points % 1000);
        if (pointsInrDisplay) pointsInrDisplay.textContent = `₹${(this.points / 1000).toFixed(2)}`;

        if (canCashoutBtn) {
            if (this.points >= 1000) {
                canCashoutBtn.disabled = false;
                canCashoutBtn.classList.remove('btn-disabled');
            } else {
                canCashoutBtn.disabled = true;
                canCashoutBtn.classList.add('btn-disabled');
            }
        }
    }
}

// Initialize wallet manager
const wallet = new WalletManager();

// Update display on page load
document.addEventListener('DOMContentLoaded', () => {
    wallet.updateDisplay();
});
