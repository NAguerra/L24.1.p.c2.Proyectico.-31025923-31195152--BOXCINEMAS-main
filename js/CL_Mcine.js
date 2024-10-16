export default class CL_Mcine {
    constructor({inicialCaja}) {
        this.acumLunes = 0;
        this.contLunes = 0;
        this.Mayor = 0;
        this.FamiliaMayor = "";
        this.acumTotal = 0;
        this.inicialCaja = inicialCaja;
    }

    procesarFamilia(f){

        //Mayor pago
        if(f.pagar() > this.Mayor){
            this.Mayor = f.pagar();
            this.FamiliaMayor = f.familia;
    }

        //Datos del día lunes
        
        if (f.dia == 1){
            this.acumLunes += f.pagar();
            this.contLunes++;
        }

        //Acumulador total
        this.acumTotal += f.pagar();
    }     
    promLunes(){
        if(this.contLunes > 0)  
            return this.acumLunes / this.contLunes; 
        else
            return "0";
    }
    totaljornada(){
        return this.acumTotal - (-this.inicialCaja);
    }
    devolvermayorfamilia(){
        return this.FamiliaMayor;
    }
}