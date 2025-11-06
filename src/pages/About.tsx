import { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Card } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import CV from '@/components/CV';
import AboutMe from '@/components/AboutMe';
import { FileText, User } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-background relative-content">
      <Navigation />
      <div className="pt-20 pb-8 sm:pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Tabs defaultValue="cv" className="w-full">
            <div className="flex justify-center mb-6 sm:mb-8">
              <TabsList className="glass-card p-1 w-full sm:w-auto">
                <TabsTrigger 
                  value="cv" 
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-xs sm:text-sm"
                >
                  <FileText className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                  <span className="hidden sm:inline">CV / Resume</span>
                  <span className="sm:hidden">CV</span>
                </TabsTrigger>
                <TabsTrigger 
                  value="about" 
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-xs sm:text-sm"
                >
                  <User className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                  <span className="hidden sm:inline">About Me</span>
                  <span className="sm:hidden">About</span>
                </TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="cv" className="mt-0">
              <CV />
            </TabsContent>
            
            <TabsContent value="about" className="mt-0">
              <AboutMe />
            </TabsContent>
          </Tabs>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
