export class Adapter {
    constructor(YBank) {
        this.YBank = YBank;
    }
    approveCreditsX() {
        this.YBank.approveCreditsY();
    }
    operation() {
        this.YBank.operation();
    }
}
