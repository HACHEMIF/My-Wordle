import * as rl from 'readline-sync'; 
export const getInput = (question: string) => rl.question(`${question}\n`); 
export const getRandomWord = () => { 
    const words = [ 'Abuse', 'Adult', 'Agent', 'Anger', 'Apple', 'Award', 'Basis', 'Beach', 'Birth', 'Block', 'Blood', 'Board', 'Brain', 'Bread', 'Break', 'Brown', 'Buyer', 'Cause', 'Chain', 'Chair', 'Chest', 'Chief', 'Child', 'China', 'Claim', 'Class', 'Clock', 'Coach', 'Coast', 'Court', 'Cover', 'Cream', 'Crime', 'Cross', 'Crowd', 'Crown', 'Cycle', 'Dance', 'Death', 'Depth', 'Doubt', 'Draft', 'Drama', 'Dream', 'Dress', 'Drink', 'Drive', 'Earth', 'Enemy', 'Entry', 'Error', 'Event', 'Faith', 'Fault', 'Field', 'Fight', 'Final', 'Floor', 'Focus', 'Force', 'Frame', 'Frank', 'Front', 'Fruit', 'Glass', 'Grant', 'Grass', 'Green', 'Group', 'Guide', 'Heart', 'Henry', 'Horse', 'Hotel', 'House', 'Image', 'Index', 'Input', 'Issue', 'Japan', 'Jones', 'Judge', 'Knife', 'Laura', 'Layer', 'Level', 'Lewis', 'Light', 'Limit', 'Lunch', 'Major', 'March', 'Match', 'Metal', 'Model', 'Money', 'Month', 'Motor', 'Mouth', 'Music', 'Night', 'Noise', 'North', 'Novel', 'Nurse', 'Offer', 'Order', 'Other', 'Owner', 'Panel', 'Paper', 'Party', 'Peace', 'Peter', 'Phase', 'Phone', 'Piece', 'Pilot', 'Pitch', 'Place', 'Plane', 'Plant', 'Plate', 'Point', 'Pound', 'Power', 'Press', 'Price', 'Pride', 'Prize', 'Proof', 'Queen', 'Radio', 'Range', 'Ratio', 'Reply', 'Right', 'River', 'Round', 'Route', 'Rugby', 'Scale', 'Scene', 'Scope', 'Score', 'Sense', 'Shape', 'Share', 'Sheep', 'Sheet', 'Shift', 'Shirt', 'Shock', 'Sight', 'Simon', 'Skill', 'Sleep', 'Smile', 'Smith', 'Smoke', 'Sound', 'South', 'Space', 'Speed', 'Spite', 'Sport', 'Squad', 'Staff', 'Stage', 'Start', 'State', 'Steam', 'Steel', 'Stock', 'Stone', 'Store', 'Study', 'Stuff', 'Style', 'Sugar', 'Table', 'Taste', 'Terry', 'Theme', 'Thing', 'Title', 'Total', 'Touch', 'Tower', 'Track', 'Trade', 'Train', 'Trend', 'Trial', 'Trust', 'Truth', 'Uncle', 'Union', 'Unity', 'Value', 'Video', 'Visit', 'Voice', 'Waste', 'Watch', 'Water', 'While', 'White', 'Whole', 'Woman', 'World', 'Youth', 'Admit', 'Adopt', 'Agree', 'Allow', 'Alter', 'Apply', 'Argue', 'Arise', 'Avoid', 'Begin', 'Blame', 'Break', 'Bring', 'Build', 'Burst', 'Carry', 'Catch', 'Cause', 'Check', 'Claim', 'Clean', 'Clear', 'Climb', 'Close', 'Count', 'Cover', 'Cross', 'Dance', 'Doubt', 'Drink', 'Drive', 'Enjoy', 'Enter', 'Exist', 'Fight', 'Focus', 'Force', 'Guess', 'Imply', 'Issue', 'Judge', 'Laugh', 'Learn', 'Leave', 'Limit', 'Marry', 'Match', 'Occur', 'Offer', 'Order', 'Phone', 'Place', 'Point', 'Press', 'Prove', 'Raise', 'Reach', 'Refer', 'Relax', 'Serve', 'Shall', 'Share', 'Shift', 'Shoot', 'Sleep', 'Solve', 'Sound', 'Speak', 'Spend', 'Split', 'Stand', 'Start', 'State', 'Stick', 'Study', 'Teach', 'Thank', 'Think', 'Throw', 'Touch', 'Train', 'Treat', 'Trust', 'Visit', 'Voice', 'Waste', 'Watch', 'Worry', 'Would', 'Write', 'Above', 'Acute', 'Alive', 'Alone', 'Angry', 'Aware', 'Awful', 'Basic', 'Black', 'Blind', 'Brave', 'Brief', 'Broad', 'Brown', 'Cheap', 'Chief', 'Civil', 'Clean', 'Clear', 'Close', 'Crazy', 'Daily', 'Dirty', 'Early', 'Empty', 'Equal', 'Exact', 'Extra', 'Faint', 'False', 'Fifth', 'Final', 'First', 'Fresh', 'Front', 'Funny', 'Giant', 'Grand', 'Great', 'Green', 'Gross', 'Happy', 'Harsh', 'Heavy', 'Human', 'Ideal', 'Inner', 'Joint', 'Large', 'Legal', 'Level', 'Light', 'Local', 'Loose', 'Lucky', 'Magic', 'Major', 'Minor', 'Moral', 'Naked', 'Nasty', 'Naval', 'Other', 'Outer', 'Plain', 'Prime', 'Prior', 'Proud', 'Quick', 'Quiet', 'Rapid', 'Ready', 'Right', 'Roman', 'Rough', 'Round', 'Royal', 'Rural', 'Sharp', 'Sheer', 'Short', 'Silly', 'Sixth', 'Small', 'Smart', 'Solid', 'Sorry', 'Spare', 'Steep', 'Still', 'Super', 'Sweet', 'Thick', 'Third', 'Tight', 'Total', 'Tough', 'Upper', 'Upset', 'Urban', 'Usual', 'Vague', 'Valid', 'Vital', 'White', 'Whole', 'Wrong', 'Young', 'Afore', 'After', 'Bothe', 'Other', 'Since', 'Slash', 'Until', 'Where', 'While', 'Aback', 'Abaft', 'Aboon', 'About', 'Above', 'Accel', 'Adown', 'Afoot', 'Afore', 'Afoul', 'After', 'Again', 'Agape', 'Agogo', 'Agone', 'Ahead', 'Ahull', 'Alife', 'Alike', 'Aline', 'Aloft', 'Alone', 'Along', 'Aloof', 'Aloud', 'Amiss', 'Amply', 'Amuck', 'Apace', 'Apart', 'Aptly', 'Arear', 'Aside', 'Askew', 'Awful', 'Badly', 'Bally', 'Below', 'Canny', 'Cheap', 'Clean', 'Clear', 'Coyly', 'Daily', 'Dimly', 'Dirty', 'Ditto', 'Drily', 'Dryly', 'Dully', 'Early', 'Extra', 'False', 'Fatly', 'Feyly', 'First', 'Fitly', 'Forte', 'Forth', 'Fresh', 'Fully', 'Funny', 'Gaily', 'Gayly', 'Godly', 'Great', 'Haply', 'Heavy', 'Hella', 'Hence', 'Hotly', 'Icily', 'Infra', 'Jildi', 'Jolly', 'Laxly', 'Lento', 'Light', 'Lowly', 'Madly', 'Maybe', 'Never', 'Newly', 'Nobly', 'Oddly', 'Often', 'Other', 'Ought', 'Party', 'Piano', 'Plain', 'Plonk', 'Plumb', 'Prior', 'Queer', 'Quick', 'Quite', 'Ramen', 'Rapid', 'Redly', 'Right', 'Rough', 'Round', 'Sadly', 'Secus', 'Selly', 'Sharp', 'Sheer', 'Shily', 'Short', 'Shyly', 'Silly', 'Since', 'Sleek', 'Slyly', 'Small', 'Sound', 'Spang', 'Stark', 'Still', 'Stone', 'Stour', 'Super', 'Tally', 'Tanto', 'There', 'Thick', 'Tight', 'Today', 'Tomoz', 'Truly', 'Twice', 'Under', 'Utter', 'Verry', 'Wanly', 'Wetly', 'Where', 'Wrong', 'Wryly', ]; 
    return words[Math.floor(Math.random() * words.length)].toUpperCase(); 
};

