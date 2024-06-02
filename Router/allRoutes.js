import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html"),
    new Route("/robe", "Sélection de robe", "/pages/robe.html"),
    new Route("/signin", "Connexion", "/pages/auth/signin.html"),
    new Route("/signup", "Inscription", "/pages/auth/signup.html"),
    new Route("/compte", "Mon Compte", "/pages/auth/compte.html"),
    new Route("/editPassword", "Modifier votre mot de passe", "/pages/auth/editPassword.html"),
    new Route("/allResa", "Vos Réservation", "/pages/reservation/allResa.html"),
    new Route("/allResa", "Vos Réservation", "/pages/reservation/allResa.html"),
];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Quai Antique";