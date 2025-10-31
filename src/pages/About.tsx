import Navbar from "@/components/Navbar";
import { Card } from "@/components/ui/card";
import { Target, Heart, Users, TrendingUp } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                About EthioUniversity Guide
              </h1>
              <p className="text-muted-foreground text-lg">
                Your trusted partner in navigating Ethiopian higher education
              </p>
            </div>

            <div className="space-y-8">
              <Card className="p-8 shadow-[var(--shadow-card)]">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-r from-secondary to-primary p-3 rounded-full">
                    <Target className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-3">Our Vision</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      To become Ethiopia's most trusted and accessible digital platform for discovering 
                      and learning about universities, empowering students, parents, and researchers with 
                      accurate and organized institutional information.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 shadow-[var(--shadow-card)]">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-r from-secondary to-primary p-3 rounded-full">
                    <Heart className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-3">Our Mission</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      To provide a centralized, easy-to-use university information system that offers 
                      comprehensive academic, administrative, and campus details — helping users make 
                      informed decisions and supporting universities in presenting verified data.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 shadow-[var(--shadow-card)]">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <Users className="h-6 w-6 text-primary" />
                  What We Offer
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-primary mb-2">Comprehensive Information</h3>
                      <p className="text-muted-foreground text-sm">
                        Detailed profiles of universities including programs, facilities, and leadership
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-2">Easy Comparison</h3>
                      <p className="text-muted-foreground text-sm">
                        Side-by-side comparison tools to help you make informed decisions
                      </p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-primary mb-2">Free Access</h3>
                      <p className="text-muted-foreground text-sm">
                        100% free platform accessible to all students and parents
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-2">Updated Content</h3>
                      <p className="text-muted-foreground text-sm">
                        Regularly updated information to ensure accuracy and relevance
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-8 shadow-[var(--shadow-card)] bg-gradient-to-br from-primary/5 to-secondary/5">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-r from-secondary to-primary p-3 rounded-full">
                    <TrendingUp className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-3">Our Commitment</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      We are committed to empowering Ethiopian students with the information they need 
                      to make confident decisions about their higher education journey. Through our platform, 
                      we aim to bridge the gap between students and universities, making quality education 
                      information accessible to everyone.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>&copy; 2025 EthioUniversity Guide. Empowering students with information.</p>
        </div>
      </footer>
    </div>
  );
};

export default About;
