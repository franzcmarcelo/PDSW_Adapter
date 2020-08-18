import { XBank } from "./class/XBank.js";
import { YBank } from "./class/YBank.js";
import { Adapter } from "./class/Adapter.js";
let cliente2 = new Adapter(new YBank());
cliente2.operation();
cliente2.approveCreditsX();
let cliente1 = new XBank();
cliente1.operation();
cliente1.approveCreditsX();
