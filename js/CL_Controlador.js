
import CL_Mcine from "./CL_Mcine.js";
import CL_Mfamilia from "./CL_Mfamilia.js";

import CL_Vcine from "./CL_Vcine.js";
import CL_Vfamilia from "./CL_Vfamilia.js";

export default class CL_Controlador {

    constructor(){
        this.Mcine = new CL_Mcine(this);
        this.Vfamilia = new CL_Vfamilia(this);
        this.Vcine = new CL_Vcine(this);
    }

    mostrarVistaFamilia(){
        this.Vcine.ocultarVCine();
        this.Vfamilia.mostrarVFamilia();
    }

    mostrarVistaCine(){
        this.Vfamilia.ocultarVFamilia();
        this.Vcine.mostrarVCine();
    }

    agregarFamilia({familia, personas, dia}){
    let fam = new CL_Mfamilia({familia, personas, dia});
    this.Mcine.procesarFamilia(fam);
        this.Vcine.reportarcine({
            familia: fam.familia,
            personas: fam.personas,
            dia: fam.dia,
            pagar: fam.pagar(),
            promLunes: this.Mcine.promLunes(),
            totaljornada: this.Mcine.totaljornada(),
            devolvermayorfamilia: this.Mcine.devolvermayorfamilia(),
        });
        this.mostrarVistaCine();
    }

agregarCine({inicialCaja}){
    this.Mcine.inicialCaja = inicialCaja;
};
}