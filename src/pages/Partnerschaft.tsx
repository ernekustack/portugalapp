import { Link } from "react-router-dom";
import { ArrowLeft, BookOpen, CalendarDays, Gamepad2, Map, Sparkles } from "lucide-react";
import { useI18n } from "@/i18n/LanguageContext";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

type Copy = {
  kicker: string;
  title: string;
  storyTitle: string;
  storyIntro: string;
  imagineLabel: string;
  projects: { name: string; desc: string; imagine: string }[];
  mapTitle: string;
  mapText: string;
  stepsTitle: string;
  steps: string[];
  closingTitle: string;
  closingText: string;
  cta: string;
  mail: string;
  back: string;
};

const COPY: Record<string, Copy> = {
  de: {
    kicker: "Studio Southwest",
    title: "Partnerschaft",
    storyTitle: "Wenn Ihr Ort Teil einer Geschichte wird",
    storyIntro:
      "Wir erzählen Geschichten über den Alentejo – in einem Buch, in einem Spiel und auf einer Plattform für Erlebnisse in der Region. Immer geht es um echte Orte. Vielleicht auch um Ihren. Kein lautes Marketing, keine Banner, keine Anzeigen. Stattdessen: Gäste und Spieler entdecken echte Orte auf eine Weise, die ihnen im Gedächtnis bleibt – und die sie später wirklich besuchen wollen.",
    imagineLabel: "Stellen Sie sich vor",
    projects: [
      {
        name: "Lume Magic Book",
        desc:
          "Ein personalisiertes Buch über den Klippendrachen Lume und die Küste Portugals – für Familien im Urlaub. Gäste kaufen den Gutschein bei Ihnen oder erhalten ihn als Präsent. Sie erhalten ein festes Partnerpaket: 48 Gutscheine in 4 Sprachen, einen Gutscheinständer zum Aufstellen oder Aufhängen als Testpaket – und eine eigene Doppelseite am Ende des Buches, auf der Ihr Haus optimal dargestellt wird.",
        imagine:
          "Die Familie bekommt ein wundervoll personalisiertes Buch mit Name und Bild von Kind/Kindern, sie lesen gemeinsam – und erinnern sich an die tolle Zeit bei Ihnen.",
      },
      {
        name: "Alentejo Events",
        desc:
          "Die Bühne für das, was den Alentejo bewegt. Der Alentejo lebt von seinen Momenten: von den großen Festen in den Dörfern, den verborgenen Naturparadiesen, kulturellen Entdeckungen und den besonderen Ausflügen abseits der üblichen Pfade. Wer das Besondere sucht, muss es erst einmal finden können – und genau hier schließen wir die Lücke. Alentejoeventos ist der digitale Treffpunkt für alles, was diese Region zu bieten hat. Ob Ihr Betrieb, Ihre Veranstaltung, Ihr handgemachtes Event oder Ihr Ausflugsziel: Wir bringen die Menschen zu Ihnen.",
        imagine:
          "Stellen Sie sich einen ganz normalen Tag vor: Ein Gast plant seinen Aufenthalt oder seinen Ausflug im Alentejo. Er sucht nach Inspiration, nach echten Erlebnissen, nach einem Ort mit Charakter – und findet dabei dank Ihrer Präsenz genau Ihren Hof, Ihr Fest oder Ihren Weinberg.",
      },
      {
        name: "Spiel Luz e Morte",
        desc:
          "Ein atmosphärisches Spiel, das tief in die Mythen und Geschichte des Alentejo eintaucht. Echte Orte werden Teil der Geschichte – mit echtem Namen, echter Lage.",
        imagine:
          "Ihr Weingut taucht als geheimnisvoller Schauplatz im Spiel auf. Wer es spielt, will den Ort später wirklich sehen.",
      },
    ],
    mapTitle: "Ein Ort, drei Wege dorthin",
    mapText:
      "Eine Karte des Alentejo verbindet alle drei Projekte: Sie ist Spielfeld im Spiel, Hintergrund im Buch und Wegweiser bei den Events. Ihr Betrieb kann an mehreren Stellen gleichzeitig auftauchen.",
    stepsTitle: "So läuft es ab",
    steps: [
      "Kurze Nachricht mit Ihrem Interesse.",
      "Gespräch: Projekt, Umfang, Gegenleistung.",
      "Schlanke Vereinbarung, ein Ansprechpartner.",
      "Regelmäßige Updates bis zum Release.",
    ],
    closingTitle: "Welcher Ort in Ihrer Nähe hätte eine Geschichte verdient?",
    closingText:
      "Schreiben Sie uns einfach kurz – wir erzählen Ihnen gerne mehr und finden gemeinsam die passende Einbindung für Ihren Betrieb.",
    cta: "Partnerschaft anfragen",
    mail: "Direkt per E-Mail",
    back: "Zurück zur Startseite",
  },
  en: {
    kicker: "Studio Southwest",
    title: "Partnership",
    storyTitle: "When your place becomes part of a story",
    storyIntro:
      "We tell stories about the Alentejo – in a book, in a game and on a platform for regional experiences. Always about real places. Perhaps yours, too. No loud marketing, no banners, no ads. Instead: guests and players discover real places in a way they remember – and later truly want to visit.",
    imagineLabel: "Imagine",
    projects: [
      {
        name: "Lume Magic Book",
        desc:
          "A personalised book about Lume the cliff dragon and the Portuguese coast – for families on holiday. Guests buy the voucher from you or receive it as a gift. You get a fixed partner package: 48 vouchers in 4 languages, a voucher stand to place or hang as a test package – and your own double page at the end of the book, showing your house at its best.",
        imagine:
          "The family receives a wonderful personalised book with the name and picture of their child/children, they read together – and remember the great time they had with you.",
      },
      {
        name: "Alentejo Events",
        desc:
          "The stage for everything that moves the Alentejo. This region lives from its moments: the big village festivals, hidden natural paradises, cultural discoveries and special trips off the beaten track. Whoever looks for the special first has to be able to find it – and that is exactly the gap we close. Alentejoeventos is the digital meeting point for everything this region has to offer. Whether your business, your event, your handmade happening or your destination: we bring people to you.",
        imagine:
          "Imagine an ordinary day: a guest plans their stay or a trip in the Alentejo. They look for inspiration, for real experiences, for a place with character – and thanks to your presence they find exactly your farm, your festival or your vineyard.",
      },
      {
        name: "Luz e Morte (game)",
        desc:
          "An atmospheric game diving deep into the myths and history of the Alentejo. Real places become part of the story – with their real name and real location.",
        imagine:
          "Your winery appears as a mysterious location in the game. Whoever plays it wants to see the place for real.",
      },
    ],
    mapTitle: "One place, three ways to reach it",
    mapText:
      "A map of the Alentejo connects all three projects: it is the game board, the backdrop in the book and the guide for the events. Your business can appear in several places at once.",
    stepsTitle: "How it works",
    steps: [
      "A short message about your interest.",
      "A call: project, scope, what you get.",
      "A lean agreement, one contact person.",
      "Regular updates until release.",
    ],
    closingTitle: "Which place near you deserves a story?",
    closingText:
      "Just send us a short message – we're happy to tell you more and find the right fit for your business together.",
    cta: "Request partnership",
    mail: "Email directly",
    back: "Back to home",
  },
  pt: {
    kicker: "Studio Southwest",
    title: "Parceria",
    storyTitle: "Quando o seu lugar passa a fazer parte de uma história",
    storyIntro:
      "Contamos histórias sobre o Alentejo – num livro, num jogo e numa plataforma de experiências da região. Sempre sobre lugares reais. Talvez também sobre o seu. Sem marketing ruidoso, sem banners, sem anúncios. Em vez disso: hóspedes e jogadores descobrem lugares reais de uma forma que fica na memória – e que mais tarde querem visitar de verdade.",
    imagineLabel: "Imagine",
    projects: [
      {
        name: "Lume Magic Book",
        desc:
          "Um livro personalizado sobre Lume, o dragão das falésias, e a costa portuguesa – para famílias em férias. Os hóspedes compram o voucher consigo ou recebem-no como presente. Recebe um pacote de parceiro fixo: 48 vouchers em 4 línguas, um expositor para colocar ou pendurar como pacote de teste – e uma dupla página no final do livro onde a sua casa é apresentada da melhor forma.",
        imagine:
          "A família recebe um livro maravilhoso e personalizado com o nome e a foto do(s) filho(s), leem juntos – e lembram-se do tempo maravilhoso que passaram consigo.",
      },
      {
        name: "Alentejo Events",
        desc:
          "O palco para tudo o que move o Alentejo. Esta região vive dos seus momentos: as grandes festas nas aldeias, os paraísos naturais escondidos, as descobertas culturais e os passeios especiais fora dos caminhos habituais. Quem procura o especial tem primeiro de o conseguir encontrar – e é exatamente essa lacuna que preenchemos. O Alentejoeventos é o ponto de encontro digital para tudo o que esta região tem para oferecer. Seja o seu negócio, o seu evento, a sua iniciativa artesanal ou o seu destino: levamos as pessoas até si.",
        imagine:
          "Imagine um dia normal: um hóspede planeia a sua estadia ou o seu passeio no Alentejo. Procura inspiração, experiências verdadeiras, um lugar com carácter – e, graças à sua presença, encontra exatamente a sua herdade, a sua festa ou a sua vinha.",
      },
      {
        name: "Jogo Luz e Morte",
        desc:
          "Um jogo atmosférico que mergulha nos mitos e na história do Alentejo. Lugares reais tornam-se parte da história – com nome real e localização real.",
        imagine:
          "A sua quinta aparece como cenário misterioso no jogo. Quem joga quer depois ver o lugar de verdade.",
      },
    ],
    mapTitle: "Um lugar, três caminhos até ele",
    mapText:
      "Um mapa do Alentejo liga os três projetos: é tabuleiro no jogo, fundo no livro e guia nos eventos. O seu negócio pode surgir em vários pontos ao mesmo tempo.",
    stepsTitle: "Como funciona",
    steps: [
      "Uma mensagem curta com o seu interesse.",
      "Conversa: projeto, âmbito, contrapartida.",
      "Acordo simples, um único contacto.",
      "Atualizações regulares até ao lançamento.",
    ],
    closingTitle: "Que lugar perto de si merecia uma história?",
    closingText:
      "Escreva-nos uma mensagem curta – contamos-lhe com gosto mais e encontramos juntos a melhor forma de integrar o seu negócio.",
    cta: "Pedir parceria",
    mail: "Enviar e-mail",
    back: "Voltar ao início",
  },
  nl: {
    kicker: "Studio Southwest",
    title: "Partnerschap",
    storyTitle: "Als uw plek deel wordt van een verhaal",
    storyIntro:
      "Wij vertellen verhalen over de Alentejo – in een boek, in een game en op een platform voor belevenissen in de regio. Altijd over echte plekken. Misschien ook over die van u. Geen luide marketing, geen banners, geen advertenties. In plaats daarvan: gasten en spelers ontdekken echte plekken op een manier die bijblijft – en die ze later echt willen bezoeken.",
    imagineLabel: "Stelt u zich voor",
    projects: [
      {
        name: "Lume Magic Book",
        desc:
          "Een gepersonaliseerd boek over klifdraak Lume en de Portugese kust – voor gezinnen op vakantie. Gasten kopen de voucher bij u of krijgen hem cadeau. U krijgt een vast partnerpakket: 48 vouchers in 4 talen, een voucherstandaard om te plaatsen of op te hangen als testpakket – en een eigen dubbele pagina achterin het boek waarin uw huis optimaal wordt getoond.",
        imagine:
          "Het gezin ontvangt een prachtig gepersonaliseerd boek met de naam en foto van het kind/de kinderen, ze lezen samen – en denken terug aan de geweldige tijd bij u.",
      },
      {
        name: "Alentejo Events",
        desc:
          "Het podium voor alles wat de Alentejo beweegt. Deze regio leeft van haar momenten: de grote dorpsfeesten, verborgen natuurparadijzen, culturele ontdekkingen en bijzondere excursies buiten de gebaande paden. Wie het bijzondere zoekt, moet het eerst kunnen vinden – en precies dat gat vullen wij. Alentejoeventos is het digitale ontmoetingspunt voor alles wat deze regio te bieden heeft. Of het uw bedrijf, uw evenement, uw handgemaakte event of uw uitje is: wij brengen de mensen naar u toe.",
        imagine:
          "Stelt u zich een gewone dag voor: een gast plant zijn verblijf of zijn uitje in de Alentejo. Hij zoekt inspiratie, echte belevenissen, een plek met karakter – en vindt dankzij uw aanwezigheid precies uw boerderij, uw feest of uw wijngaard.",
      },
      {
        name: "Game Luz e Morte",
        desc:
          "Een atmosferische game die diep in de mythen en geschiedenis van de Alentejo duikt. Echte plekken worden deel van het verhaal – met echte naam en echte locatie.",
        imagine:
          "Uw wijngoed duikt op als mysterieuze locatie in de game. Wie het speelt, wil de plek later echt zien.",
      },
    ],
    mapTitle: "Één plek, drie wegen ernaartoe",
    mapText:
      "Een kaart van de Alentejo verbindt alle drie projecten: speelveld in de game, achtergrond in het boek en wegwijzer bij de events. Uw bedrijf kan op meerdere plekken tegelijk verschijnen.",
    stepsTitle: "Zo werkt het",
    steps: [
      "Een kort bericht met uw interesse.",
      "Gesprek: project, omvang, tegenprestatie.",
      "Eenvoudige afspraak, één contactpersoon.",
      "Regelmatige updates tot de release.",
    ],
    closingTitle: "Welke plek bij u in de buurt verdient een verhaal?",
    closingText:
      "Stuur ons kort een bericht – we vertellen u graag meer en vinden samen de passende invulling voor uw bedrijf.",
    cta: "Partnerschap aanvragen",
    mail: "Direct e-mailen",
    back: "Terug naar de startpagina",
  },
};

