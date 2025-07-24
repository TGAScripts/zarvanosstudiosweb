import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Code, Shirt, Star, MessageCircle, ShoppingCart } from "lucide-react";
import AnimatedCounter from "@/components/AnimatedCounter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-dark"></div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-2 h-2 bg-zarvanos-red rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-32 w-1 h-1 bg-zarvanos-gold rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-32 left-1/3 w-1.5 h-1.5 bg-zarvanos-red rounded-full animate-pulse delay-500"></div>
          <div className="absolute bottom-20 right-20 w-1 h-1 bg-zarvanos-gold rounded-full animate-pulse delay-2000"></div>
          <div className="absolute top-1/2 left-10 w-1 h-1 bg-zarvanos-red rounded-full animate-pulse delay-300"></div>
          <div className="absolute top-60 right-10 w-1.5 h-1.5 bg-zarvanos-gold rounded-full animate-pulse delay-700"></div>
          <div className="absolute bottom-40 right-1/4 w-1 h-1 bg-zarvanos-red rounded-full animate-pulse delay-1500"></div>
          <div className="absolute top-32 left-1/2 w-1 h-1 bg-zarvanos-gold rounded-full animate-pulse delay-2500"></div>
          <div className="absolute bottom-60 left-40 w-1.5 h-1.5 bg-zarvanos-red rounded-full animate-pulse delay-800"></div>
          <div className="absolute top-80 right-40 w-1 h-1 bg-zarvanos-gold rounded-full animate-pulse delay-1200"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
              ZARVANOS
            </h1>
            <h2 className="text-2xl md:text-4xl font-light text-foreground mb-2">
              STUDIOS
            </h2>
            <div className="h-1 w-32 bg-gradient-primary mx-auto rounded-full"></div>
          </div>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-6 leading-relaxed">
            Premium FiveM Scripts & Custom Kleidungsdesigns
            <br />
            <span className="text-zarvanos-gold">Professionelle Entwicklung seit über 10 Jahren</span>
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 text-center">
            <div 
              className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-4 cursor-pointer hover:border-zarvanos-red/50 transition-all duration-300"
              onClick={() => {
                document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                setTimeout(() => {
                  document.getElementById('scripts-card')?.classList.add('animate-bounce');
                  setTimeout(() => document.getElementById('scripts-card')?.classList.remove('animate-bounce'), 1000);
                }, 800);
              }}
            >
              <Code className="w-8 h-8 text-zarvanos-red mx-auto mb-2" />
              <h3 className="font-semibold text-foreground mb-1">Scripts</h3>
              <p className="text-sm text-muted-foreground">Selbst entwickelte FiveM Lösungen</p>
            </div>
            <div 
              className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-4 cursor-pointer hover:border-zarvanos-gold/50 transition-all duration-300"
              onClick={() => {
                document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                setTimeout(() => {
                  document.getElementById('clothing-card')?.classList.add('animate-bounce');
                  setTimeout(() => document.getElementById('clothing-card')?.classList.remove('animate-bounce'), 1000);
                }, 800);
              }}
            >
              <Shirt className="w-8 h-8 text-zarvanos-gold mx-auto mb-2" />
              <h3 className="font-semibold text-foreground mb-1">Custom Kleidung</h3>
              <p className="text-sm text-muted-foreground">Von der Idee zum fertigen Design</p>
            </div>
            <div 
              className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-4 cursor-pointer hover:border-zarvanos-red/50 transition-all duration-300"
              onClick={() => {
                document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                setTimeout(() => {
                  document.getElementById('about')?.classList.add('animate-pulse');
                  setTimeout(() => document.getElementById('about')?.classList.remove('animate-pulse'), 2000);
                }, 800);
              }}
            >
              <Star className="w-8 h-8 text-zarvanos-red mx-auto mb-2" />
              <h3 className="font-semibold text-foreground mb-1">Qualität</h3>
              <p className="text-sm text-muted-foreground">Registriertes Gewerbe seit 2020</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-tebex-mint via-tebex-mint to-zarvanos-red hover:from-tebex-mint/90 hover:via-tebex-mint/80 hover:to-zarvanos-red/90 text-white shadow-glow transition-all duration-300 hover:shadow-[0_0_40px_hsl(var(--tebex-mint)_/_0.4)]"
            >
              <ShoppingCart className="mr-2" />
              Tebex Store
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="bg-gradient-to-r from-discord-purple to-zarvanos-gold border-discord-purple text-white hover:from-discord-purple/90 hover:to-zarvanos-gold/90 transition-all duration-300 shadow-glow"
            >
              <MessageCircle className="mr-2" />
              Discord: Zarvanos
            </Button>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-zarvanos-gold rounded-full flex justify-center">
            <div className="w-1 h-3 bg-zarvanos-gold rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">Services</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-primary mx-auto rounded-full mb-16"></div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* FiveM Scripts */}
            <Card id="scripts-card" className="bg-card border-border hover:border-zarvanos-red/50 transition-all duration-300 hover:shadow-card group">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-zarvanos-red/20 rounded-lg mr-4 group-hover:bg-zarvanos-red/30 transition-colors">
                    <Code className="w-8 h-8 text-zarvanos-red" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">FiveM Scripts</h3>
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Selbst entwickelte Scripts für deinen FiveM Server. 
                  Qualität und Performance stehen im Vordergrund - 
                  entwickelt von einem erfahrenen Developer seit mehr als 7 Jahren.
                  Custom Scripts auch auf Anfrage möglich.
                </p>
                <div className="flex items-center text-tebex-mint hover:text-tebex-mint/80 transition-colors cursor-pointer">
                  <Star className="w-4 h-4 mr-2" />
                  <span className="text-sm font-medium underline">Verfügbar im Tebex Store</span>
                </div>
              </CardContent>
            </Card>

            {/* Custom Kleidung */}
            <Card id="clothing-card" className="bg-card border-border hover:border-zarvanos-gold/50 transition-all duration-300 hover:shadow-card group">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-zarvanos-gold/20 rounded-lg mr-4 group-hover:bg-zarvanos-gold/30 transition-colors">
                    <Shirt className="w-8 h-8 text-zarvanos-gold" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Custom Kleidung</h3>
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Custom Kleidungsdesigns für FiveM - nicht nur Fraktionskleidung! 
                  Ich designe und fertige gerne alle eigenen Kleidungswünsche an.
                  Von der Idee bis zum Endprodukt arbeite ich alles auf Kundenwunsch ab.
                </p>
                <div className="flex items-center text-discord-purple">
                  <Star className="w-4 h-4 mr-2" />
                  <span className="text-sm font-medium">Auf Anfrage über Discord</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-zarvanos-dark-gray/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            <span className="bg-gradient-primary bg-clip-text text-transparent">Über Zarvanos Studios</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-primary mx-auto rounded-full mb-12"></div>
          
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            Seit über 10 Jahren entwickle ich - angefangen mit C++, dann C#, jetzt hauptsächlich Lua für FiveM Scripts.
            Vor einigen Monaten begann ich mit custom Kleidungsdesigns und fand großes Interesse daran.
            Was als Hobby begann, ist heute ein <span className="text-zarvanos-gold font-semibold">registriertes Gewerbe</span> 
            mit dem Fokus auf Qualität und Kundenzufriedenheit.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-zarvanos-red mb-2">10+</div>
              <div className="text-muted-foreground">Jahre Erfahrung</div>
            </div>
            <div className="text-center">
              <AnimatedCounter end={100} suffix="+" />
              <div className="text-muted-foreground">Projekte realisiert</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-zarvanos-red mb-2">100%</div>
              <div className="text-muted-foreground">Custom Solutions</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Bereit für dein <span className="bg-gradient-primary bg-clip-text text-transparent">nächstes Projekt</span>?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            <span className="text-tebex-mint font-semibold">Tebex Store:</span> Direkter Einkauf meiner Scripts möglich<br />
            <span className="text-discord-purple font-semibold">Discord Anfragen:</span> Custom Kleidung - Grundlage, Idee, Modelle besprechen, 
            ggf. Termin für Anruf zur Vorstellungsplanung<br />
            <span className="text-zarvanos-gold font-semibold">Shop in Planung:</span> Kleidungs-Shop kommt bald!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-tebex-mint via-tebex-mint to-zarvanos-red hover:from-tebex-mint/90 hover:via-tebex-mint/80 hover:to-zarvanos-red/90 text-white shadow-glow transition-all duration-300"
            >
              <ShoppingCart className="mr-2" />
              Zum Tebex Store
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="bg-gradient-to-r from-discord-purple to-zarvanos-gold border-discord-purple text-white hover:from-discord-purple/90 hover:to-zarvanos-gold/90 transition-all duration-300 shadow-glow"
            >
              <MessageCircle className="mr-2" />
              Discord Kontakt
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border bg-zarvanos-dark-gray/30">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground">
            © 2025 Zarvanos Studios - Professional FiveM Development
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;