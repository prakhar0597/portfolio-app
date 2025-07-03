import React, { useState } from 'react';
import { Card, CardContent } from './components/ui/card';
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from './components/ui/tooltip';
import { Input } from './components/ui/input';
import { Button } from './components/ui/button';

const softwareList = [
  {
    name: 'Activepieces',
    link: 'https://active.codecrumble.diy',
    description:
      "Activepieces is a no-code business automation tool. Supports integrations with Google Sheets, OpenAI, Discord, RSS, and over 200 other services.",
    tags: ['automation', 'nocode'],
  },
  {
    name: 'Calcom',
    link: 'https://cal.codecrumble.diy',
    description:
      "Calendly successor. Self-hosted or hosted scheduling tool with full control over your data.",
    tags: ['calendar', 'productivity'],
  },
  {
    name: 'Dollibar',
    link: 'https://dolly.codecrumble.diy',
    description:
      "Dolibarr ERP & CRM helps manage organization's activities like invoices, HR, stocks, etc.",
    tags: ['business', 'erp'],
  },
  {
    name: 'Appsmith',
    link: 'https://smith.codecrumble.diy',
    description:
      "Open-source low-code platform for building custom internal apps.",
    tags: ['lowcode', 'devtools'],
  },
  {
    name: 'Castopod',
    link: 'https://castopod.codecrumble.diy/cp-admin',
    description:
      "Podcast hosting platform focused on interaction and community.",
    tags: ['media', 'podcast'],
  },
  {
    name: 'ConvertX',
    link: 'https://convert.codecrumble.diy',
    description:
      "Online file converter supporting over 1000 formats. Built with TypeScript, Bun, and Elysia.",
    tags: ['tools', 'files'],
  },
  {
    name: 'CyberChef',
    link: 'https://cyberchef.codecrumble.diy',
    description:
      "Web app for encoding, encryption, compression, and data analysis.",
    tags: ['devtools', 'security'],
  },
  {
    name: 'Docmost',
    link: 'https://docs.codecrumble.diy',
    description:
      "Collaborative wiki and documentation software.",
    tags: ['docs', 'collaboration'],
  },
  {
    name: 'Emby',
    link: 'https://emby.codecrumble.diy',
    description:
      "Personal media server with cross-platform apps.",
    tags: ['media', 'selfhosted'],
  },
  {
    name: 'FreeScout',
    link: 'https://helpdesk.codecrumble.diy',
    description:
      "Lightweight open-source help desk and shared inbox.",
    tags: ['support', 'productivity'],
  },
  {
    name: 'FreshRSS',
    link: 'https://rss.codecrumble.diy',
    description:
      "Multi-user RSS feed aggregator with anonymous reading.",
    tags: ['rss', 'news'],
  },
  {
    name: 'Grocy',
    link: 'https://home.codecrumble.diy',
    description:
      "Self-hosted groceries and household management system.",
    tags: ['home', 'inventory'],
  },
  {
    name: 'Hoarder (Karakeep)',
    link: 'https://aibookmark.codecrumble.diy',
    description:
      "AI-powered bookmark manager for data hoarders.",
    tags: ['tools', 'ai'],
  },
  {
    name: 'Invoice Ninja',
    link: 'https://invoice.codecrumble.diy',
    description:
      "App for invoices, quotes, project, and time-tracking.",
    tags: ['finance', 'business'],
  },
  {
    name: 'IT Tools',
    link: 'https://ittools.codecrumble.diy',
    description:
      "Handy online tools for developers with excellent UX.",
    tags: ['devtools', 'utilities'],
  },
  {
    name: 'Leantime',
    link: 'https://leantime.codecrumble.diy',
    description:
      "Project management system for non-project managers.",
    tags: ['project', 'pm'],
  },
  {
    name: 'Mautic5',
    link: 'https://mautic.codecrumble.diy',
    description:
      "Marketing automation focused on privacy and extensibility.",
    tags: ['marketing', 'automation'],
  },
  {
    name: 'Whoogle',
    link: 'https://whoogle.codecrumble.diy',
    description:
      "Self-hosted, ad-free, privacy-first metasearch engine.",
    tags: ['search', 'privacy'],
  },
  {
    name: 'Mealie',
    link: 'https://mealie.codecrumble.diy',
    description:
      "Recipe manager, meal planner, and shopping list tool.",
    tags: ['home', 'food'],
  },
  {
    name: 'Memos',
    link: 'https://memos.codecrumble.diy',
    description:
      "Privacy-first knowledge management and note-taking platform.",
    tags: ['notes', 'productivity'],
  },
  {
    name: 'OpenWeb-UI',
    link: 'https://ai.codecrumble.diy',
    description:
      "Self-hosted, extensible AI platform with RAG support.",
    tags: ['ai', 'selfhosted'],
  },
  {
    name: 'Plane',
    link: 'https://plane.codecrumble.diy',
    description:
      "Alternative to JIRA, Linear, Asana for issue and sprint tracking.",
    tags: ['project', 'pm'],
  },
  {
    name: 'Reactive Resume',
    link: 'https://resume.codecrumble.diy',
    description:
      "Privacy-first resume builder with drag-and-drop and templates.",
    tags: ['resume', 'tools'],
  },
  {
    name: 'RocketChat',
    link: 'https://rocket.codecrumble.diy',
    description:
      "Secure communications platform alternative to Slack.",
    tags: ['chat', 'collaboration'],
  },
  {
    name: 'SearXNG',
    link: 'https://find.codecrumble.diy',
    description:
      "Metasearch engine aggregating results from various sources.",
    tags: ['search', 'privacy'],
  },
  {
    name: 'Web Check',
    link: 'https://osint.codecrumble.diy',
    description:
      "OSINT dashboard for analyzing websites and tech stack.",
    tags: ['security', 'osint'],
  },
  {
    name: 'Sterling PDF',
    link: 'https://pdf.codecrumble.diy',
    description:
      "Web app to split, merge, convert, and compress PDFs.",
    tags: ['pdf', 'tools'],
  },
  {
    name: 'Kutt URL Shortener',
    link: 'https://kuttt.co',
    description:
      "Modern URL shortener with support for custom domains.",
    tags: ['tools', 'links'],
  },
  {
    name: 'Mattermost',
    link: 'https://slack.trackalways.in',
    description:
      "Secure collaboration platform for critical team work.",
    tags: ['chat', 'collaboration'],
  },
  {
    name: 'NocoDB',
    link: 'https://noco.codecrumble.diy',
    description:
      "Open-source Airtable alternative for database management.",
    tags: ['database', 'nocode'],
  },
];

