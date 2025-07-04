import React, { useState } from 'react';
import { Card, CardContent } from './components/ui/card';
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from './components/ui/tooltip';
import { Input } from './components/ui/input';
import { Button } from './components/ui/button';

const softwareList = [
  {
    name: 'Activepieces',
    link: 'https://active.codecrumble.diy',
    description: `Activepieces is a business automation tool. Activepieces supports integrations with Google Sheets, OpenAI, Discord, RSS, and over 200 other services.`,
    tags: ['integration'],
    username: '',
    password: ''
  },
  {
    name: 'Calcom',
    link: 'https://cal.codecrumble.diy',
    description: `Calendly successor. You are in charge of your own data, workflow, and appearance. Self-hosted or hosted by us.`,
    tags: ['calendar'],
    username: '',
    password: ''
  },
  {
    name: 'Dollibar',
    link: 'https://dolly.codecrumble.diy',
    description: `Dolibarr ERP & CRM helps manage your organization's activities. Ideal for small to large companies.`,
    tags: ['crm'],
    username: 'demo.user',
    password: 'password12345'
  },
  {
    name: 'Appsmith',
    link: 'https://smith.codecrumble.diy',
    description: `Appsmith is a platform to build custom apps like dashboards, admin panels, and internal tools.`,
    tags: ['dashboards'],
    username: 'demo@demo.com',
    password: 'Demo@12345'
  },
  {
    name: 'Castopod',
    link: 'https://castopod.codecrumble.diy/cp-admin',
    description: `Castopod is a podcast hosting solution made for audience engagement and interaction.`,
    tags: ['media'],
    username: '',
    password: ''
  },
  {
    name: 'Convertx',
    link: 'https://convert.codecrumble.diy',
    description: `An online file converter. Supports over a thousand formats.`,
    tags: ['tools'],
    username: '',
    password: ''
  },
  {
    name: 'Cyberchef',
    link: 'https://cyberchef.codecrumble.diy',
    description: `CyberChef is a web app for encoding, encryption, compression, and more cyber operations.`,
    tags: ['security'],
    username: '',
    password: ''
  },
  {
    name: 'Docmost',
    link: 'https://docs.codecrumble.diy',
    description: `A collaborative wiki and documentation software.`,
    tags: ['wiki'],
    username: '',
    password: ''
  },
  {
    name: 'Emby',
    link: 'https://emby.codecrumble.diy',
    description: `Emby Server is a personal media server with multi-device support.`,
    tags: ['media'],
    username: '',
    password: ''
  },
  {
    name: 'FreeScout',
    link: 'https://helpdesk.codecrumble.diy',
    description: `FreeScout is an open source help desk and shared inbox.`,
    tags: ['support'],
    username: 'demo@demo.com',
    password: 'Demo@12345'
  },
  {
    name: 'FreshRSS',
    link: 'https://rss.codecrumble.diy',
    description: `FreshRSS is a multi-user RSS feed aggregator with anonymous reading.`,
    tags: ['news'],
    username: '',
    password: ''
  },
  {
    name: 'Grocy',
    link: 'https://home.codecrumble.diy',
    description: `Grocy is a self-hosted groceries & household management solution.`,
    tags: ['household'],
    username: 'admin',
    password: 'admin'
  },
  {
    name: 'Hoarder (Karakeep)',
    link: 'https://aibookmark.codecrumble.diy',
    description: `Karakeep is a self-hostable bookmark-everything app with AI.`,
    tags: ['bookmarks'],
    username: '',
    password: ''
  },
  {
    name: 'Invoice Ninja',
    link: 'https://invoice.codecrumble.diy',
    description: `Invoice, quote, project and time-tracking app.`,
    tags: ['invoices'],
    username: '',
    password: ''
  },
  {
    name: 'IT Tools',
    link: 'https://ittools.codecrumble.diy',
    description: `Handy online tools for developers, with great UX.`,
    tags: ['devtools'],
    username: '',
    password: ''
  },
  {
    name: 'Leantime',
    link: 'https://leantime.codecrumble.diy',
    description: `Leantime is a project management system for non-project managers.`,
    tags: ['project'],
    username: '',
    password: ''
  },
  {
    name: 'Mautic5',
    link: 'https://mautic.codecrumble.diy',
    description: `Mautic is a marketing automation product focused on privacy.`,
    tags: ['marketing'],
    username: '',
    password: ''
  },
  {
    name: 'Whoogle',
    link: 'https://whoogle.codecrumble.diy',
    description: `A self-hosted, ad-free, privacy-respecting metasearch engine.`,
    tags: ['search'],
    username: '',
    password: ''
  },
  {
    name: 'Mealie',
    link: 'https://mealie.codecrumble.diy',
    description: `Mealie is a recipe manager, meal planner and shopping list.`,
    tags: ['household'],
    username: '',
    password: ''
  },
  {
    name: 'Memos',
    link: 'https://memos.codecrumble.diy',
    description: `A knowledge management and note-taking platform for privacy-conscious users.`,
    tags: ['notes'],
    username: '',
    password: ''
  },
  {
    name: 'OpenWeb-UI',
    link: 'https://ai.codecrumble.diy',
    description: `A self-hosted AI platform supporting multiple LLM backends.`,
    tags: ['platform'],
    username: '',
    password: ''
  },
  {
    name: 'Plane',
    link: 'https://plane.codecrumble.diy',
    description: `JIRA, Linear, Asana alternative for tracking issues and roadmaps.`,
    tags: ['dev'],
    username: '',
    password: ''
  },
  {
    name: 'Reactive Resume',
    link: 'https://resume.codecrumble.diy',
    description: `A privacy-first, customizable resume builder.`,
    tags: ['resume'],
    username: '',
    password: ''
  },
  {
    name: 'RocketChat',
    link: 'https://rocket.codecrumble.diy',
    description: `The secure communications platform alternative to Slack.`,
    tags: ['chat'],
    username: '',
    password: ''
  },
  {
    name: 'SearXNG',
    link: 'https://find.codecrumble.diy',
    description: `Free metasearch engine aggregating results from various sources.`,
    tags: ['search'],
    username: '',
    password: ''
  },
  {
    name: 'Web-Check',
    link: 'https://osint.codecrumble.diy',
    description: `All-in-one OSINT tool for analyzing websites' technologies and vulnerabilities.`,
    tags: ['security'],
    username: '',
    password: ''
  },
  {
    name: 'Sterling PDF',
    link: 'https://pdf.codecrumble.diy',
    description: `Perform various operations on PDF files (split, merge, compress, etc).`,
    tags: ['pdf'],
    username: '',
    password: ''
  },
  {
    name: 'Kutt URL Shortener',
    link: 'https://kuttt.co',
    description: `A modern URL shortener with support for custom domains and stats.`,
    tags: ['url'],
    username: '',
    password: ''
  },
  {
    name: 'Mattermost',
    link: 'https://slack.trackalways.in',
    description: `A secure collaboration platform for teams and enterprises.`,
    tags: ['chat'],
    username: 'demo1234',
    password: 'demo1234'
  },
  {
    name: 'NocoDB',
    link: 'https://noco.codecrumble.diy',
    description: `An Airtable alternative for building online databases.`,
    tags: ['database'],
    username: 'demo1234',
    password: 'demo1234'
  }
];

