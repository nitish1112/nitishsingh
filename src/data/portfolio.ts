export const portfolio = {
  personal: {
    name: 'Nitish Kumar Singh',
    initials: 'NS',
    title: 'Mobile Application Developer',
    secondaryTitle: 'Networking Enthusiast',
    location: 'Gawarko, Kathmandu',
    email: 'nitishsingh32211@gmail.com',
    resumeUrl: '/resume/Nitish-Kumar-Singh-Resume.pdf',
    intro:
      'I build thoughtful mobile experiences and approach technical problems with a practical systems mindset.',
    summary:
      'IT graduate specializing in networking and mobile application development, with hands-on experience designing and developing mobile applications at Digit Nepal. Skilled in troubleshooting, subnetting, virtualization, basic network security, and cross-functional UI/UX collaboration.',
  },
  socialLinks: [
    { label: 'Facebook', icon: 'facebook', url: 'https://www.facebook.com/share/1D3qmjGnv7/?mibextid=wwXIfr' },
    { label: 'Instagram', icon: 'instagram', url: 'https://www.instagram.com/nitish_cng?igsi=MWw3bHNwaXNxMXcxcA%3D%3D&utm_source=qr' },
    { label: 'Gmail', icon: 'gmail', url: 'mailto:nitishsingh32211@gmail.com' },
    { label: 'Snapchat', icon: 'snapchat', url: 'https://snapchat.com/t/svlS2DkY' },
    { label: 'WhatsApp', icon: 'whatsapp', url: 'https://wa.me/+9779862241112' },
    { label: 'LinkedIn', icon: 'linkedin', url: 'https://www.linkedin.com/in/nitish-kumar-singh-51a598358?utm_source=share_via&utm_content=profile&utm_medium=member_ios' },
    { label: 'GitHub', icon: 'github', url: 'https://github.com/nitish1112' },
  ],
  navigation: [
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Experience', id: 'experience' },
    { label: 'Education', id: 'education' },
    { label: 'Certification', id: 'certification' },
    { label: 'Contact', id: 'contact' },
  ],
  skills: [
    {
      title: 'Mobile Development',
      note: 'Application delivery foundations',
      items: ['Mobile app development', 'Clean & structured code', 'Testing & debugging', 'Code reviews', 'Performance optimization'],
    },
    {
      title: 'Networking',
      note: 'Infrastructure fundamentals',
      items: ['Network troubleshooting', 'Subnetting', 'IP addressing', 'Basic network security', 'Hardware fundamentals'],
    },
    {
      title: 'Tools & Platforms',
      note: 'Practical technical toolkit',
      items: ['VMware', 'VirtualBox', 'Git & GitHub basics', 'Adobe Photoshop', 'MS Office'],
    },
    {
      title: 'Collaboration',
      note: 'Working well across teams',
      items: ['UI/UX collaboration', 'Communication', 'Time management', 'Creativity', 'Documentation'],
    },
  ],
  experience: [
    {
      role: 'Mobile Application Developer',
      company: 'Digit Nepal',
      dates: 'Jun 2025 — Nov 2025',
      focus: 'Mobile engineering internship experience',
      responsibilities: [
        'Designed and developed mobile applications.',
        'Maintained clean, scalable code and contributed to code reviews.',
        'Collaborated with UI/UX designers, backend developers, and QA teams.',
        'Participated in testing and deployment tasks.',
        'Helped ensure application performance, security, and optimization.',
      ],
    },
    {
      role: 'Graphic Designer',
      company: 'Cambridge InfoTech',
      dates: 'Jul 2022 — Dec 2022',
      focus: 'Design, documentation, and technical support',
      responsibilities: [
        'Created basic graphic design work using Adobe Photoshop.',
        'Used Word, Excel, and PowerPoint for daily tasks.',
        'Assisted with document formatting, data entry, scanning, printing, and file management.',
        'Developed foundational hardware and networking knowledge.',
      ],
    },
  ],
  education: [
    {
      qualification: 'BSc (Hons) Computer Systems Engineering (IT)',
      institution: 'ISMT College, Kathmandu',
      year: '2025',
      result: '63% · Second Class Honours (First Division)',
    },
    {
      qualification: 'Intermediate / +2 (Computer Science)',
      institution: 'Shikshadeep College, Biratnagar-Morang',
      year: '2021',
      result: 'Class 11 GPA: 3.74 · Class 12 GPA: 2.79',
    },
    {
      qualification: 'SEE / Grade 10',
      institution: 'Arniko Secondary School, Biratnagar-Morang',
      year: '2019',
      result: 'GPA: 3.15',
    },
  ],
  certifications: [
    {
      name: 'Advance Office Package',
      issuer: 'Cambridge InfoTech',
      year: '2022',
    },
  ],
} as const;

export type Portfolio = typeof portfolio;
