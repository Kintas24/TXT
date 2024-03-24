let titulo = document.getElementById("titulo")
let frutas = document.getElementById("frutas")
let prozeducacao = document.getElementById("prozeducacao")
let listaOrdenada = document.getElementById("lista-ordenada")

titulo.innerText = "Angola é um país com clima tropical"
prozeducacao.innerText = "um instituto de formação de programadores"
frutas.innerHTML = "<li>Laranja</li> <li>limão</li>"+"<li>abacate</li>"
frutas.innerHTML +="<li>Jaca</li>"
listaOrdenada.innerHTML = `
<li><a href="https://www.linkedin.com/login/
">LinkedIn</a></li>
<li><a href="https://portaldocontribuinte.minfin.gov.ao/login
">AGT Portal do Contribuínte</a></li>
<li><a href="https://sepe.gov.ao/ao/">SEPE</a></li>
<li><a href="https://www.saipem.com/en">SAIPEM</a></li>
`;