const getAllTags = (list) => {
  const tagSet = new Set();
  list.forEach(item => item.tags?.forEach(tag => tagSet.add(tag)));
  return Array.from(tagSet);
};

const Portfolio = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState('');
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [tagSortOrder, setTagSortOrder] = useState('asc');

  const allTags = getAllTags(softwareList);
  const sortedTags = allTags.sort((a, b) => tagSortOrder === 'asc' ? a.localeCompare(b) : b.localeCompare(a));

  const filteredList = softwareList.filter(({ name, description, tags }) => {
    const matchesSearch = (name + ' ' + description).toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTag = selectedTag ? tags?.includes(selectedTag) : true;
    return matchesSearch && matchesTag;
  });

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="mb-8 max-w-full mx-auto">
        <Input
          type="text"
          placeholder="Search software..."
          className="w-full bg-gray-800 text-white placeholder-gray-400 border border-gray-600 mb-8"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <div className="flex flex-wrap gap-2 mb-8">
          <Button
            variant={selectedTag === '' ? 'default' : 'outline'}
            className="bg-gray-700 hover:bg-gray-600"
            onClick={() => setSelectedTag('')}
          >
            All
          </Button>
          {allTags.map((tag) => (
            <Button
              key={tag}
              variant={selectedTag === tag ? 'default' : 'outline'}
              className="bg-gray-700 hover:bg-gray-600 capitalize"
              onClick={() => setSelectedTag(tag)}
            >
              {tag}
            </Button>
          ))}
        </div>

        <div className="mb-10">
          <label className="mr-2 font-medium">Sort Categories:</label>
          <select
            className="bg-gray-800 text-white border border-gray-600 rounded px-3 py-1"
            value={tagSortOrder}
            onChange={(e) => setTagSortOrder(e.target.value)}
          >
            <option value="asc">A–Z</option>
            <option value="desc">Z–A</option>
          </select>
        </div>
      </div>

      <TooltipProvider>
        {sortedTags.map((tag) => {
          const taggedItems = filteredList.filter((item) => item.tags?.includes(tag));
          if (!taggedItems.length) return null;

          return (
            <div key={tag} className="mb-10">
              <h2 className="text-2xl font-bold capitalize mb-4 border-b border-gray-700 pb-1">{tag}</h2>
              <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {taggedItems.map((software, index) => (
                  <Tooltip key={`${tag}-${index}`}>
                    <TooltipTrigger asChild>
                      <div
                        onMouseEnter={() => setHoveredIndex(`${tag}-${index}`)}
                        onMouseLeave={() => setHoveredIndex(null)}
                      >
                        <a href={software.link} target="_blank" rel="noopener noreferrer">
                          <Card className="bg-gray-800 hover:bg-gray-700 rounded-2xl shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl animate-fadeIn">
                            <CardContent className="p-6">
                              <h2 className="text-xl font-semibold mb-2">{software.name}</h2>
                              <p className="text-gray-300 text-sm line-clamp-3 mb-2">{software.description}</p>
                              {software.username && software.password && (
                                <>
                                  <p className="text-gray-400 text-xs">Username: {software.username}</p>
                                  <p className="text-gray-400 text-xs">Password: {software.password}</p>
                                </>
                              )}
                            </CardContent>
                          </Card>
                        </a>
                      </div>
                    </TooltipTrigger>
                    {hoveredIndex === `${tag}-${index}` && (
                      <TooltipContent className="bg-black border border-gray-700 w-80 p-0 overflow-hidden">
                        <iframe
                          src={software.link}
                          title={`${software.name} Preview`}
                          className="w-full h-60 border-none"
                          loading="lazy"
                        />
                      </TooltipContent>
                    )}
                  </Tooltip>
                ))}
              </div>
            </div>
          );
        })}
      </TooltipProvider>
    </div>
  );
};

export default Portfolio;