const ICONS = [BookOpen, CalendarDays, Gamepad2];

const Partnerschaft = () => {
  const { lang } = useI18n();
  const c = COPY[lang] ?? COPY.de;

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="container-px mx-auto max-w-4xl py-10 md:py-16">
        <div className="flex items-center justify-between gap-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors"
          >
            <ArrowLeft className="h-4 w-4" strokeWidth={1.75} />
            {c.back}
          </Link>
          <LanguageSwitcher />
        </div>

        <header className="mt-10">
          <p className="text-[12px] uppercase tracking-[0.2em] text-accent">{c.kicker}</p>
          <h1 className="mt-2 font-display text-4xl md:text-5xl font-semibold tracking-tight">
            {c.title}
            <span className="text-accent">.</span>
          </h1>
          <h2 className="mt-6 font-display text-2xl md:text-3xl font-semibold tracking-tight max-w-2xl">
            {c.storyTitle}
          </h2>
          <p className="mt-5 max-w-2xl text-muted-foreground leading-relaxed">{c.storyIntro}</p>
        </header>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {c.projects.map((p, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <section key={p.name} className="bg-card rounded-2xl p-5 sm:p-6 shadow-soft h-full flex flex-col">
                <Icon className="h-6 w-6 text-accent" strokeWidth={1.75} />
                <h3 className="mt-4 font-display text-lg font-semibold tracking-tight" style={{ color: "#1F2937" }}>
                  {p.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed" style={{ color: "#1F2937" }}>
                  {p.desc}
                </p>
                <div
                  className="mt-4 rounded-lg border p-3.5"
                  style={{ background: "hsl(24 60% 96%)", borderColor: "hsl(24 40% 80%)" }}
                >
                  <p
                    className="text-[11px] tracking-widest uppercase mb-1 font-semibold"
                    style={{ color: "#ab5014" }}
                  >
                    {c.imagineLabel}
                  </p>
                  <p className="text-[13px] leading-relaxed" style={{ color: "#1F2937" }}>
                    {p.imagine}
                  </p>
                </div>
              </section>
            );
          })}
        </div>

        <section className="mt-12">
          <h2 className="font-display text-2xl font-semibold tracking-tight flex items-center gap-2">
            <Map className="h-5 w-5 text-accent" strokeWidth={1.75} />
            {c.mapTitle}
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground leading-relaxed">{c.mapText}</p>
        </section>

        <section className="mt-12">
          <h2 className="font-display text-2xl font-semibold tracking-tight flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-accent" strokeWidth={1.75} />
            {c.stepsTitle}
          </h2>
          <ol className="mt-5 grid gap-3 sm:grid-cols-2">
            {c.steps.map((s, i) => (
              <li key={s} className="flex items-start gap-3 rounded-xl hairline p-4">
                <span className="shrink-0 h-6 w-6 rounded-full bg-accent text-accent-foreground text-xs font-semibold flex items-center justify-center">
                  {i + 1}
                </span>
                <span className="text-sm text-muted-foreground leading-relaxed">{s}</span>
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-12">
          <h2 className="font-display text-2xl md:text-3xl font-semibold tracking-tight max-w-2xl">
            {c.closingTitle}
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground leading-relaxed">{c.closingText}</p>
        </section>

        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <Link
            to="/#kontakt"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-accent text-accent-foreground px-6 py-3.5 text-sm font-medium shadow-glow hover:opacity-95 transition"
          >
            {c.cta}
          </Link>
          <a
            href="mailto:studiosouthwest@posteo.de?subject=Partnerschaft"
            className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-medium text-foreground hover:text-accent transition-colors hairline"
          >
            {c.mail}
          </a>
        </div>
      </div>
    </main>
  );
};

export default Partnerschaft;
