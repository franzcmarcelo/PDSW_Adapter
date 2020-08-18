import { iXBank } from '../interfaces/iXBank.js'

export class XBank implements iXBank {

    public approveCreditsX () {
        console.log('Credito Aprovado con el Banco X');
    }

    public operation () {
        console.log('Operacion simple del Banco X');
    }
}