// les deux functions getInput et getRandowWord

function wordle() {
    const motSecret = getRandomWord(); // on crée une variable motSecret, dans lequel on va mettre un mot du tableau words[] de la function getRandomWord()
    let essai = 6; // l'utilisateur a 6 essais pour trouver le mot
    let jeuGagne = false; // de base, l'utilisateur n'a pas trouvé le mot, on instancie par faux. S'il trouve, on change pour true.

    while (essai > 0) { // tant que l'utilisateur n'a pas trouvé le motSecret, on boucle
        let motCherche = getInput("Trouvez le mot secret. Vous avez " + essai + " tentative(s)"); // on demande à l'utilisateur de rentrer et tenter de deviner le mot. Et on met le mot rentré par l'utilisateur en majuscule, comme demandé
        let longueurMot = motCherche.length;
        const regex_lettre = /[^a-z]/gi; 

        if (longueurMot != 5 || motCherche.match(regex_lettre)) { // si le mot entré ne fait pas exactement 5 lettres ou comporte un autre caractère que les lettres (comme un chiffre), on renvoie un message d'erreur
            console.log("Ce n'est pas un mot valable. Réessayez."); 
            continue; // ça revient au début de la boucle, sans prendre en compte l'erreur entré par l'utilisateur
        }

        let motCMaj = motCherche.toUpperCase(); // on met notre mot en majuscule
        let coloredMot = ''; // variable dans laquel je mets les lettres qui seront bonnes ou pas, colorées
        let motTrouve = true; // on instancie true, mais des que l'utilisateur a une seule lettre fausse, on change pour false

        let tabMot = motCMaj.split('');
        tabMot.forEach((element, i) => {
            if (motSecret[i] == element) {
                coloredMot += "\x1b[92m" + element + "\x1b[0m";
            } else if (motSecret.includes(element)) {
                coloredMot += "\x1b[93m" + element + "\x1b[0m";
                motTrouve = false;
            } else {
                coloredMot += element;
                motTrouve = false;
            }
        });

        console.log(coloredMot);

        if (motTrouve == true) { // ainsi, si l'utilisateur trouve le bon mot
            jeuGagne = true; // on change la valeur de jeuGagne pour true, pour afficher le message gagnant. sinon, on laisse a false et le message perdant s'affichera
            break; // l'utilisateur peut trouver le mot dès la troisieme tentative, inutile de continuer à boucler. On break et on sort de la boucle
        }
        essai--;
    }
    if (jeuGagne == true) {
        console.log("Félicitations ! Vous avez trouvé " + motSecret + " !");
    } else {
        console.log("Dommage ! Le mot secret était " + motSecret + "...");
    }
}

wordle();

/*
for (let i = 0; i < longueurMot; i++){
    let lettre = motCherche[i];
    if (motSecret[i] == lettre){ // si les lettres sont identiques
        coloredMot += "\x1b[92m" + lettre + "\x1b[0m"; // on implemente la variable de la lettre (je ne peux pas utiliser \O33, obligé d'utiliser \x1b)
    } else if (motSecret.includes(lettre)) { // si une lettre dans le mot entré par l'utilisateur est présente dans le mot secret
        coloredMot += "\x1b[93m" + lettre + "\x1b[0m";
    } else { // si il n'y a pas du tout de lettre dans le mot entré par l'utilisateur dans le mot secret
        coloredMot += lettre; // on ajoute la lettre, fade
    }
    console.log(coloredMot);
}*/