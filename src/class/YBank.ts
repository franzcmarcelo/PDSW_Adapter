import { iYBank } from '../interfaces/iYBank'

export class YBank implements iYBank {

    public approveCreditsY () {
        console.log('Credito Aprovado con el Banco Y');
    }

    public operation () {
        console.log('Operacion simple del Banco Y');
    }
}
