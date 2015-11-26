var FuzzySet = require('fuzzyset.js');

var insults = [
    // The Secret of Monkey Island
    "Du kämpfst wie ein dummer Bauer.",
    "Menschen fallen mir zu Füßen, wenn ich komme.",
    "Ich kenne einige Affen, die haben mehr drauf als du.",
    "Meine Narbe im Gesicht stammt aus einem harten Kampf!",
    "Du hast die Manieren eines Bettlers.",
    "Mein Schwert wird dich aufspießen wie einen Schaschlik!",
    "Mit meinem Taschentuch werde ich dein Blut aufwischen.",
    "Ich hatte mal einen Hund, der war klüger als du.",
    "Du bist kein echter Gegner für mein geschultes Hirn!",
    "Dein Schwert hat schon bessere Zeiten gesehen.",
    "Niemand wird mich verlieren sehen, du auch nicht!",
    "Willst du hören, wie ich 3 Gegner zugleich besiegte?",
    "Deine Fuchtelei hat nichts mit der Fecht-Kunst zu tun.",
    "Trägst du immer noch Windeln?",
    "An deiner Stelle würde ich zur Landratte werden!",
    "Jeder hier kennt dich doch als unerfahrenen Dummkopf!",

    //  The Curse of Monkey Island
    "Bis jetzt wurde jeder Gegner von mir eliminiert!",
    "Wirst du laut Testament eingeäschert oder einbalsamiert?",
    "Dich zu töten wäre eine legale Beseitigung!",
    "Himmel bewahre! Für einen Hintern wäre dein Gesicht eine Beleidigung!",
    "Du bist so häßlich wie ein Affe in einem Negligé!",
    "Mein Herz rast, denk' ich an deine Beseitigung!",
    "Warst Du schon immer so häßlich oder bist du mutiert?",
    "Haben sich deine Eltern nach deiner Geburt sterilisiert?",
    "Ich spieß' Dich auf wie eine Sau am Buffet!",
    "Überall in der Karibik wird mein Name respektiert!",
    "Niemand kann mich stoppen, mich - den Schrecken der See!",
    "Ich werde dich richten, und es gibt kein Plädoyer!",
    "En garde! Touché.",
    "Ein jeder hat vor meiner Schwertkunst kapituliert!",
    "Fühl' ich den Stahl in der Hand, bin ich in meinem Metier!",
    "Mein Mienenspiel zeigt dir meine Mißbilligung!",
];


var counters = [
    // The Secret of Monkey Island
    ["Wie passend. Du kämpfst wie eine Kuh."],
    ["Auch bevor Sie deinen Atem riechen?"],
    ["Aha, du warst also beim letzen Familientreffen."],
    ["Aha, mal wieder in der Nase gebohrt, wie?"],
    ["Ich wollte, daß du dich wie zuhause fühlst."],
    ["Dann mach nicht damit rum wie mit einem Staubwedel."],
    ["Also hast du doch den Job als Putze gekriegt."],
    ["Er muß dir das Fechten beigebracht haben."],
    ["Vielleicht solltest du es endlich mal benutzen?"],
    ["Und du wirst deine rostige Klinge nie wieder sehen."],
    ["Du kannst SO schnell davonlaufen?"],
    ["Willst du mich mit deinem Geschwafel ermüden?"],
    ["Doch, doch, du hast sie nur nie gelernt."],
    ["Wieso, die könntest DU viel eher gebrauchen!"],
    ["Hattest du das nicht vor kurzem getan?"],
    ["Zu Schade, daß DICH überhaupt niemand kennt."],

    //  The Curse of Monkey Island
    [" Das war ja auch leicht, dein Atem hat sie paralysiert.",
    "Ganze Inselreiche haben vor mir kapituliert."],

    ["Sollt' ich in deiner Nähe sterben, möcht' ich, daß man mich desinfiziert!",
    "Ich lasse dir die Wahl: erdolcht, erhängt oder guillotiniert."],

    ["Dich zu töten wäre dann eine legale Reinigung!",
    "Bist du das? Es riecht hier so nach Jauche und Dung!"],

    ["In Formaldehyd aufbewahrt trügst du bei zu meiner Erheiterung!",
    "Ist der Blick in den Spiegel für Dich jeden Tag nicht eine Erniedrigung?"],

    ["Hoffentlich zerrst du mich nicht gleich ins Separée!",
    "Du hast soviel Sexappeal wie ein Croupier."],

    ["Dann wäre koffeinfreier Kaffee ein erster Schritt zur Läuterung!",
    "Dein Geplänkel kommt nicht richtig in Schwung!"],

    ["Da hat sich wohl dein Spiegelbild in meinem Säbel reflektiert!",
    "Wurdest du damals von einem Schwein adoptiert?"],

    ["Zumindest hat man meine identifiziert!",
    "Du bist eine Schande für deine Gattung, so dilletiert."],

    ["Wenn ich mit DIR fertig bin, bist du nur noch Filet!",
    "Auch wenn du es nicht glaubst, aus dir mach ich Haschee."],

    ["Zu schade, daß das hier niemanden tangiert!",
    "Durch meine Fechtkunst bin ich zum Sieger prädestiniert."],

    ["Ich könnte es tun, hättest du nur ein Atemspray!",
    "Es mit mir aufzunehmen gleicht einer Odyssee."],

    ["Das ich nicht lache! Du und welche Armee?",
    "Jetzt werde ich dich erstechen, da hilft kein Protegé!"],

    ["Oh, das ist ein solch übles Klischee!",
    "Deine Mutter trägt ein Toupet."],

    ["Dein Geruch allein reicht aus und ich wär' kollabiert!",
    "Ich weiß nicht, welche meiner Eigenschaften dir am meisten imponiert."],

    ["Ich glaub', es gibt für dich noch eine Stelle beim Varieté.",
    "Ich laufe auf glühenden Kohlen und Barfuß im Schnee."],

    ["Für dein Gesicht bekommst du 'ne Begnadigung!",
    "Mein Antlitz zeugt von edler Abstammung!"],
];

var fuzzy = FuzzySet(insults);

module.exports.search = function(query) {
    var match = fuzzy.get(query);
    if (!match) {
        return;
    }
    var score = match[0][0];
    if (score > 0.5) {
        var result = match[0][1];
        for (var i=0; i<insults.length; ++i) {
            if (insults[i]===result) {
                var possible_counters = counters[i]
                return possible_counters[Math.floor(Math.random() * possible_counters.length)];
            }
        }
    }
}

