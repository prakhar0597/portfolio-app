import React, { useState, useRef, useEffect } from 'react';
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
    username: 'uncrumblethecode@gmail.com',
    password: 'demo@12345'
  },
  {
    name: 'Trackalways India',
    link: 'https://trackalways.in',
    description: 'TrackAlways India is a logistics and tracking platform tailored for Indian businesses.',
    tags: ['logistics'],
    username: '',
    password: ''
  },
  {
    name: 'TrackAlways Africa',
    link: 'https://trackalwaysafrica.com',
    description: 'TrackAlways Africa offers real-time tracking and logistics solutions across Africa.',
    tags: ['logistics'],
    username: '',
    password: ''
  },
  {
    name: 'Mercetech',
    link: 'https://mercetech.netlify.app',
    description: 'Mercetech showcases projects and solutions built on modern web technologies.',
    tags: ['portfolio'],
    username: '',
    password: ''
  },
  {
    name: 'Transpoto',
    link: 'https://www.transpotofreight.com/',
    description: 'Transpoto is a freight matching platform designed to connect shippers with transporters.',
    tags: ['logistics'],
    username: '',
    password: ''
  },
  {
    name: 'Encrypted Bug',
    link: 'https://encryptedbug.com',
    description: 'Encrypted Bug is a cybersecurity insights and research platform.',
    tags: ['security'],
    username: '',
    password: ''
  },
  {
    name: 'Vegisphere',
    link: 'https://vegisphere.com',
    description: 'Vegisphere delivers fresh produce through an online platform tailored for local sourcing.',
    tags: ['ecommerce'],
    username: '',
    password: ''
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
  const [wasAllClicked, setWasAllClicked] = useState(false);

  const tagRefs = useRef({});
  const firstVisibleTagRef = useRef(null); // Track first visible tag section
  const allTags = getAllTags(softwareList);
  const sortedTags = allTags.sort((a, b) => tagSortOrder === 'asc' ? a.localeCompare(b) : b.localeCompare(a));

  const filteredList = softwareList.filter(({ name, description, tags }) => {
    const matchesSearch = (name + ' ' + description).toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTag = selectedTag ? tags?.includes(selectedTag) : true;
    return matchesSearch && matchesTag;
  });

  const tagIcons = {
    ai: "🤖", integration: "🔗", calendar: "📅", crm: "🏢", dashboards: "📊", media: "🎙️",
    tools: "🛠️", devtools: "🧰", design: "🎨", support: "💬", household: "🏠", notes: "📝", chat: "💬",
    dev: "💻", resume: "📄", pdf: "📑", url: "🔗", database: "🗄️", productivity: "⚙️",
    social: "💬", security: "🔐", search: "🔍", marketing: "📢", news: "📰", platform: "🌐",
    invoices: "🧾", wiki: "📚", logistics: "🚚", portfolio: "🧩", ecommerce: "🛒", project: "🗂️", bookmarks: "🔖" 
  };

  useEffect(() => {
    if (selectedTag && tagRefs.current[selectedTag]) {
      tagRefs.current[selectedTag].scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    if (selectedTag === '' && wasAllClicked && firstVisibleTagRef.current) {
      firstVisibleTagRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setWasAllClicked(false); // reset
    }
  }, [selectedTag, wasAllClicked]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-8 px-4 sm:px-6 lg:px-12">
      <div className="max-w-screen-xl mx-auto">
        <Input
          type="text"
          placeholder="🔍 Search for software..."
          className="w-full bg-gray-800 text-white placeholder-gray-400 border border-gray-600 rounded-xl shadow-inner focus:ring-2 focus:ring-blue-500 mb-8"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <div className="flex flex-wrap gap-3 mb-8 justify-center">
          <Button
            variant={selectedTag === '' ? 'default' : 'outline'}
            className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white hover:from-purple-600 hover:to-indigo-600 rounded-full px-4 py-1.5 shadow"
            onClick={() => {
              setSelectedTag('');
              setWasAllClicked(true);
            }}
          >
            All
          </Button>
          {allTags.map((tag) => (
            <Button
              key={tag}
              variant={selectedTag === tag ? 'default' : 'outline'}
              className={`capitalize rounded-full px-4 py-1.5 shadow transition-all duration-300 ${selectedTag === tag ? 'bg-gradient-to-r from-pink-500 to-yellow-500 text-white' : 'bg-gray-700 hover:bg-gray-600 text-gray-200'}`}
              onClick={() => setSelectedTag(tag)}
            >
              <span className="mr-1">{tagIcons[tag] || '🏷️'}</span>
              {tag}
            </Button>
          ))}
        </div>

        <div className="mb-10 text-center">
          <label className="mr-2 font-medium text-gray-300">Sort Categories:</label>
          <select
            className="bg-gray-800 text-white border border-gray-600 rounded px-3 py-1 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={tagSortOrder}
            onChange={(e) => setTagSortOrder(e.target.value)}
          >
            <option value="asc">A–Z</option>
            <option value="desc">Z–A</option>
          </select>
        </div>

        <TooltipProvider>
          {
            (() => {
              firstVisibleTagRef.current = null;
              return sortedTags.map((tag) => {
                const taggedItems = filteredList.filter((item) => item.tags?.includes(tag));
                if (!taggedItems.length) return null;

                return (
                  <div
                    key={tag}
                    ref={el => {
                      tagRefs.current[tag] = el;
                      if (!firstVisibleTagRef.current) {
                        firstVisibleTagRef.current = el;
                      }
                    }}
                    className="mb-16"
                  >
                    <h2 className="text-3xl font-bold capitalize mb-6 text-blue-400 border-b border-gray-700 pb-2 text-center">
                      {tagIcons[tag] || '🏷️'} {tag}
                    </h2>
                    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                      {taggedItems.map((software, index) => (
                        <Tooltip key={`${tag}-${index}`}>
                          <TooltipTrigger asChild>
                            <div
                              onMouseEnter={() => setHoveredIndex(`${tag}-${index}`)}
                              onMouseLeave={() => setHoveredIndex(null)}
                            >
                              <a href={software.link} target="_blank" rel="noopener noreferrer">
                                <Card className="backdrop-blur-sm bg-white/10 hover:bg-white/20 hover:ring-2 hover:ring-blue-400/30 transition-all rounded-2xl shadow-xl hover:scale-[1.03] hover:shadow-2xl animate-fadeIn border border-gray-700">
                                  <CardContent className="p-6">
                                    <h2 className="text-xl font-bold mb-2 text-white tracking-wide">
                                      {software.name}
                                    </h2>
                                    <p className="text-gray-300 text-sm mb-3 line-clamp-3 italic">
                                      {software.description}
                                    </p>
                                    {software.username && software.password && (
                                      <div className="text-xs text-gray-400 space-y-1">
                                        <p>
                                          <span className="font-semibold text-gray-300">Username:</span>{' '}
                                          {software.username}
                                        </p>
                                        <p>
                                          <span className="font-semibold text-gray-300">Password:</span>{' '}
                                          {software.password}
                                        </p>
                                      </div>
                                    )}
                                  </CardContent>
                                </Card>
                              </a>
                            </div>
                          </TooltipTrigger>
                          {hoveredIndex === `${tag}-${index}` && (
                            <TooltipContent
                              side="bottom"
                              sideOffset={12}
                              className="w-[90vw] max-w-screen-xl min-h-[300px] bg-gradient-to-br from-gray-900/90 via-gray-800/90 to-black/90 backdrop-blur-lg text-white p-6 overflow-hidden rounded-xl border border-gray-700 shadow-2xl animate-fade-in"
                            >
                              <iframe
                                src={software.link}
                                title={`${software.name} Preview`}
                                className="w-full h-60 border-none rounded-b-xl"
                                loading="lazy"
                              />
                            </TooltipContent>
                          )}
                        </Tooltip>
                      ))}
                    </div>
                  </div>
                );
              });
            })()
          }
        </TooltipProvider>
      </div>
    </div>
  );
};

export default Portfolio;
