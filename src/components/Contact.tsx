import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MessageSquare, Users, User, MapPin, Send } from "lucide-react";
import { useState } from "react";

const coordinators = [
  {
    name: "Dr. Roshan Jahan",
    role: "Faculty Coordinator",
    department: "Computer Science Department",
    email: "roshan.jahan@iul.ac.in",
    phone: "+91 7607860009",
    expertise: "Data Structures & Algorithms"
  },
  {
    name: "Taha Iftikhar",
    role: "Student Coordinator",
    department: "Final Year CSE",
    email: "tiftikhar@student.iul.ac.in", 
    phone: "+91 9838605661",
    expertise: "Data Structures & Algorithms"
  },
  {
    name: "Mohd Farhan Khan",
    role: "Student Coordinator",
    department: "Final Year CSE",
    email: "farmmd@student.iul.ac.in",
    phone: "+91 7376784844", 
    expertise: "Competitive Programming & DSA"
  }
];

// const mentors = [
//   {
//     name: "Vikram Kumar",
//     company: "Google",
//     role: "Software Engineer",
//     expertise: "System Design & DSA"
//   },
//   {
//     name: "Anita Desai", 
//     company: "Microsoft",
//     role: "Senior SDE",
//     expertise: "Algorithms & Problem Solving"
//   },
//   {
//     name: "Rohit Singh",
//     company: "Amazon",
//     role: "Principal Engineer", 
//     expertise: "Competitive Programming"
//   }
// ];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    rollNo: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section className="py-20 px-6 bg-gradient-hero">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Contact & Team
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get in touch with our organizing team and mentors for any queries or guidance
          </p>
        </div>

        <div className="grid gap-12 mb-16">
          {/* Contact Form */}
          {/* <Card className="bg-gradient-card shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl text-foreground">
                <MessageSquare className="w-6 h-6 text-accent" />
                Get In Touch
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Name *</label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      className="bg-secondary border-border"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Roll Number</label>
                    <Input
                      name="rollNo"
                      value={formData.rollNo}
                      onChange={handleInputChange}
                      placeholder="Your roll number"
                      className="bg-secondary border-border"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Email *</label>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@college.edu"
                    className="bg-secondary border-border"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Message *</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Your message or query..."
                    className="bg-secondary border-border min-h-[120px]"
                    required
                  />
                </div>
                <Button type="submit" variant="hero" className="w-full">
                  <Send className="w-4 h-4" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card> */}

          {/* Quick Contact Info */}
          <div className="space-y-6">
            <Card className="bg-gradient-card shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl text-foreground">
                  <MapPin className="w-5 h-5 text-accent" />
                  Quick Contact
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <div>
                    <div className="font-medium text-foreground">Email</div>
                    <div className="text-muted-foreground">tiftikhar@student.iul.ac.in</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <div>
                    <div className="font-medium text-foreground">WhatsApp Group</div>
                    <div className="text-muted-foreground">+91 9838605661</div>
                  </div>
                </div>
                {/* <div className="flex items-center gap-3">
                  <MessageSquare className="w-5 h-5 text-primary" />
                  <div>
                    <div className="font-medium text-foreground">Discord Server</div>
                    <div className="text-muted-foreground">discord.gg/codecraft2025</div>
                  </div>
                </div> */}
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-accent/10 to-primary/10 border-accent/30">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold text-foreground mb-2">Need Immediate Help?</h3>
                <p className="text-muted-foreground mb-4">Join our support channels for instant assistance</p>
                <div className="flex gap-3 justify-center">
                  <Button variant="outline_tech" size="sm"
                    onClick={() => window.open('https://forms.gle/GJAGoEi4SBKmnygj9', '_blank')}
                  >Join WhatsApp</Button>
                  {/* <Button variant="tech" size="sm">Join Discord</Button> */}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Event Coordinators */}
        <Card className="bg-gradient-card shadow-card mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl text-foreground">
              <Users className="w-6 h-6 text-accent" />
              Event Coordinators
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              {coordinators.map((coordinator, index) => (
                <div key={index} className="bg-secondary/50 rounded-lg p-6 text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto">
                    {coordinator.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-foreground">{coordinator.name}</h4>
                    <Badge className="bg-accent/20 text-accent border-accent/30 mb-2">
                      {coordinator.role}
                    </Badge>
                    <p className="text-sm text-muted-foreground">{coordinator.department}</p>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 justify-center text-muted-foreground">
                      <Mail className="w-4 h-4" />
                      <span>{coordinator.email}</span>
                    </div>
                    <div className="flex items-center gap-2 justify-center text-muted-foreground">
                      <Phone className="w-4 h-4" />
                      <span>{coordinator.phone}</span>
                    </div>
                  </div>
                  <Badge className="bg-primary/20 text-primary border-primary/30">
                    {coordinator.expertise}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Mentors */}
        {/* <Card className="bg-gradient-card shadow-glow">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl text-foreground">
              <User className="w-6 h-6 text-accent" />
              Industry Mentors
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              {mentors.map((mentor, index) => (
                <div key={index} className="bg-secondary/50 rounded-lg p-6 text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center text-accent-foreground font-bold text-lg mx-auto">
                    {mentor.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-foreground">{mentor.name}</h4>
                    <div className="text-accent font-semibold">{mentor.company}</div>
                    <p className="text-sm text-muted-foreground">{mentor.role}</p>
                  </div>
                  <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                    {mentor.expertise}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card> */}
      </div>
    </section>
  );
};

export default Contact;