let debutRdvHeur = 15;
let debutRDVMinute = 40;

let dureeRdv = 15;

let finjourneeheur = 16;
let finjourneeMinute = 30; 

// si la fin du rendez vous est avant 16:30 , affiche "rendez vous ok"

if (debutRdvHeur < finjourneeheur) {
	console.log(" RDV ok");
} else if (debutRdvHeur > finjourneeheur) {
	console.log("Rdv impossible")
}

