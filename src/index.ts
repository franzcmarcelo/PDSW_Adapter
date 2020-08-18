import { XBank } from "./class/XBank.js";
import { YBank } from "./class/YBank.js";
import { Adapter } from "./class/Adapter.js";


// Cliente 1 utilizando las operaciones del banco X
let cliente1 = new XBank( );
cliente1.operation()
// > Operacion simple del Banco X
cliente1.approveCreditsX()
// > Credito Aprovado con el Banco X


// Mediante el Adapter
// Cliente 2 utilizando las operaciones del banco Y
let cliente2 = new Adapter( new YBank() );
cliente2.operation()
cliente2.approveCreditsX()
// > Operacion simple del Banco Y
// > Credito Aprovado con el Banco Y
