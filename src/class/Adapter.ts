import { iXBank } from '../interfaces/iXBank.js'
import { iYBank } from '../interfaces/iYBank.js'

export class Adapter implements iXBank {

    private YBank: iYBank;

    constructor( YBank: iYBank) {
        this.YBank = YBank;
    }

    approveCreditsX() {
        this.YBank.approveCreditsY();
    }

    operation() {
        this.YBank.operation();
    }
}