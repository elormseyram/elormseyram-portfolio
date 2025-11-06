import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, Mail, Phone, MapPin, Linkedin, Globe } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip, BarChart, Bar, XAxis, YAxis } from 'recharts';

const CV = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const languageData = [
    { name: 'English', value: 95, level: 'Bilingual or Proficient (C2)' },
    { name: 'Ewe', value: 75, level: 'Upper intermediate (B2)' },
    { name: 'Fante', value: 60, level: 'Intermediate (B1)' },
    { name: 'Asante Twi', value: 75, level: 'Upper intermediate (B2)' },
  ];

  const COLORS = ['#ff69b4', '#ff8dc7', '#ffb3d9', '#ffd9ec'];

  const skillsData = [
    { name: 'Design', value: 85 },
    { name: 'Development', value: 70 },
    { name: 'QA Testing', value: 80 },
    { name: 'Communication', value: 90 },
  ];

  const handleDownloadPDF = () => {
    // This would typically trigger a PDF generation
    // For now, we'll create a print-friendly version
    window.print();
  };

  return (
    <div className="relative-content max-w-5xl mx-auto p-4 sm:p-6 space-y-4 sm:space-y-6">
      {/* Header with Download Button */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4 sm:mb-6">
        <div className="flex-1">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 break-words">SENU SEYRAM ELORM ADZO</h1>
          <p className="text-lg sm:text-xl text-highlight font-semibold mb-2 sm:mb-4">Junior Software Engineer</p>
        </div>
        <Button onClick={handleDownloadPDF} className="btn-primary w-full sm:w-auto">
          <Download className="w-4 h-4 mr-2" />
          <span className="text-sm sm:text-base">Download PDF</span>
        </Button>
      </div>

      {/* Professional Summary */}
      <Card className="glass-card p-4 sm:p-6 mb-4 sm:mb-6">
        <h2 className="text-lg sm:text-2xl font-bold mb-3 sm:mb-4 text-highlight">PROFESSIONAL SUMMARY</h2>

        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
          A motivated Junior Software Engineer with a strong foundation in UI/UX design, frontend development, and quality assurance. I excel at translating design concepts into responsive, high-performance applications using technologies like React and Flutter. With hands-on experience in both freelance and team settings, I am adept at managing the full project lifecycle, from initial user research and wireframing in Figma to development, testing, and deployment. My background in QA ensures a commitment to delivering reliable, bug-free products. I am a collaborative problem-solver, passionate about building intuitive and user-centric digital experiences.
        </p>
      </Card>

      {/* Websites, Portfolios, Profiles */}
      <Card className="glass-card p-4 sm:p-6 mb-4 sm:mb-6">
        <h2 className="text-lg sm:text-2xl font-bold mb-3 sm:mb-4 text-highlight">WEBSITES, PORTFOLIOS, PROFILES</h2>
        <ul className="space-y-2 text-xs sm:text-sm">
          <li className="flex items-start">
            <span className="text-highlight mr-2 flex-shrink-0">•</span>
            <a href="https://github.com/elormseyram" target="_blank" rel="noopener noreferrer" className="hover:text-highlight transition-colors break-all">
              https://github.com/elormseyram
            </a>
          </li>
          <li className="flex items-start">
            <span className="text-highlight mr-2 flex-shrink-0">•</span>
            <a href="https://linktr.ee/elormseyram" target="_blank" rel="noopener noreferrer" className="hover:text-highlight transition-colors break-all">
              https://linktr.ee/elormseyram
            </a>
          </li>
          <li className="flex items-start">
            <span className="text-highlight mr-2 flex-shrink-0">•</span>
            <a href="https://elormseyram-portfolio.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-highlight transition-colors break-all">
              https://elormseyram-portfolio.vercel.app/
            </a>
          </li>
        </ul>
      </Card>

      {/* Contact Information */}
      <Card className="glass-card p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-highlight" />
            <a href="mailto:seyramsenu22@gmail.com" className="text-sm hover:text-highlight transition-colors">
              seyramsenu22@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-highlight" />
            <a href="tel:+233596481875" className="text-sm hover:text-highlight transition-colors">
              +233 59 648 1875
            </a>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-highlight" />
            <span className="text-sm">TEMA, Ghana GT-090-3641</span>
          </div>
          <div className="flex items-center gap-2">
            <Linkedin className="w-4 h-4 text-highlight" />
            <a
              href="https://www.linkedin.com/in/elormseyram0804?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm hover:text-highlight transition-colors"
            >
              linkedin.com/in/elormseyram
            </a>
          </div>
        </div>
      </Card>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Left Column - Skills, Education, Certifications */}
        <div className="lg:col-span-1 space-y-6">
          {/* Skills */}
          <Card className="glass-card p-4 sm:p-6">
            <h2 className="text-lg sm:text-2xl font-bold mb-3 sm:mb-4 text-highlight">SKILLS</h2>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <span className="text-highlight mr-2">•</span>
                <span>Customer Service and Care</span>
              </li>
              <li className="flex items-start">
                <span className="text-highlight mr-2">•</span>
                <span>Problem-Solving</span>
              </li>
              <li className="flex items-start">
                <span className="text-highlight mr-2">•</span>
                <span>Critical thinking</span>
              </li>
              <li className="flex items-start">
                <span className="text-highlight mr-2">•</span>
                <span>UI/UX Design using Figma and Adobe XD</span>
              </li>
              <li className="flex items-start">
                <span className="text-highlight mr-2">•</span>
                <span>Beginner level - Web Development</span>
              </li>
              <li className="flex items-start">
                <span className="text-highlight mr-2">•</span>
                <span>Beginner level - Mobile App Development</span>
              </li>
              <li className="flex items-start">
                <span className="text-highlight mr-2">•</span>
                <span>Quality Assurance</span>
              </li>
              <li className="flex items-start">
                <span className="text-highlight mr-2">•</span>
                <span>Basic Proficiency in Languages such as C++, SQL, Java, Dart, Microsoft 365</span>
              </li>
              <li className="flex items-start">
                <span className="text-highlight mr-2">•</span>
                <span>Content Writing and Design using NotebookLM and Canva</span>
              </li>
              <li className="flex items-start">
                <span className="text-highlight mr-2">•</span>
                <span>Good Communication Skills</span>
              </li>
              <li className="flex items-start">
                <span className="text-highlight mr-2">•</span>
                <span>Proficient in using AI tools for Productivity</span>
              </li>
            </ul>
          </Card>

          {/* Skills Chart */}
          <Card className="glass-card p-4 sm:p-6">
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Skill Proficiency</h3>
            <div className="w-full" style={{ minHeight: '180px' }}>
              <ResponsiveContainer width="100%" height={180}>
                <PieChart>
                  <Pie
                    data={skillsData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, value }) => `${name}\n${value}%`}
                    outerRadius={60}
                    innerRadius={34}
                    fill="#8884d8"
                    dataKey="value"
                    paddingAngle={0}
                  >
                    {skillsData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip
                    formatter={(value: number) => `${value}%`}
                    contentStyle={{
                      backgroundColor: 'hsl(var(--card))',
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px',
                      fontSize: '12px'
                    }}
                  />
                  <Legend
                    wrapperStyle={{ fontSize: '10px', paddingTop: '8px' }}
                    iconType="circle"
                    verticalAlign="bottom"
                    height={28}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </Card>

          {/* Education */}
          <Card className="glass-card p-4 sm:p-6 mb-4 sm:mb-6">
            <h2 className="text-lg sm:text-2xl font-bold mb-3 sm:mb-4 text-highlight">EDUCATION</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold">Kwame Nkrumah University of Science and Technology</h3>
                <p className="text-sm text-muted-foreground">Kumasi, Ashanti Region</p>
                <p className="text-sm font-medium">Bachelor: Computer Science</p>
                <p className="text-xs text-muted-foreground">01/2023 - Current</p>
              </div>
              <div className="border-t border-border pt-4">
                <h3 className="font-semibold">Methodist Girls' High School</h3>
                <p className="text-sm text-muted-foreground">Mamfe, Eastern Region</p>
                <p className="text-sm font-medium">WASSCE: General Science</p>
                <p className="text-xs text-muted-foreground">09/2019 - 09/2022</p>
              </div>
            </div>
          </Card>

          {/* Certifications */}
          <Card className="glass-card p-4 sm:p-6 mb-4 sm:mb-6">
            <h2 className="text-lg sm:text-2xl font-bold mb-3 sm:mb-4 text-highlight">CERTIFICATIONS</h2>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <span className="text-highlight mr-2">•</span>
                <span>Core Member - Google Developer Students' Club</span>
              </li>
              <li className="flex items-start">
                <span className="text-highlight mr-2">•</span>
                <span>Flutter Mobile App Development Bootcamp – Beistand</span>
              </li>
              <li className="flex items-start">
                <span className="text-highlight mr-2">•</span>
                <span>UI/UX Designer with Figma and Adobe – Udemy</span>
              </li>
              <li className="flex items-start">
                <span className="text-highlight mr-2">•</span>
                <span>Cyber Security Fundamentals – IBM SkillsBuild</span>
              </li>
              <li className="flex items-start">
                <span className="text-highlight mr-2">•</span>
                <span>EF SET English Certificate – 75/100 (C2 Proficient)</span>
              </li>
            </ul>
          </Card>

          {/* Languages */}
          <Card className="glass-card p-4 sm:p-6 mb-4 sm:mb-6">
            <h2 className="text-lg sm:text-2xl font-bold mb-3 sm:mb-4 text-highlight">LANGUAGES</h2>
            <div className="w-full" style={{ minHeight: '250px' }}>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart
                  data={languageData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 60 }}
                >
                  <XAxis
                    dataKey="name"
                    tick={{ fill: 'hsl(var(--foreground))', fontSize: 12 }}
                    angle={-45}
                    textAnchor="end"
                    height={80}
                  />
                  <YAxis
                    type="number"
                    domain={[0, 100]}
                    tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }}
                  />
                  <Tooltip
                    formatter={(value: number) => [`${value}%`, 'Proficiency']}
                    contentStyle={{
                      backgroundColor: 'hsl(var(--card))',
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px'
                    }}
                  />
                  <Bar
                    dataKey="value"
                    radius={[8, 8, 0, 0]}
                  >
                    {languageData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 space-y-2">
              {languageData.map((lang, index) => (
                <div key={lang.name} className="text-xs text-muted-foreground">
                  <span className="font-semibold text-foreground">{lang.name}:</span> {lang.level}
                </div>
              ))}
            </div>
          </Card>

          {/* Hobbies */}
          <Card className="glass-card p-6">
            <h2 className="text-lg sm:text-2xl font-bold mb-4 text-highlight">HOBBIES</h2>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <span className="text-highlight mr-2">•</span>
                <span>Playing basketball, football, table tennis</span>
              </li>
              <li className="flex items-start">
                <span className="text-highlight mr-2">•</span>
                <span>Listening to Music</span>
              </li>
              <li className="flex items-start">
                <span className="text-highlight mr-2">•</span>
                <span>Playing mobile games</span>
              </li>
              <li className="flex items-start">
                <span className="text-highlight mr-2">•</span>
                <span>Taking Walks</span>
              </li>
            </ul>
          </Card>
        </div>

        {/* Right Column - Experience, Accomplishments, Leadership, References */}
        <div className="lg:col-span-2 space-y-6">
          {/* Experience */}
          <Card className="glass-card p-6">
            <h2 className="text-lg sm:text-2xl font-bold mb-6 text-highlight">WORK HISTORY</h2>

            {/* Freelancer - UI/UX Designer */}
            <div className="mb-6 pb-6 border-b border-border">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-lg font-semibold">UI/UX Designer</h3>
                  <p className="text-sm">Freelancer</p>
                  <p className="text-xs text-muted-foreground">Tema, Greater Accra</p>
                </div>
                <span className="text-xs text-muted-foreground whitespace-nowrap">09/2024 - Current</span>
              </div>
              <p className="text-sm text-foreground mt-2">Client‑facing design delivery — research, design systems, and iterations.</p>
              <ul className="space-y-1 text-sm mt-3">
                <li className="flex items-start"><span className="text-highlight mr-2">•</span><span className="text-foreground">Wireframes and prototypes for clear stakeholder alignment.</span></li>
                <li className="flex items-start"><span className="text-highlight mr-2">•</span><span className="text-foreground">User flows with measurable usability improvements.</span></li>
                <li className="flex items-start"><span className="text-highlight mr-2">•</span><span className="text-foreground">Design systems and tokens across platforms.</span></li>
                <li className="flex items-start"><span className="text-highlight mr-2">•</span><span className="text-foreground">Usability testing and iteration cycles.</span></li>
                <li className="flex items-start"><span className="text-highlight mr-2">•</span><span className="text-foreground">Managed clients, scope, and timelines.</span></li>
              </ul>
            </div>
            {/* Millikem Ventures - Mobile Money Agent */}
            <div className="mb-6 pb-6 border-b border-border">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-lg font-semibold">Mobile Money Agent (Part‑Time)</h3>
                  <p className="text-sm">Millikem Ventures</p>
                  <p className="text-xs text-muted-foreground">Tema, Greater Accra</p>
                </div>
                <span className="text-xs text-muted-foreground whitespace-nowrap">05/2018 - Current</span>
              </div>
              <p className="text-sm text-foreground mt-2">Cash services and customer support with compliance and accurate records.</p>
              <ul className="space-y-1 text-sm mt-3">
                <li className="flex items-start"><span className="text-highlight mr-2">•</span><span className="text-foreground">Processed deposits, withdrawals, transfers with accuracy.</span></li>
                <li className="flex items-start"><span className="text-highlight mr-2">•</span><span className="text-foreground">Resolved customer issues and escalations promptly.</span></li>
                <li className="flex items-start"><span className="text-highlight mr-2">•</span><span className="text-foreground">Maintained compliance and precise transaction records.</span></li>
              </ul>
            </div>
            {/* React Developer and QA – Everything Technologies */}
            <div className="mb-6 pb-6 border-b border-border">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-lg font-semibold">React Developer and QA</h3>
                  <p className="text-sm">Everything Technologies</p>
                  <p className="text-xs text-muted-foreground">Tema</p>
                </div>
                <span className="text-xs text-muted-foreground whitespace-nowrap">10/2025 - 11/2025</span>
              </div>
              <p className="text-sm text-foreground mt-2">Shipped React features while running structured QA in ClickUp for clear ownership and faster fixes.</p>
              <ul className="space-y-1 text-sm mt-3">
                <li className="flex items-start"><span className="text-highlight mr-2">•</span><span className="text-foreground">Planned test cycles, triaged issues, and tracked resolution in ClickUp.</span></li>
                <li className="flex items-start"><span className="text-highlight mr-2">•</span><span className="text-foreground">Built responsive React components with a11y and performance in mind.</span></li>
                <li className="flex items-start"><span className="text-highlight mr-2">•</span><span className="text-foreground">Aligned API contracts and UX behaviors with design/backend.</span></li>
              </ul>
            </div>

            {/* Flutter & Dart Mobile App Intern */}
            <div className="mb-6 pb-6 border-b border-border">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-lg font-semibold">Flutter & Dart Mobile App Intern</h3>
                  <p className="text-sm">Enterprise Computing Limited</p>
                  <p className="text-xs text-muted-foreground">Tema</p>
                </div>
                <span className="text-xs text-muted-foreground whitespace-nowrap">09/2025 - 10/2025</span>
              </div>
              <p className="text-sm text-foreground mt-2">Cross‑platform Flutter delivery with hands‑on UI and team collaboration.</p>
              <ul className="space-y-1 text-sm mt-3">
                <li className="flex items-start"><span className="text-highlight mr-2">•</span><span className="text-foreground">Implemented Flutter UI components and optimized performance.</span></li>
                <li className="flex items-start"><span className="text-highlight mr-2">•</span><span className="text-foreground">Translated prototypes into production experiences.</span></li>
                <li className="flex items-start"><span className="text-highlight mr-2">•</span><span className="text-foreground">Collaborated in reviews for iterative improvements.</span></li>
              </ul>
            </div>
            {/* TicketMate Mobile App */}
            <div className="mb-6 pb-6 border-b border-border">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-lg font-semibold">UI/UX Designer</h3>
                  <p className="text-sm">TicketMate Mobile App</p>
                  <p className="text-xs text-muted-foreground">KNUST, Kumasi</p>
                </div>
                <span className="text-xs text-muted-foreground whitespace-nowrap">05/2025 - 08/2025</span>
              </div>
              <p className="text-sm text-foreground mt-2">End‑to‑end product design from discovery to ship with a consistent design system.</p>
              <ul className="space-y-1 text-sm mt-3">
                <li className="flex items-start"><span className="text-highlight mr-2">•</span><span className="text-foreground">Wireframes and interactive prototypes to align stakeholders.</span></li>
                <li className="flex items-start"><span className="text-highlight mr-2">•</span><span className="text-foreground">User flows for seamless navigation across the journey.</span></li>
                <li className="flex items-start"><span className="text-highlight mr-2">•</span><span className="text-foreground">Design system and style guides for cross‑platform consistency.</span></li>
                <li className="flex items-start"><span className="text-highlight mr-2">•</span><span className="text-foreground">Usability testing with actionable improvements.</span></li>
              </ul>
            </div>

            {/* CleanseGuru & MediScan Project - QA Engineer */}
            <div className="mb-6 pb-6 border-b border-border">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-lg font-semibold">Quality Assurance Engineer</h3>
                  <p className="text-sm">CleanseGuru & MediScan Project</p>
                  <p className="text-xs text-muted-foreground">KNUST, Kumasi</p>
                </div>
                <span className="text-xs text-muted-foreground whitespace-nowrap">02/2025 - 04/2025</span>
              </div>
              <p className="text-sm text-foreground mt-2">End‑to‑end QA enabling reliable releases and faster iteration.</p>
              <ul className="space-y-1 text-sm mt-3">
                <li className="flex items-start"><span className="text-highlight mr-2">•</span><span className="text-foreground">Thorough regression each cycle; reduced escaped defects.</span></li>
                <li className="flex items-start"><span className="text-highlight mr-2">•</span><span className="text-foreground">Partnered with devs to improve functionality and stability.</span></li>
                <li className="flex items-start"><span className="text-highlight mr-2">•</span><span className="text-foreground">Streamlined QA workflows to cut time to market.</span></li>
                <li className="flex items-start"><span className="text-highlight mr-2">•</span><span className="text-foreground">Participated in sprint planning and stand‑ups with QA input.</span></li>
                <li className="flex items-start"><span className="text-highlight mr-2">•</span><span className="text-foreground">Demoed new features to stakeholders for acceptance.</span></li>
              </ul>
            </div>

            {/* Ghana Ports and Harbours Authority - IT Intern */}
            <div className="mb-6 pb-6 border-b border-border">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-lg font-semibold">IT Intern</h3>
                  <p className="text-sm">Ghana Ports and Harbours Authority</p>
                  <p className="text-xs text-muted-foreground">Tema, Accra</p>
                </div>
                <span className="text-xs text-muted-foreground whitespace-nowrap">09/2024 - 10/2024</span>
              </div>
              <p className="text-sm text-foreground mt-2">IT support and data integrity work driving day‑to‑day productivity.</p>
              <ul className="space-y-1 text-sm mt-3">
                <li className="flex items-start"><span className="text-highlight mr-2">•</span><span className="text-foreground">Resolved support tickets to keep teams productive.</span></li>
                <li className="flex items-start"><span className="text-highlight mr-2">•</span><span className="text-foreground">Contributed to team IT projects and configurations.</span></li>
                <li className="flex items-start"><span className="text-highlight mr-2">•</span><span className="text-foreground">Assisted with database integrity, security, and availability.</span></li>
                <li className="flex items-start"><span className="text-highlight mr-2">•</span><span className="text-foreground">Collaborated across departments to resolve software issues.</span></li>
              </ul>
            </div>

            {/* Chirp Mobile App Project - QA Engineer */}
            <div className="mb-6 pb-6 border-b border-border">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-lg font-semibold">Quality Assurance Engineer</h3>
                  <p className="text-sm">Chirp — Mobile App Project</p>
                  <p className="text-xs text-muted-foreground">KNUST, Kumasi</p>
                </div>
                <span className="text-xs text-muted-foreground whitespace-nowrap">06/2024 - 09/2024</span>
              </div>
              <p className="text-sm text-foreground mt-2">Pre‑release validation and structured quality communication for smooth launches.</p>
              <ul className="space-y-1 text-sm mt-3">
                <li className="flex items-start"><span className="text-highlight mr-2">•</span><span className="text-foreground">Ran comprehensive test passes pre‑launch.</span></li>
                <li className="flex items-start"><span className="text-highlight mr-2">•</span><span className="text-foreground">Aligned QA, dev, PM with clear channels and SLAs.</span></li>
                <li className="flex items-start"><span className="text-highlight mr-2">•</span><span className="text-foreground">Assessed feature scope and testing demands collaboratively.</span></li>
                <li className="flex items-start"><span className="text-highlight mr-2">•</span><span className="text-foreground">Managed bug tracking and stakeholder updates.</span></li>
              </ul>
            </div>


          </Card>

          {/* Accomplishments */}
          <Card className="glass-card p-6">
            <h2 className="text-lg sm:text-2xl font-bold mb-4 text-highlight">ACCOMPLISHMENTS</h2>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <span className="text-highlight mr-2">•</span>
                <span>Collaborated with team of 9 in the development of Cleanseguru Website and Mediscan AI development</span>
              </li>
              <li className="flex items-start">
                <span className="text-highlight mr-2">•</span>
                <span>Supervised team of 3 new staff members at Millikem Ventures.</span>
              </li>
              <li className="flex items-start">
                <span className="text-highlight mr-2">•</span>
                <span>Won first place in Senior High inter-school's basketball zonal as captain for the year 2023.</span>
              </li>
              <li className="flex items-start">
                <span className="text-highlight mr-2">•</span>
                <span>Participated in the KNUST Inter-Hall Fresher's Games and emerged Second together with my team for the year 2023.</span>
              </li>
              <li className="flex items-start">
                <span className="text-highlight mr-2">•</span>
                <span>Supervised the development of an I2C LCD Display Message.</span>
              </li>
              <li className="flex items-start">
                <span className="text-highlight mr-2">•</span>
                <span>Collaborated with a team of 5 in the development of TicketMate. An Event booking app</span>
              </li>
            </ul>
          </Card>

          {/* Leadership */}
          <Card className="glass-card p-6">
            <h2 className="text-lg sm:text-2xl font-bold mb-4 text-highlight">LEADERSHIP EXPERIENCES</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold">Women's Commission General Secretary</h3>
                <p className="text-sm text-muted-foreground">Computer Science Society</p>
                <p className="text-xs text-muted-foreground">2023/2024 Administration</p>
              </div>
              <div className="border-t border-border pt-4">
                <h3 className="font-semibold">Head of Scholarship and Internship Committee</h3>
                <p className="text-sm text-muted-foreground">Computer Science Society</p>
                <p className="text-xs text-muted-foreground">2025/2026 Administration</p>
              </div>
            </div>
          </Card>

          {/* References */}
          <Card className="glass-card p-6">
            <h2 className="text-lg sm:text-2xl font-bold mb-4 text-highlight">REFERENCES</h2>
            <div className="space-y-4 text-sm">
              <div>
                <p className="font-semibold">Dr. Rev. Kwame Ofosuhene Peasah</p>
                <p className="text-muted-foreground">Lecturer, Department of Computer Science, KNUST</p>
                <p>Contact: +233 24 426 3434</p>
                <p>Email: kopeasah.cos@knust.edu.gh</p>
              </div>
              <div className="border-t border-border pt-4">
                <p className="font-semibold">Mrs. Yvonne Sarkodie</p>
                <p className="text-muted-foreground">Head, Department of Human Resource, GPHA (Fishing Harbor)</p>
                <p>Contact: +233 24 427 2499</p>
              </div>
              <div className="border-t border-border pt-4">
                <p className="font-semibold">Dr. Linda A. Baning</p>
                <p className="text-muted-foreground">Lecturer, Computer Science, Kwame Nkrumah University of Science and Technology</p>
                <p>Contact: +233 54 328 6900</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CV;
