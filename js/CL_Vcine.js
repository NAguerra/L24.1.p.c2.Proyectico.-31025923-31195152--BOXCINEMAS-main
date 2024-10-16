export default class CL_Vcine {
    constructor(controlador) {
        this.vista = document.getElementById("mainform");
        this.table = document.getElementById("mainform_table");
        this.lblFamilia = document.getElementById("mainform_lblFamilia");
        this.lblPromedio = document.getElementById("mainform_lblPromedio");
        this.lblTotal = document.getElementById("mainform_lblTotal");
        this.ininicialCaja = document.getElementById("mainform_ininicialCaja");
        this.btAgregar = document.getElementById("mainform_btAgregar");
        this.btAceptar = document.getElementById("mainform_btAceptar");

        this.btAceptar.onclick = () => 
            controlador.agregarCine({
            inicialCaja: this.ininicialCaja.value,
        });
        
        this.btAgregar.onclick = () => 
            controlador.mostrarVistaFamilia();  
        };
        mostrarVCine(){
            this.vista.hidden = false;
        }

        ocultarVCine(){
            this.vista.hidden = true;
        }

        reportarcine({
            familia,
            personas,
            dia,
            pagar,
            devolvermayorfamilia,
            promLunes,
            totaljornada,
        }) {
            this.table.innerHTML += `
            <tr>
                <td>${familia}</td>
                <td>${personas}</td>
                <td>${dia}</td>
                <td>${pagar}</td>
            </tr>`;

            this.lblFamilia.innerHTML = devolvermayorfamilia;
            this.lblPromedio.innerHTML = promLunes;
            this.lblTotal.innerHTML = totaljornada;
        }

    }