const getAllTags = (list) => {
  const tagSet = new Set();
  list.forEach(item => item.tags?.forEach(tag => tagSet.add(tag)));
  return Array.from(tagSet);
};

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');
  const [sortTagOrder, setSortTagOrder] = useState('asc');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');
  const tags = getAllTags(softwareList).sort((a, b) => sortTagOrder === 'asc' ? a.localeCompare(b) : b.localeCompare(a));

  const filteredSoftware = softwareList
    .filter((s) =>
      s.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (selectedTag === '' || s.tags.includes(selectedTag))
    )
    .sort((a, b) =>
      sortOrder === 'asc'
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name)
    );

  return (
    <div className="min-h-screen bg-gray-950 text-white p-4">
      <div className="flex flex-col md:flex-row items-center gap-4 mb-6">
        <Input
          placeholder="Search software..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full md:w-1/2"
        />
        <div className="flex flex-wrap gap-2">
          <Button onClick={() => setSortTagOrder(sortTagOrder === 'asc' ? 'desc' : 'asc')}>
            Sort Tags: {sortTagOrder === 'asc' ? 'A–Z' : 'Z–A'}
          </Button>
          <Button
            variant={selectedTag === '' ? 'default' : 'outline'}
            onClick={() => setSelectedTag('')}
          >
            All
          </Button>
          {tags.map((tag) => (
            <Button
              key={tag}
              variant={selectedTag === tag ? 'default' : 'outline'}
              onClick={() => setSelectedTag(tag)}
            >
              {tag}
            </Button>
          ))}
        </div>
        <Button onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}>
          Sort: {sortOrder === 'asc' ? 'A–Z' : 'Z–A'}
        </Button>
      </div>
      <TooltipProvider>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredSoftware.map((software) => (
            <Tooltip key={software.name} delayDuration={0}>
              <TooltipTrigger asChild>
                <a
                  href={software.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative block bg-gray-800 hover:bg-gray-700 p-4 rounded-xl transition-all duration-300 transform hover:scale-105"
                >
                  <Card className="h-full">
                    <CardContent className="space-y-2">
                      <h3 className="text-xl font-semibold">{software.name}</h3>
                      <p className="text-sm text-gray-400">{software.description}</p>
                      <div className="flex flex-wrap gap-1 mt-2">
                        {software.tags.map((tag) => (
                          <span
                            key={tag}
                            className="bg-gray-700 text-xs px-2 py-1 rounded-full text-white"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </a>
              </TooltipTrigger>
              <TooltipContent className="p-0 w-[300px] h-[200px] bg-black overflow-hidden rounded">
                <iframe
                  src={software.link}
                  className="w-full h-full border-0"
                  sandbox="allow-same-origin allow-scripts"
                ></iframe>
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
      </TooltipProvider>
    </div>
  );
};

export default App;
