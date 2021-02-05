function power(a, b) {
    let result = 1;

    for (let i = 0; i < b; i++) {
        result = result * a;
    }

    return result;
}

const bouton = document.getElementById("power");
const resultat = document.getElementById("resultat");

bouton.addEventListener("click", function() {
    const a = document.getElementById("a").value;
    const b = document.getElementById("b").value;

    console.log(a);
    console.log(b);

    const result = power(a, b);

    resultat.innerText = result.toString();
});
