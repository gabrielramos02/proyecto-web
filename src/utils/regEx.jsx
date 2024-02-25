const nombreRegex = /^[A-Z][a-zA-ZÀ-ÿ\u00f1\u00d1' -]{0,29}$/
const apellidosRegex = /^[A-Z][a-zA-ZÀ-ÿ\u00f1\u00d1' -]{0,49}$/
const historiaClinicaRegex = /^\d{5}$/
const camaSalaRegex = /^\d{1,2}$/

function validarNombre(valor) {
    return nombreRegex.test(valor)
}

function validarApellidos(valor) {
    return apellidosRegex.test(valor)
}
function validarHistoriaClinica(valor) {
    return historiaClinicaRegex.test(valor)
}
function validarCamaSala(valor) {
    return camaSalaRegex.test(valor)
}

export {
    validarNombre,
    validarApellidos,
    validarHistoriaClinica,
    validarCamaSala,
}
