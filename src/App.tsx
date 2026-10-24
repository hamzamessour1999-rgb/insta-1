import React, { useState, useRef } from 'react';
import {
  ChevronRight,
  Sun,
  Moon,
  X,
  Search,
  CheckCircle2,
  Clock,
  Eye,
  MessageCircle,
  UserX,
  Sparkles,
  ShieldCheck,
  Lock,
  ArrowLeft,
  Flame,
  AlertCircle,
  Film,
  Send,
  Trash2,
  UserMinus,
  Check
} from 'lucide-react';

// =========================================================================
// DESTINATION LINK FOR "LAST STEP" BUTTON
// You can edit this URL anytime to point to your desired offer or landing page!
// =========================================================================
export const REDIRECT_TARGET_URL = 'https://appcomplete.org/cl/i/w68r41';

// Custom SVG Icons matching the exact shapes in the screenshot
function PlayPlusIcon() {
  return (
    <div className="relative flex items-center justify-center w-6 h-6">
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
        <defs>
          <linearGradient id="playGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ff4076" />
            <stop offset="100%" stopColor="#ff8a43" />
          </linearGradient>
        </defs>
        {/* Play triangle */}
        <path
          d="M8 6.5V17.5L17.5 12L8 6.5Z"
          fill="url(#playGrad)"
          stroke="url(#playGrad)"
          strokeWidth="1.2"
          strokeLinejoin="round"
        />
        {/* Small plus badge on corner */}
        <circle cx="16.5" cy="7.5" r="3.5" fill="#0d111d" stroke="#ff4076" strokeWidth="1.2" />
        <path d="M16.5 5.8V9.2M14.8 7.5H18.2" stroke="#ff8a43" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    </div>
  );
}

function BinocularsIcon() {
  return (
    <div className="relative flex items-center justify-center w-6 h-6">
      <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#6c7b94]" fill="none">
        {/* Left eyepiece */}
        <circle cx="7.5" cy="12.5" r="4.2" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="7.5" cy="12.5" r="1.8" fill="currentColor" />
        {/* Right eyepiece */}
        <circle cx="16.5" cy="12.5" r="4.2" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="16.5" cy="12.5" r="1.8" fill="currentColor" />
        {/* Bridge */}
        <path d="M11.7 12.5H12.3" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
        {/* Top casing accent */}
        <path d="M6 7.5H9M15 7.5H18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" opacity="0.6" />
        <path d="M7.5 7.5V9.5M16.5 7.5V9.5" stroke="currentColor" strokeWidth="1.6" opacity="0.6" />
      </svg>
    </div>
  );
}

function DmChatIcon() {
  return (
    <div className="relative flex items-center justify-center w-6 h-6">
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
        <defs>
          <linearGradient id="dmGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ff3388" />
            <stop offset="100%" stopColor="#c026d3" />
          </linearGradient>
        </defs>
        {/* Instagram Direct Chat Bubble */}
        <path
          d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 13.914 3.597 15.688 4.62 17.15L3.6 20.8L7.38 19.81C8.775 20.57 10.342 21 12 21Z"
          stroke="url(#dmGrad)"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        {/* Lightning bolt / arrow */}
        <path
          d="M13.5 8L9.5 12.2H12.8L10.5 16"
          stroke="#ff4d8d"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

function UnfollowerIcon() {
  return (
    <div className="relative flex items-center justify-center w-6 h-6">
      <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#6c7b94]" fill="none">
        {/* Head */}
        <circle cx="10" cy="7.5" r="3.8" fill="currentColor" />
        {/* Shoulders */}
        <path
          d="M3.5 19C3.5 15.5 6.4 13 10 13C12.8 13 15.2 14.6 16.1 17"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        {/* Badge on bottom right with minus */}
        <circle cx="17.5" cy="15.5" r="4" fill="#0d111d" stroke="#525f77" strokeWidth="1.4" />
        <path d="M15.5 15.5H19.5" stroke="#ff5555" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </div>
  );
}

function NotFollowingBackIcon() {
  return (
    <div className="relative flex items-center justify-center w-6 h-6">
      <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#6c7b94]" fill="none">
        <defs>
          <linearGradient id="notBackGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f59e0b" />
            <stop offset="100%" stopColor="#ef4444" />
          </linearGradient>
        </defs>
        {/* Main user avatar */}
        <circle cx="8.5" cy="7.5" r="3.5" fill="currentColor" />
        <path
          d="M2 18.5C2 15.2 4.9 12.8 8.5 12.8C10.5 12.8 12.2 13.5 13.3 14.8"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        {/* Broken return arrow */}
        <path
          d="M19 10.5L14.5 15M14.5 10.5L19 15"
          stroke="url(#notBackGrad)"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M17 6.5V8.5"
          stroke="url(#notBackGrad)"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

// Mock Data Sets
const SAMPLE_WATCH_HISTORY = [
  {
    id: 'w1',
    creator: 'travel.luxurylife',
    caption: 'Secret rooftop spots in Amalfi Coast you must visit before summer ends 🌅',
    category: 'Reels',
    watchedAt: '35m ago',
    duration: '0:28 / 0:28',
    replays: 2,
    audio: 'Original Audio · Amalfi Vibes',
    tagColor: 'from-amber-500/20 to-orange-500/20 text-orange-400'
  },
  {
    id: 'w2',
    creator: 'tech_insider_daily',
    caption: 'New camera tech changes mobile filmmaking forever! Full breakdown',
    category: 'Reels',
    watchedAt: '2h ago',
    duration: '0:45 / 0:45',
    replays: 1,
    audio: 'Cyber Sound Lab · Resonance',
    tagColor: 'from-blue-500/20 to-cyan-500/20 text-cyan-400'
  },
  {
    id: 'w3',
    creator: 'chloe.fitness',
    caption: '15-min high intensity morning routine for explosive energy ⚡',
    category: 'Stories',
    watchedAt: '5h ago',
    duration: 'Story (Expired in 18h)',
    replays: 3,
    audio: 'Upbeat Cardio Mix',
    tagColor: 'from-pink-500/20 to-rose-500/20 text-pink-400'
  },
  {
    id: 'w4',
    creator: 'marcus_culinary',
    caption: 'Authentic cacio e pepe using traditional Roman technique 🍝',
    category: 'Reels',
    watchedAt: 'Yesterday',
    duration: '1:12 / 1:12',
    replays: 4,
    audio: 'Italian Café Acoustics',
    tagColor: 'from-emerald-500/20 to-teal-500/20 text-emerald-400'
  },
  {
    id: 'w5',
    creator: 'nordic.minimalism',
    caption: 'Desk setup tour & ambient lighting philosophy for 2026',
    category: 'Reels',
    watchedAt: '2 days ago',
    duration: '0:34 / 0:34',
    replays: 1,
    audio: 'Lo-Fi Chill Hop Beat',
    tagColor: 'from-violet-500/20 to-purple-500/20 text-purple-400'
  },
  {
    id: 'w6',
    creator: 'studio_arch_design',
    caption: 'Brutalist concrete villa overlooking the Swiss Alps 🏔️',
    category: 'Stories',
    watchedAt: '4 days ago',
    duration: 'Story Archive',
    replays: 2,
    audio: 'Ambient Synthwave',
    tagColor: 'from-slate-500/20 to-zinc-500/20 text-slate-300'
  }
];

const SAMPLE_PROFILE_VIEWERS = [
  {
    id: 'pv1',
    username: 'maya.vanderbilt',
    name: 'Maya Vanderbilt',
    status: 'Follows you',
    visits: 5,
    lastVisited: '12m ago',
    avatarBg: 'bg-gradient-to-tr from-pink-500 to-rose-400',
    type: 'Frequent'
  },
  {
    id: 'pv2',
    username: 'jordan_k99',
    name: 'Jordan K.',
    status: 'Doesn’t follow you',
    visits: 3,
    lastVisited: '45m ago',
    avatarBg: 'bg-gradient-to-tr from-indigo-500 to-blue-500',
    type: 'Ghost / Non-follower'
  },
  {
    id: 'pv3',
    username: 'elena_designer',
    name: 'Elena Rostova',
    status: 'Mutual Follower',
    visits: 8,
    lastVisited: '2h ago',
    avatarBg: 'bg-gradient-to-tr from-emerald-500 to-teal-400',
    type: 'Frequent'
  },
  {
    id: 'pv4',
    username: 'anonymous_user_481',
    name: 'Instagram User',
    status: 'Private Account',
    visits: 2,
    lastVisited: '4h ago',
    avatarBg: 'bg-gradient-to-tr from-slate-600 to-gray-500',
    type: 'Ghost / Non-follower'
  },
  {
    id: 'pv5',
    username: 'liam_c_photo',
    name: 'Liam Chen Photography',
    status: 'Follows you',
    visits: 1,
    lastVisited: 'Yesterday',
    avatarBg: 'bg-gradient-to-tr from-amber-500 to-yellow-400',
    type: 'Normal'
  },
  {
    id: 'pv6',
    username: 'sophie.in.paris',
    name: 'Sophie Laurent',
    status: 'Mutual Follower',
    visits: 4,
    lastVisited: '2 days ago',
    avatarBg: 'bg-gradient-to-tr from-purple-500 to-pink-500',
    type: 'Frequent'
  }
];

const SAMPLE_CONVERSATIONS = [
  {
    id: 'dm1',
    user: 'marcus_dev',
    name: 'Marcus Sterling',
    preview: 'Deleted message recovered: "Let me know when..."',
    timestamp: '15m ago',
    unreadCount: 1,
    hasDeleted: true,
    messages: [
      { id: 'm1', from: 'marcus_dev', text: 'Hey, are you free this weekend for the coffee shoot?', time: 'Yesterday 14:10' },
      { id: 'm2', from: 'you', text: 'Yeah! Sunday afternoon works great.', time: 'Yesterday 14:18' },
      { id: 'm3', from: 'marcus_dev', text: 'Awesome, see you at 3pm!', time: 'Yesterday 14:22' },
      { id: 'm4', from: 'marcus_dev', text: 'Wait don’t forget to bring the prime lens!', time: '11:05 AM', isDeleted: true, deletedNotice: 'Message deleted by sender 45m ago · Recovered' }
    ]
  },
  {
    id: 'dm2',
    user: 'natalia.creatives',
    name: 'Natalia Gomez',
    preview: 'Sent an attachment · Photo',
    timestamp: '2h ago',
    unreadCount: 0,
    hasDeleted: false,
    messages: [
      { id: 'n1', from: 'natalia.creatives', text: 'Loved the carousel you shared yesterday 🔥', time: '10:12 AM' },
      { id: 'n2', from: 'you', text: 'Thank you so much! Really appreciate it 🙏', time: '10:30 AM' },
      { id: 'n3', from: 'natalia.creatives', text: 'Check this palette moodboard:', time: '10:35 AM' },
      { id: 'n4', from: 'natalia.creatives', text: '📷 [Moodboard_autumn_preview.jpg]', time: '10:36 AM' }
    ]
  },
  {
    id: 'dm3',
    user: 'unknown_sender_ghost',
    name: 'Instagram Direct Request',
    preview: 'Deleted message recovered: "Hey are you..."',
    timestamp: 'Yesterday',
    unreadCount: 2,
    hasDeleted: true,
    messages: [
      { id: 'u1', from: 'unknown_sender_ghost', text: 'Hey are you available for sponsored collab?', time: '2 days ago', isDeleted: true, deletedNotice: 'Unsent by sender · Recovered via cache' },
      { id: 'u2', from: 'unknown_sender_ghost', text: 'We offer $500 per story post.', time: '2 days ago', isDeleted: true, deletedNotice: 'Unsent by sender · Recovered via cache' }
    ]
  }
];

const SAMPLE_UNFOLLOWERS = [
  {
    id: 'uf1',
    username: 'alex.rivera_design',
    name: 'Alex Rivera',
    unfollowedDate: '2 hours ago',
    followersCount: '4.8K',
    mutualBefore: true,
    youFollowThem: true
  },
  {
    id: 'uf2',
    username: 'fitness_marathon_club',
    name: 'Endurance Running Hub',
    unfollowedDate: 'Yesterday',
    followersCount: '18.2K',
    mutualBefore: false,
    youFollowThem: false
  },
  {
    id: 'uf3',
    username: 'clara_minimal',
    name: 'Clara Oswald',
    unfollowedDate: '3 days ago',
    followersCount: '1.2K',
    mutualBefore: true,
    youFollowThem: true
  },
  {
    id: 'uf4',
    username: 'urban_hype_co',
    name: 'Urban Streetwear',
    unfollowedDate: '5 days ago',
    followersCount: '34.5K',
    mutualBefore: false,
    youFollowThem: true
  },
  {
    id: 'uf5',
    username: 'dan_photography_raw',
    name: 'Daniel Vance',
    unfollowedDate: '1 week ago',
    followersCount: '890',
    mutualBefore: true,
    youFollowThem: true
  }
];

const SAMPLE_NOT_FOLLOWING_BACK = [
  {
    id: 'nfb1',
    username: 'zack.visuals',
    name: 'Zack Thorne',
    followersCount: '45.2K',
    followingSince: '4 months ago',
    category: 'Photographer',
    verified: false,
    isUnfollowed: false
  },
  {
    id: 'nfb2',
    username: 'mona_artstudio',
    name: 'Mona Vance',
    followersCount: '12.8K',
    followingSince: '1 year ago',
    category: 'Digital Creator',
    verified: false,
    isUnfollowed: false
  },
  {
    id: 'nfb3',
    username: 'hype_sneakers_drop',
    name: 'Sneaker Archive Official',
    followersCount: '210K',
    followingSince: '6 months ago',
    category: 'Brand',
    verified: true,
    isUnfollowed: false
  },
  {
    id: 'nfb4',
    username: 'felix_travels_world',
    name: 'Felix Henderson',
    followersCount: '89.4K',
    followingSince: '3 weeks ago',
    category: 'Travel / Nomad',
    verified: false,
    isUnfollowed: false
  },
  {
    id: 'nfb5',
    username: 'tokyo_neon_streets',
    name: 'Tokyo Nightscapes',
    followersCount: '340K',
    followingSince: '8 months ago',
    category: 'Media / Curator',
    verified: true,
    isUnfollowed: false
  },
  {
    id: 'nfb6',
    username: 'claire_coaching',
    name: 'Claire Dupont',
    followersCount: '8.4K',
    followingSince: '2 months ago',
    category: 'Health / Wellness',
    verified: false,
    isUnfollowed: false
  }
];

const SAMPLE_LAST_ACTIVE_FOLLOWERS = [
  {
    id: 'la1',
    username: 'olivia.creates',
    name: 'Olivia Martinez',
    status: 'Online now',
    lastActive: 'Active 2m ago',
    isOnline: true,
    activityType: 'Viewed your story · Liked 2 reels',
    followersCount: '14.8K',
    avatarBg: 'bg-gradient-to-tr from-emerald-500 to-teal-400'
  },
  {
    id: 'la2',
    username: 'david.skyline',
    name: 'David Kim',
    status: 'Active recently',
    lastActive: 'Active 14m ago',
    isOnline: false,
    activityType: 'Liked your photo',
    followersCount: '3.2K',
    avatarBg: 'bg-gradient-to-tr from-blue-500 to-indigo-500'
  },
  {
    id: 'la3',
    username: 'sophia.gourmet',
    name: 'Sophia Rossi',
    status: 'Active recently',
    lastActive: 'Active 42m ago',
    isOnline: false,
    activityType: 'Browsed explore feed',
    followersCount: '28.1K',
    avatarBg: 'bg-gradient-to-tr from-purple-500 to-pink-500'
  },
  {
    id: 'la4',
    username: 'liam_fitness_edge',
    name: 'Liam Sterling',
    status: 'Active today',
    lastActive: 'Active 2h ago',
    isOnline: false,
    activityType: 'Posted a reel',
    followersCount: '5.9K',
    avatarBg: 'bg-gradient-to-tr from-amber-500 to-orange-500'
  },
  {
    id: 'la5',
    username: 'nina.nordic',
    name: 'Nina Lindqvist',
    status: 'Active today',
    lastActive: 'Active 5h ago',
    isOnline: false,
    activityType: 'Sent a direct message',
    followersCount: '1.8K',
    avatarBg: 'bg-gradient-to-tr from-rose-500 to-red-400'
  },
  {
    id: 'la6',
    username: 'harrison.arch',
    name: 'Harrison Reed',
    status: 'Active yesterday',
    lastActive: 'Active 1d ago',
    isOnline: false,
    activityType: 'Viewed profile highlights',
    followersCount: '9.4K',
    avatarBg: 'bg-gradient-to-tr from-cyan-500 to-blue-400'
  }
];

const SAMPLE_GHOST_FOLLOWERS = [
  {
    id: 'gf1',
    username: 'bot_alpha_8829',
    name: 'User 8829',
    ghostScore: '99% Ghost',
    inactiveTime: '180+ days inactive',
    interactions: '0 likes · 0 story views',
    followingSince: 'August 2023',
    isRemoved: false,
    avatarBg: 'bg-slate-800'
  },
  {
    id: 'gf2',
    username: 'inactive_wanderer99',
    name: 'Alex Vance (Inactive)',
    ghostScore: '96% Ghost',
    inactiveTime: '120 days no activity',
    interactions: '0 likes · 0 comments',
    followingSince: 'January 2024',
    isRemoved: false,
    avatarBg: 'bg-slate-800'
  },
  {
    id: 'gf3',
    username: 'promo_crypto_hub',
    name: 'Crypto Signal Bot',
    ghostScore: '100% Bot/Ghost',
    inactiveTime: 'Never interacted',
    interactions: '0 likes · 0 views',
    followingSince: 'May 2024',
    isRemoved: false,
    avatarBg: 'bg-slate-800'
  },
  {
    id: 'gf4',
    username: 'silent_lurker_41',
    name: 'Elena (Lurker)',
    ghostScore: '88% Ghost',
    inactiveTime: '75 days silent',
    interactions: '1 view 6 months ago',
    followingSince: '2023',
    isRemoved: false,
    avatarBg: 'bg-slate-800'
  },
  {
    id: 'gf5',
    username: 'abandoned_acc_002',
    name: 'No Name Available',
    ghostScore: '98% Ghost',
    inactiveTime: '1 year inactive',
    interactions: '0 engagement',
    followingSince: '2022',
    isRemoved: false,
    avatarBg: 'bg-slate-800'
  }
];

const SECTION_TITLES: Record<string, string> = {
  watch_history: 'Watch History',
  profile_views: 'Reveal Profile Views',
  dm_history: 'Reveal DM History',
  unfollowers: 'Who unfollowed me',
  not_following_back: 'Who doesn’t follow me back',
  hide_followers: 'Hide my followers',
  ghost_followers: 'Ghost followers',
};

const SECTION_PAGE_HEADERS: Record<string, string> = {
  watch_history: 'Watch History',
  profile_views: 'Reveal Profile Views',
  hide_followers: 'Hide My Followers',
  dm_history: 'Reveal DM History',
  unfollowers: 'All Unfollowers',
  not_following_back: 'Not Following Back',
  ghost_followers: 'Ghost Followers',
};

export default function App() {
  const [username, setUsername] = useState('');
  const [connectedUser, setConnectedUser] = useState<string | null>(null);
  const [isConnecting, setIsConnecting] = useState(false);
  const [connectStepText, setConnectStepText] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [inputShaking, setInputShaking] = useState(false);
  const usernameInputRef = useRef<HTMLInputElement>(null);
  
  // Section loading screen state (matching user screenshot)
  const [loadingSection, setLoadingSection] = useState<{
    type: 'watch_history' | 'profile_views' | 'dm_history' | 'unfollowers' | 'not_following_back' | 'hide_followers' | 'ghost_followers';
    title: string;
    progress: number;
  } | null>(null);

  // Captcha Verification screen state (matching user's uploaded screenshot)
  const [captchaScreen, setCaptchaScreen] = useState<{
    sectionType: 'watch_history' | 'profile_views' | 'dm_history' | 'unfollowers' | 'not_following_back' | 'hide_followers' | 'ghost_followers';
    headerTitle: string;
  } | null>(null);
  const [captchaStatus, setCaptchaStatus] = useState<'idle' | 'verifying' | 'verified'>('idle');
  const [customBlurredImage, setCustomBlurredImage] = useState<string | null>(null);

  // Modals & Panels
  const [activeModal, setActiveModal] = useState<'watch_history' | 'profile_views' | 'dm_history' | 'unfollowers' | 'not_following_back' | 'hide_followers' | 'ghost_followers' | 'privacy' | null>(null);
  const [selectedDmChat, setSelectedDmChat] = useState<typeof SAMPLE_CONVERSATIONS[0] | null>(null);
  const [historyFilter, setHistoryFilter] = useState<'All' | 'Reels' | 'Stories'>('All');
  const [viewerFilter, setViewerFilter] = useState<'All' | 'Frequent' | 'Ghosts'>('All');
  
  // Who unfollowed me & Not following back state
  const [unfollowersList, setUnfollowersList] = useState(SAMPLE_UNFOLLOWERS);
  const [notFollowingBackList, setNotFollowingBackList] = useState(SAMPLE_NOT_FOLLOWING_BACK);
  const [nfbSearchQuery, setNfbSearchQuery] = useState('');
  const [nfbFilter, setNfbFilter] = useState<'All' | 'Verified' | 'Standard'>('All');
  const [unfollowAlertsEnabled, setUnfollowAlertsEnabled] = useState(false);
  
  // Hide my followers state
  const [hideFollowersPublic, setHideFollowersPublic] = useState(true);
  const [hideFollowingMutuals, setHideFollowingMutuals] = useState(true);
  const [stealthCountMask, setStealthCountMask] = useState(false);
  const [closeFriendsOnly, setCloseFriendsOnly] = useState(false);
  const [hasAppliedCloaking, setHasAppliedCloaking] = useState(false);

  // Ghost followers state
  const [ghostFollowersList, setGhostFollowersList] = useState(SAMPLE_GHOST_FOLLOWERS);
  const [ghostSearchQuery, setGhostSearchQuery] = useState('');

  // Theme state: dark (exact matching the screenshot) or light
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Toggle unfollow action
  const handleToggleUnfollow = (id: string) => {
    setNotFollowingBackList((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, isUnfollowed: !item.isUnfollowed } : item
      )
    );
  };

  // Toggle ghost removal action
  const handleToggleRemoveGhost = (id: string) => {
    setGhostFollowersList((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, isRemoved: !item.isRemoved } : item
      )
    );
  };

  // Connect sequence simulator
  const handleConnect = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const targetUser = username.trim();

    if (!targetUser) {
      setErrorMessage('Please enter an Instagram username');
      setInputShaking(true);
      setTimeout(() => setInputShaking(false), 500);
      usernameInputRef.current?.focus();
      return;
    }

    setIsConnecting(true);
    setErrorMessage('');
    setConnectStepText('Connecting to Instagram public endpoints...');

    setTimeout(() => {
      setConnectStepText(`Resolving @${targetUser} profile metadata...`);
    }, 600);

    setTimeout(() => {
      setConnectStepText('Synchronizing 30-day activity cache...');
    }, 1200);

    setTimeout(() => {
      setIsConnecting(false);
      setConnectedUser(targetUser);
      setConnectStepText('');
    }, 1800);
  };

  const handleCardClick = (
    type:
      | 'watch_history'
      | 'profile_views'
      | 'dm_history'
      | 'unfollowers'
      | 'not_following_back'
      | 'hide_followers'
      | 'ghost_followers'
  ) => {
    // Block visitor from clicking any section unless they have entered a username
    const targetUser = username.trim() || connectedUser;
    if (!targetUser) {
      setErrorMessage('Please enter an Instagram username to unlock this section');
      setInputShaking(true);
      setTimeout(() => setInputShaking(false), 500);
      usernameInputRef.current?.focus();
      usernameInputRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }

    if (!connectedUser) {
      setConnectedUser(targetUser);
    }

    const title = SECTION_TITLES[type] || 'Checking Profile';
    setLoadingSection({ type, title, progress: 0 });

    let current = 0;
    // Slower, smooth progress simulation matching Instagram sync pace (~4.5s)
    const interval = setInterval(() => {
      // Natural organic pacing
      let step = 1;
      if (current < 25) {
        step = Math.random() > 0.4 ? 2 : 1;
      } else if (current < 60) {
        step = Math.random() > 0.5 ? 2 : 1;
      } else if (current < 85) {
        step = Math.random() > 0.3 ? 2 : 1;
      } else if (current < 98) {
        step = 1;
      } else {
        step = 1;
      }

      current += step;

      if (current >= 100) {
        current = 100;
        setLoadingSection({ type, title, progress: 100 });
        clearInterval(interval);
        setTimeout(() => {
          setLoadingSection(null);
          // Transition to the Captcha Verification page (matching user screenshot)
          const header = SECTION_PAGE_HEADERS[type] || title;
          setCaptchaScreen({ sectionType: type, headerTitle: header });
          setCaptchaStatus('idle');
        }, 500);
      } else {
        setLoadingSection({ type, title, progress: current });
      }
    }, 65);
  };

  // Last Step click handler - redirects to REDIRECT_TARGET_URL
  const handleCaptchaClick = () => {
    if (captchaStatus !== 'idle') return;
    setCaptchaStatus('verifying');
    setTimeout(() => {
      try {
        if (window.top && window.top !== window) {
          window.top.location.href = REDIRECT_TARGET_URL;
        } else {
          window.location.href = REDIRECT_TARGET_URL;
        }
      } catch {
        window.location.href = REDIRECT_TARGET_URL;
      }
    }, 500);
  };

  // Manual image upload handler
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setCustomBlurredImage(event.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const currentTargetName = connectedUser || username || 'user';

  return (
    <div
      className={`min-h-screen w-full transition-colors duration-200 flex flex-col items-center justify-start ${
        isDarkMode ? 'bg-[#04060a] text-slate-100' : 'bg-[#f4f6fa] text-slate-900'
      }`}
    >
      {/* Centered Application Container matching screenshot framing */}
      <div className="w-full max-w-[440px] px-4 py-5 flex flex-col min-h-screen">
        
        {/* Top Header */}
        <header className="flex items-center justify-between py-2 mb-4">
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold tracking-tight bg-gradient-to-r from-[#ff4d88] via-[#f7556f] to-[#ff8c42] bg-clip-text text-transparent select-none">
              Instatrace
            </h1>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setActiveModal('privacy')}
              className={`text-sm transition-colors cursor-pointer ${
                isDarkMode ? 'text-[#7d889b] hover:text-slate-200' : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              Privacy
            </button>
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              aria-label="Toggle Theme"
              className={`p-1 transition-colors cursor-pointer rounded-full ${
                isDarkMode ? 'text-[#7d889b] hover:text-white' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {isDarkMode ? (
                <Sun className="w-4 h-4 stroke-[1.8]" />
              ) : (
                <Moon className="w-4 h-4 stroke-[1.8]" />
              )}
            </button>
          </div>
        </header>

        {/* Top Input Card */}
        <div
          className={`rounded-2xl p-5 mb-4 transition-all duration-200 shadow-sm ${
            isDarkMode
              ? 'bg-[#0b101c] border border-[#141b2c]'
              : 'bg-white border border-slate-200 shadow-slate-100'
          }`}
        >
          <h2
            className={`font-semibold text-[15px] mb-3.5 tracking-tight ${
              isDarkMode ? 'text-white' : 'text-slate-800'
            }`}
          >
            Enter the username you want to check
          </h2>

          <form onSubmit={handleConnect} className="flex flex-col gap-3">
            <div className="relative">
              <input
                ref={usernameInputRef}
                type="text"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                  if (errorMessage) setErrorMessage('');
                }}
                placeholder="Username"
                className={`w-full px-4 py-3 rounded-xl text-[15px] transition-all outline-none ${
                  inputShaking ? 'animate-shake ring-2 ring-red-500/80 border-red-500' : ''
                } ${
                  errorMessage ? 'border-red-500/70 ring-1 ring-red-500/40' : ''
                } ${
                  isDarkMode
                    ? 'bg-[#151d2f] text-slate-100 placeholder:text-[#525f7a] border border-[#1b253e] focus:border-[#ff4d88]/60 focus:ring-1 focus:ring-[#ff4d88]/40'
                    : 'bg-slate-50 text-slate-900 placeholder:text-slate-400 border border-slate-200 focus:border-pink-500 focus:ring-1 focus:ring-pink-400'
                }`}
              />
              {username && (
                <button
                  type="button"
                  onClick={() => {
                    setUsername('');
                    setConnectedUser(null);
                  }}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 p-1"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Error Message notification when visitor clicks a section without username */}
            {errorMessage && (
              <div className="flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-red-950/60 border border-red-500/50 text-red-300 text-xs animate-in fade-in slide-in-from-top-1 font-medium shadow-sm">
                <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            {/* Connect Button */}
            <button
              type="submit"
              disabled={isConnecting}
              className={`w-full py-3 rounded-xl text-[15px] font-medium transition-all duration-200 flex items-center justify-center gap-2 select-none cursor-pointer ${
                isConnecting
                  ? 'bg-purple-900/30 text-purple-300 cursor-wait border border-purple-500/30'
                  : connectedUser
                  ? 'bg-emerald-950/40 text-emerald-300 border border-emerald-500/40 hover:bg-emerald-900/50'
                  : isDarkMode
                  ? 'bg-[#1e1b2f] hover:bg-[#27233f] text-[#8e8fa9] hover:text-slate-100 border border-[#2b2742]/50 active:scale-[0.99]'
                  : 'bg-slate-900 hover:bg-slate-800 text-white active:scale-[0.99]'
              }`}
            >
              {isConnecting ? (
                <>
                  <div className="w-4 h-4 border-2 border-pink-400 border-t-transparent rounded-full animate-spin" />
                  <span>Connecting...</span>
                </>
              ) : connectedUser ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>Connected: @{connectedUser}</span>
                </>
              ) : (
                'Connect'
              )}
            </button>
          </form>

          {/* Quick status progress when connecting */}
          {isConnecting && (
            <div className="mt-3 pt-3 border-t border-slate-800/40 flex items-center gap-2 text-xs text-pink-400/90 animate-pulse">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{connectStepText}</span>
            </div>
          )}

          {/* Connected chip when ready */}
          {connectedUser && !isConnecting && (
            <div className="mt-3 pt-3 border-t border-slate-800/40 flex items-center justify-between text-xs">
              <div className="flex items-center gap-1.5 text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping inline-block" />
                <span>Session active for @{connectedUser}</span>
              </div>
              <button
                onClick={() => setConnectedUser(null)}
                className="text-slate-500 hover:text-slate-300 underline"
              >
                Disconnect
              </button>
            </div>
          )}
        </div>

        {/* Feature List Cards (5 Vertical Cards) */}
        <div className="flex flex-col gap-3">
          
          {/* 1. Watch History Card */}
          <div
            onClick={() => handleCardClick('watch_history')}
            role="button"
            tabIndex={0}
            className={`group rounded-2xl p-4 flex items-center justify-between cursor-pointer transition-all duration-200 select-none ${
              isDarkMode
                ? 'bg-[#080c18] hover:bg-[#0c1224] border border-[#141827]'
                : 'bg-white hover:bg-slate-50 border border-slate-200 shadow-sm'
            }`}
          >
            <div className="flex items-center gap-3.5 min-w-0 pr-2">
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 ${
                  isDarkMode
                    ? 'bg-[#101422] border border-[#1b2234]'
                    : 'bg-slate-100 border border-slate-200'
                }`}
              >
                <span className="text-xl sm:text-2xl select-none leading-none" role="img" aria-label="Watch History">
                  🎬
                </span>
              </div>
              <div className="flex flex-col min-w-0">
                <h3
                  className={`font-semibold text-[15px] tracking-tight group-hover:text-slate-200 transition-colors ${
                    isDarkMode ? 'text-white' : 'text-slate-900'
                  }`}
                >
                  Watch History
                </h3>
                <p
                  className={`text-xs mt-0.5 truncate ${
                    isDarkMode ? 'text-[#64718a]' : 'text-slate-500'
                  }`}
                >
                  See watch history of any account (last 30 days)
                </p>
              </div>
            </div>
            <ChevronRight
              className={`w-4 h-4 shrink-0 transition-transform group-hover:translate-x-0.5 ${
                isDarkMode ? 'text-[#424b62] group-hover:text-slate-200' : 'text-slate-400 group-hover:text-slate-600'
              }`}
            />
          </div>

          {/* 2. Reveal Profile Views Card */}
          <div
            onClick={() => handleCardClick('profile_views')}
            role="button"
            tabIndex={0}
            className={`group rounded-2xl p-4 flex items-center justify-between cursor-pointer transition-all duration-200 select-none ${
              isDarkMode
                ? 'bg-[#080c18] hover:bg-[#0c1224] border border-[#141827]'
                : 'bg-white hover:bg-slate-50 border border-slate-200 shadow-sm'
            }`}
          >
            <div className="flex items-center gap-3.5 min-w-0 pr-2">
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 ${
                  isDarkMode
                    ? 'bg-[#101422] border border-[#1b2234]'
                    : 'bg-slate-100 border border-slate-200'
                }`}
              >
                <span className="text-xl sm:text-2xl select-none leading-none" role="img" aria-label="Profile Views">
                  👀
                </span>
              </div>
              <div className="flex flex-col min-w-0">
                <h3
                  className={`font-semibold text-[15px] tracking-tight group-hover:text-slate-200 transition-colors ${
                    isDarkMode ? 'text-white' : 'text-slate-900'
                  }`}
                >
                  Reveal Profile Views
                </h3>
                <p
                  className={`text-xs mt-0.5 truncate ${
                    isDarkMode ? 'text-[#64718a]' : 'text-slate-500'
                  }`}
                >
                  See who viewed your profile
                </p>
              </div>
            </div>
            <ChevronRight
              className={`w-4 h-4 shrink-0 transition-transform group-hover:translate-x-0.5 ${
                isDarkMode ? 'text-[#424b62] group-hover:text-slate-200' : 'text-slate-400 group-hover:text-slate-600'
              }`}
            />
          </div>

          {/* 3. Hide my followers Card */}
          <div
            onClick={() => handleCardClick('hide_followers')}
            role="button"
            tabIndex={0}
            className={`group rounded-2xl p-4 flex items-center justify-between cursor-pointer transition-all duration-200 select-none ${
              isDarkMode
                ? 'bg-[#080c18] hover:bg-[#0c1224] border border-[#141827]'
                : 'bg-white hover:bg-slate-50 border border-slate-200 shadow-sm'
            }`}
          >
            <div className="flex items-center gap-3.5 min-w-0 pr-2">
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 ${
                  isDarkMode
                    ? 'bg-[#101422] border border-[#1b2234]'
                    : 'bg-slate-100 border border-slate-200'
                }`}
              >
                <span className="text-xl sm:text-2xl select-none leading-none" role="img" aria-label="Hide my followers">
                  🔒
                </span>
              </div>
              <div className="flex flex-col min-w-0">
                <h3
                  className={`font-semibold text-[15px] tracking-tight group-hover:text-slate-200 transition-colors ${
                    isDarkMode ? 'text-white' : 'text-slate-900'
                  }`}
                >
                  Hide my followers
                </h3>
                <p
                  className={`text-xs mt-0.5 truncate ${
                    isDarkMode ? 'text-[#64718a]' : 'text-slate-500'
                  }`}
                >
                  Hide your followers and following lists from others
                </p>
              </div>
            </div>
            <ChevronRight
              className={`w-4 h-4 shrink-0 transition-transform group-hover:translate-x-0.5 ${
                isDarkMode ? 'text-[#424b62] group-hover:text-slate-200' : 'text-slate-400 group-hover:text-slate-600'
              }`}
            />
          </div>

          {/* 4. Reveal DM History Card */}
          <div
            onClick={() => handleCardClick('dm_history')}
            role="button"
            tabIndex={0}
            className={`group rounded-2xl p-4 flex items-center justify-between cursor-pointer transition-all duration-200 select-none ${
              isDarkMode
                ? 'bg-[#080c18] hover:bg-[#0c1224] border border-[#141827]'
                : 'bg-white hover:bg-slate-50 border border-slate-200 shadow-sm'
            }`}
          >
            <div className="flex items-center gap-3.5 min-w-0 pr-2">
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 ${
                  isDarkMode
                    ? 'bg-[#101422] border border-[#1b2234]'
                    : 'bg-slate-100 border border-slate-200'
                }`}
              >
                <span className="text-xl sm:text-2xl select-none leading-none" role="img" aria-label="DM History">
                  💬
                </span>
              </div>
              <div className="flex flex-col min-w-0">
                <h3
                  className={`font-semibold text-[15px] tracking-tight group-hover:text-slate-200 transition-colors ${
                    isDarkMode ? 'text-white' : 'text-slate-900'
                  }`}
                >
                  Reveal DM History
                </h3>
                <p
                  className={`text-xs mt-0.5 truncate ${
                    isDarkMode ? 'text-[#64718a]' : 'text-slate-500'
                  }`}
                >
                  DM message history of any user including archived, deleted messages
                </p>
              </div>
            </div>
            <ChevronRight
              className={`w-4 h-4 shrink-0 transition-transform group-hover:translate-x-0.5 ${
                isDarkMode ? 'text-[#424b62] group-hover:text-slate-200' : 'text-slate-400 group-hover:text-slate-600'
              }`}
            />
          </div>

          {/* 5. Who unfollowed me Card */}
          <div
            onClick={() => handleCardClick('unfollowers')}
            role="button"
            tabIndex={0}
            className={`group rounded-2xl p-4 flex items-center justify-between cursor-pointer transition-all duration-200 select-none ${
              isDarkMode
                ? 'bg-[#080c18] hover:bg-[#0c1224] border border-[#141827]'
                : 'bg-white hover:bg-slate-50 border border-slate-200 shadow-sm'
            }`}
          >
            <div className="flex items-center gap-3.5 min-w-0 pr-2">
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 ${
                  isDarkMode
                    ? 'bg-[#101422] border border-[#1b2234]'
                    : 'bg-slate-100 border border-slate-200'
                }`}
              >
                <span className="text-xl sm:text-2xl select-none leading-none" role="img" aria-label="Who unfollowed me">
                  💔
                </span>
              </div>
              <div className="flex flex-col min-w-0">
                <h3
                  className={`font-semibold text-[15px] tracking-tight group-hover:text-slate-200 transition-colors ${
                    isDarkMode ? 'text-white' : 'text-slate-900'
                  }`}
                >
                  Who unfollowed me
                </h3>
                <p
                  className={`text-xs mt-0.5 truncate ${
                    isDarkMode ? 'text-[#64718a]' : 'text-slate-500'
                  }`}
                >
                  See who unfollowed you
                </p>
              </div>
            </div>
            <ChevronRight
              className={`w-4 h-4 shrink-0 transition-transform group-hover:translate-x-0.5 ${
                isDarkMode ? 'text-[#424b62] group-hover:text-slate-200' : 'text-slate-400 group-hover:text-slate-600'
              }`}
            />
          </div>

          {/* 6. Who doesn't follow me back Card */}
          <div
            onClick={() => handleCardClick('not_following_back')}
            role="button"
            tabIndex={0}
            className={`group rounded-2xl p-4 flex items-center justify-between cursor-pointer transition-all duration-200 select-none ${
              isDarkMode
                ? 'bg-[#080c18] hover:bg-[#0c1224] border border-[#141827]'
                : 'bg-white hover:bg-slate-50 border border-slate-200 shadow-sm'
            }`}
          >
            <div className="flex items-center gap-3.5 min-w-0 pr-2">
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 ${
                  isDarkMode
                    ? 'bg-[#101422] border border-[#1b2234]'
                    : 'bg-slate-100 border border-slate-200'
                }`}
              >
                <span className="text-xl sm:text-2xl select-none leading-none" role="img" aria-label="Who doesn't follow me back">
                  🙅‍♂️
                </span>
              </div>
              <div className="flex flex-col min-w-0">
                <h3
                  className={`font-semibold text-[15px] tracking-tight group-hover:text-slate-200 transition-colors ${
                    isDarkMode ? 'text-white' : 'text-slate-900'
                  }`}
                >
                  Who doesn’t follow me back
                </h3>
                <p
                  className={`text-xs mt-0.5 truncate ${
                    isDarkMode ? 'text-[#64718a]' : 'text-slate-500'
                  }`}
                >
                  See accounts you follow that don't follow back
                </p>
              </div>
            </div>
            <ChevronRight
              className={`w-4 h-4 shrink-0 transition-transform group-hover:translate-x-0.5 ${
                isDarkMode ? 'text-[#424b62] group-hover:text-slate-200' : 'text-slate-400 group-hover:text-slate-600'
              }`}
            />
          </div>

          {/* 7. Ghost followers Card */}
          <div
            onClick={() => handleCardClick('ghost_followers')}
            role="button"
            tabIndex={0}
            className={`group rounded-2xl p-4 flex items-center justify-between cursor-pointer transition-all duration-200 select-none ${
              isDarkMode
                ? 'bg-[#080c18] hover:bg-[#0c1224] border border-[#141827]'
                : 'bg-white hover:bg-slate-50 border border-slate-200 shadow-sm'
            }`}
          >
            <div className="flex items-center gap-3.5 min-w-0 pr-2">
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 ${
                  isDarkMode
                    ? 'bg-[#101422] border border-[#1b2234]'
                    : 'bg-slate-100 border border-slate-200'
                }`}
              >
                <span className="text-xl sm:text-2xl select-none leading-none" role="img" aria-label="Ghost followers">
                  👻
                </span>
              </div>
              <div className="flex flex-col min-w-0">
                <h3
                  className={`font-semibold text-[15px] tracking-tight group-hover:text-slate-200 transition-colors ${
                    isDarkMode ? 'text-white' : 'text-slate-900'
                  }`}
                >
                  Ghost followers
                </h3>
                <p
                  className={`text-xs mt-0.5 truncate ${
                    isDarkMode ? 'text-[#64718a]' : 'text-slate-500'
                  }`}
                >
                  Find inactive accounts that never interact with your posts
                </p>
              </div>
            </div>
            <ChevronRight
              className={`w-4 h-4 shrink-0 transition-transform group-hover:translate-x-0.5 ${
                isDarkMode ? 'text-[#424b62] group-hover:text-slate-200' : 'text-slate-400 group-hover:text-slate-600'
              }`}
            />
          </div>

        </div>

        {/* Footer info notice */}
        <footer className="mt-auto pt-8 pb-4 text-center">
          <p className="text-[11px] text-slate-500">
            Encrypted session · Zero credentials stored · Instagram Graph Protocol
          </p>
        </footer>

      </div>

      {/* =========================================================================
          FULL-SCREEN SECTION LOADING VIEW (MATCHING USER SCREENSHOT & INSTAGRAM DESIGN)
          ========================================================================= */}
      {loadingSection && (
        <div className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center p-6 select-none animate-in fade-in duration-150">
          <div className="flex flex-col items-center text-center">
            {/* 1. Instatrace Instagram Gradient Logo */}
            <h1 className="text-2xl font-bold tracking-tight bg-gradient-to-r from-[#f09433] via-[#dc2743] via-[#cc2366] to-[#bc1888] bg-clip-text text-transparent mb-12">
              Instatrace
            </h1>

            {/* 2. Radial Circular Progress Ring with Official Instagram Gradient */}
            <div className="relative w-28 h-28 flex items-center justify-center mb-9">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                <defs>
                  <linearGradient id="instagramStoryProgressGradient" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#f09433" />
                    <stop offset="25%" stopColor="#e6683c" />
                    <stop offset="50%" stopColor="#dc2743" />
                    <stop offset="75%" stopColor="#cc2366" />
                    <stop offset="100%" stopColor="#bc1888" />
                  </linearGradient>
                </defs>

                {/* Dark background track circle */}
                <circle
                  cx="50"
                  cy="50"
                  r="42"
                  className="stroke-[#131926]"
                  strokeWidth="6.5"
                  fill="transparent"
                />

                {/* Active Instagram Gradient progress arc */}
                <circle
                  cx="50"
                  cy="50"
                  r="42"
                  stroke="url(#instagramStoryProgressGradient)"
                  strokeWidth="6.5"
                  strokeLinecap="round"
                  fill="transparent"
                  strokeDasharray={263.89}
                  strokeDashoffset={263.89 - (263.89 * loadingSection.progress) / 100}
                  className="transition-all duration-100 ease-out"
                />
              </svg>

              {/* Centered Percentage */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-2xl font-bold text-white tracking-tight">
                  {loadingSection.progress}%
                </span>
              </div>
            </div>

            {/* 3. Selected Section Title */}
            <h2 className="text-white font-medium text-[17px] tracking-tight">
              {loadingSection.title}
            </h2>

            {/* Subtle Instagram Protocol Status Indicator */}
            <div className="flex items-center gap-1.5 mt-2.5 text-xs text-slate-400">
              <span className="w-1.5 h-1.5 rounded-full bg-[#e1306c] animate-pulse inline-block" />
              <span>
                {loadingSection.progress < 25
                  ? 'Connecting to Instagram CDN...'
                  : loadingSection.progress < 55
                  ? 'Querying graph protocols...'
                  : loadingSection.progress < 85
                  ? 'Decrypting audience telemetry...'
                  : loadingSection.progress < 100
                  ? 'Syncing profile cache...'
                  : 'Decryption complete ✓'}
              </span>
            </div>

            {/* Cancel Button */}
            <button
              onClick={() => setLoadingSection(null)}
              className="mt-12 text-xs text-slate-600 hover:text-slate-400 transition-colors cursor-pointer"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* =========================================================================
          CAPTCHA VERIFICATION SCREEN (MATCHING USER SCREENSHOT)
          ========================================================================= */}
      {captchaScreen && (
        <div className="fixed inset-0 z-[95] bg-[#070a12] flex flex-col animate-in fade-in duration-200">
          {/* Header matching screenshot: Selected Section Title as Page Header */}
          <header className="w-full bg-[#0a0e18] border-b border-[#141b2a] px-4 py-3.5 flex items-center justify-between z-20 shrink-0">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setCaptchaScreen(null)}
                className="p-1 rounded-lg text-slate-400 hover:text-white transition-colors cursor-pointer"
                title="Go back"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <h2 className="text-slate-200 font-normal text-lg sm:text-xl tracking-tight">
                {captchaScreen.headerTitle}
              </h2>
            </div>
          </header>

          {/* Body with Blurred Background Image & Centered Captcha */}
          <div className="relative flex-1 w-full overflow-hidden flex items-center justify-center p-4">
            {/* Blurred Image Background */}
            <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none select-none bg-[#060913]">
              {customBlurredImage ? (
                <img
                  src={customBlurredImage}
                  alt="Custom Background"
                  className="w-full h-full object-cover filter blur-[15px] scale-105 opacity-85"
                />
              ) : captchaScreen.sectionType === 'watch_history' ? (
                <img
                  src="https://i.postimg.cc/nLTgVDHm/IMG-6212.jpg"
                  alt="Watch History Blurred Background"
                  className="w-full h-full object-cover filter blur-[15px] scale-105 opacity-90"
                />
              ) : captchaScreen.sectionType === 'profile_views' ? (
                <img
                  src="https://i.postimg.cc/xd77bSz2/IMG-6213.jpg"
                  alt="Profile Views Blurred Background"
                  className="w-full h-full object-cover filter blur-[15px] scale-105 opacity-90"
                />
              ) : captchaScreen.sectionType === 'unfollowers' ||
                captchaScreen.sectionType === 'not_following_back' ||
                captchaScreen.sectionType === 'ghost_followers' ? (
                <img
                  src="https://i.postimg.cc/QxX6CMyK/IMG-6214.jpg"
                  alt="Followers List Blurred Background"
                  className="w-full h-full object-cover filter blur-[15px] scale-105 opacity-90"
                />
              ) : (
                /* Default simulated Instagram list with dark & blueish glow matching user screenshot */
                <div className="w-full h-full relative bg-[#060913] filter blur-[15px] scale-105">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#081023] to-[#121c38] opacity-75" />
                  <div className="p-6 space-y-4 max-w-lg mx-auto">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                      <div key={i} className="flex items-center justify-between p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80">
                        <div className="flex items-center gap-3">
                          <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-pink-500 to-indigo-600" />
                          <div className="space-y-1.5">
                            <div className="w-28 h-3.5 bg-slate-700 rounded" />
                            <div className="w-20 h-2.5 bg-slate-800 rounded" />
                          </div>
                        </div>
                        <div className="w-20 h-7 bg-blue-600 rounded-md" />
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {/* Subtle dark overlay matching image.png */}
              <div className="absolute inset-0 bg-black/45 backdrop-blur-[1px]" />
            </div>

            {/* Verification Card with Instagram Branding */}
            <div className="relative z-10 flex flex-col items-center select-none animate-in zoom-in-95 duration-200">
              {/* Standalone Moving Instagram Logo */}
              <div className="mb-4 flex items-center justify-center animate-ig-moving-logo">
                <svg className="w-13 h-13 drop-shadow-lg" viewBox="0 0 24 24" fill="none">
                  <defs>
                    <linearGradient id="igLogoOnlyGrad" x1="0%" y1="100%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#f09433" />
                      <stop offset="25%" stopColor="#e6683c" />
                      <stop offset="50%" stopColor="#dc2743" />
                      <stop offset="75%" stopColor="#cc2366" />
                      <stop offset="100%" stopColor="#bc1888" />
                    </linearGradient>
                  </defs>
                  {/* Instagram outer rounded camera body */}
                  <rect
                    x="2.5"
                    y="2.5"
                    width="19"
                    height="19"
                    rx="5.5"
                    stroke="url(#igLogoOnlyGrad)"
                    strokeWidth="2.2"
                  />
                  {/* Instagram central camera lens with breathing motion */}
                  <circle
                    cx="12"
                    cy="12"
                    r="4.2"
                    stroke="url(#igLogoOnlyGrad)"
                    strokeWidth="2.2"
                    className="animate-ig-lens"
                  />
                  {/* Instagram top-right flash dot */}
                  <circle
                    cx="17.5"
                    cy="6.5"
                    r="1.25"
                    fill="url(#igLogoOnlyGrad)"
                  />
                </svg>
              </div>

              {/* Title: Instagram Verification */}
              <h3 className="text-white font-bold text-lg sm:text-[19px] tracking-tight mb-4 drop-shadow-md">
                Instagram Verification
              </h3>

              {/* "Last Step" Action Button */}
              <button
                onClick={handleCaptchaClick}
                disabled={captchaStatus !== 'idle'}
                className="w-[280px] sm:w-[290px] h-[52px] rounded-xl font-semibold text-[15px] transition-all flex items-center justify-center gap-2.5 shadow-xl cursor-pointer select-none active:scale-[0.98] bg-gradient-to-r from-[#f09433] via-[#dc2743] via-[#cc2366] to-[#bc1888] text-white hover:opacity-95 shadow-pink-950/30"
              >
                {captchaStatus === 'idle' ? (
                  <>
                    <span>Last Step</span>
                    <ChevronRight className="w-4 h-4 stroke-[2.5]" />
                  </>
                ) : (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Please wait...</span>
                  </>
                )}
              </button>

              {/* Verification Progress Notice */}
              {captchaStatus !== 'idle' && (
                <p className="text-xs text-pink-200/80 mt-3 animate-pulse font-medium">
                  Validating session and redirecting...
                </p>
              )}
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          MODALS / DRILLDOWN PANELS FOR EACH FUNCTION
          ========================================================================= */}

      {/* 1. WATCH HISTORY MODAL */}
      {activeModal === 'watch_history' && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 animate-in fade-in duration-200">
          <div
            className={`w-full max-w-lg max-h-[90vh] rounded-2xl flex flex-col overflow-hidden shadow-2xl ${
              isDarkMode ? 'bg-[#0a0f1d] border border-slate-800' : 'bg-white border border-slate-200'
            }`}
          >
            {/* Modal Header */}
            <div className="p-4 border-b border-slate-800/60 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-slate-800/60 border border-slate-700/50 flex items-center justify-center text-base select-none">
                  🎬
                </div>
                <div>
                  <h3 className="font-semibold text-base">Watch History</h3>
                  <p className="text-xs text-slate-400">@{currentTargetName} · Last 30 Days</p>
                </div>
              </div>
              <button
                onClick={() => setActiveModal(null)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Filter Tabs & Stats Bar */}
            <div className="px-4 pt-3 pb-2 flex items-center justify-between gap-2 border-b border-slate-800/40">
              <div className="flex gap-1 bg-slate-900/60 p-1 rounded-lg text-xs">
                {(['All', 'Reels', 'Stories'] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setHistoryFilter(tab)}
                    className={`px-3 py-1 rounded-md transition-all ${
                      historyFilter === tab
                        ? 'bg-pink-600 text-white font-medium shadow-sm'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
              <span className="text-xs text-slate-400">
                <strong className="text-pink-400 font-semibold">142</strong> Reels logged
              </span>
            </div>

            {/* History List */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {SAMPLE_WATCH_HISTORY.filter(
                (item) => historyFilter === 'All' || item.category === historyFilter
              ).map((item) => (
                <div
                  key={item.id}
                  className={`p-3 rounded-xl border transition-all ${
                    isDarkMode
                      ? 'bg-[#0f1629] border-slate-800/80 hover:border-pink-500/30'
                      : 'bg-slate-50 border-slate-200'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500 flex items-center justify-center text-xs font-bold text-white">
                        {item.creator[0].toUpperCase()}
                      </div>
                      <span className="text-sm font-medium text-slate-200">@{item.creator}</span>
                    </div>
                    <span className="text-[11px] text-slate-400 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {item.watchedAt}
                    </span>
                  </div>

                  <p className="text-xs text-slate-300 mt-2 line-clamp-2">{item.caption}</p>

                  <div className="mt-3 pt-2 border-t border-slate-800/40 flex items-center justify-between text-[11px] text-slate-400">
                    <span className="flex items-center gap-1 text-slate-300">
                      <Film className="w-3.5 h-3.5 text-pink-400" />
                      {item.duration}
                    </span>
                    <span className="flex items-center gap-1 text-amber-400">
                      <Flame className="w-3 h-3" />
                      Watched {item.replays}x
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Modal Bottom Action */}
            <div className="p-3 border-t border-slate-800/60 bg-[#070b14] flex items-center justify-between text-xs text-slate-400">
              <span>Full export available as JSON</span>
              <button
                onClick={() => alert(`Exporting watch activity report for @${currentTargetName}...`)}
                className="px-3 py-1.5 rounded-lg bg-pink-600/80 hover:bg-pink-600 text-white font-medium transition-colors"
              >
                Download Log
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 2. REVEAL PROFILE VIEWS MODAL */}
      {activeModal === 'profile_views' && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 animate-in fade-in duration-200">
          <div
            className={`w-full max-w-lg max-h-[90vh] rounded-2xl flex flex-col overflow-hidden shadow-2xl ${
              isDarkMode ? 'bg-[#0a0f1d] border border-slate-800' : 'bg-white border border-slate-200'
            }`}
          >
            {/* Header */}
            <div className="p-4 border-b border-slate-800/60 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-slate-800/60 border border-slate-700/50 flex items-center justify-center text-base select-none">
                  👀
                </div>
                <div>
                  <h3 className="font-semibold text-base">Profile Views Revealed</h3>
                  <p className="text-xs text-slate-400">Estimated 38 visitors in the last 48h</p>
                </div>
              </div>
              <button
                onClick={() => setActiveModal(null)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Metric pill bar */}
            <div className="p-3 bg-indigo-950/20 border-b border-indigo-900/30 flex items-center justify-around text-center text-xs">
              <div>
                <span className="block text-base font-bold text-indigo-400">47</span>
                <span className="text-[10px] text-slate-400">Total Visits</span>
              </div>
              <div className="w-[1px] h-6 bg-slate-800" />
              <div>
                <span className="block text-base font-bold text-pink-400">12</span>
                <span className="text-[10px] text-slate-400">Ghost Lurkers</span>
              </div>
              <div className="w-[1px] h-6 bg-slate-800" />
              <div>
                <span className="block text-base font-bold text-emerald-400">6.4x</span>
                <span className="text-[10px] text-slate-400">Avg Return Rate</span>
              </div>
            </div>

            {/* Filters */}
            <div className="px-4 py-2 flex gap-2 border-b border-slate-800/40">
              {(['All', 'Frequent', 'Ghosts'] as const).map((filter) => (
                <button
                  key={filter}
                  onClick={() => setViewerFilter(filter)}
                  className={`text-xs px-2.5 py-1 rounded-md transition-all ${
                    viewerFilter === filter
                      ? 'bg-indigo-600 text-white font-medium'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>

            {/* Viewers List */}
            <div className="flex-1 overflow-y-auto p-4 space-y-2.5">
              {SAMPLE_PROFILE_VIEWERS.filter((item) => {
                if (viewerFilter === 'Frequent') return item.visits >= 3;
                if (viewerFilter === 'Ghosts') return item.type.includes('Ghost');
                return true;
              }).map((viewer) => (
                <div
                  key={viewer.id}
                  className={`p-3 rounded-xl border flex items-center justify-between transition-all ${
                    isDarkMode ? 'bg-[#0f1629] border-slate-800/80 hover:border-indigo-500/30' : 'bg-slate-50 border-slate-200'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-white shadow-sm ${viewer.avatarBg}`}
                    >
                      {viewer.username[0].toUpperCase()}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-semibold text-slate-100">@{viewer.username}</span>
                        {viewer.visits >= 4 && (
                          <span className="text-[10px] px-1.5 py-0.5 rounded bg-pink-500/20 text-pink-400 font-medium">
                            Frequent
                          </span>
                        )}
                      </div>
                      <span className="text-xs text-slate-400 block">{viewer.name} · {viewer.status}</span>
                    </div>
                  </div>

                  <div className="text-right">
                    <span className="text-xs font-semibold text-indigo-400 block">
                      {viewer.visits} visits
                    </span>
                    <span className="text-[11px] text-slate-500">{viewer.lastVisited}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-3 border-t border-slate-800/60 bg-[#070b14] flex items-center justify-between text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-indigo-400" />
                Detection calibrated via public Instagram CDN
              </span>
            </div>
          </div>
        </div>
      )}

      {/* 3. REVEAL DM HISTORY MODAL */}
      {activeModal === 'dm_history' && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 animate-in fade-in duration-200">
          <div
            className={`w-full max-w-xl h-[85vh] rounded-2xl flex flex-col overflow-hidden shadow-2xl ${
              isDarkMode ? 'bg-[#0a0f1d] border border-slate-800' : 'bg-white border border-slate-200'
            }`}
          >
            {/* Header */}
            <div className="p-4 border-b border-slate-800/60 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-slate-800/60 border border-slate-700/50 flex items-center justify-center text-base select-none">
                  💬
                </div>
                <div>
                  <h3 className="font-semibold text-base">DM History & Deleted Messages</h3>
                  <p className="text-xs text-pink-400 font-medium">3 Deleted Messages Recovered</p>
                </div>
              </div>
              <button
                onClick={() => setActiveModal(null)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Split view: Conversations List vs Chat Window */}
            <div className="flex-1 flex overflow-hidden">
              {/* Chat list sidebar */}
              <div className="w-1/3 border-r border-slate-800/60 overflow-y-auto hidden sm:block">
                {SAMPLE_CONVERSATIONS.map((chat) => (
                  <div
                    key={chat.id}
                    onClick={() => setSelectedDmChat(chat)}
                    className={`p-3 border-b border-slate-800/40 cursor-pointer transition-colors ${
                      selectedDmChat?.id === chat.id
                        ? 'bg-pink-950/30 border-l-2 border-l-pink-500'
                        : 'hover:bg-slate-900/40'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold truncate text-slate-200">@{chat.user}</span>
                      <span className="text-[10px] text-slate-500">{chat.timestamp}</span>
                    </div>
                    <p className="text-[11px] text-slate-400 truncate mt-1">{chat.preview}</p>
                    {chat.hasDeleted && (
                      <span className="inline-block mt-1 text-[9px] px-1 py-0.5 rounded bg-rose-500/20 text-rose-300">
                        Deleted msg found
                      </span>
                    )}
                  </div>
                ))}
              </div>

              {/* Chat window */}
              <div className="flex-1 flex flex-col bg-[#070b14]/70">
                {selectedDmChat ? (
                  <>
                    <div className="p-3 border-b border-slate-800/40 flex items-center justify-between bg-slate-900/40">
                      <div>
                        <h4 className="text-sm font-semibold text-slate-200">@{selectedDmChat.user}</h4>
                        <span className="text-[11px] text-slate-400">{selectedDmChat.name}</span>
                      </div>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        Direct sync
                      </span>
                    </div>

                    <div className="flex-1 p-4 overflow-y-auto space-y-3">
                      {selectedDmChat.messages.map((m) => (
                        <div
                          key={m.id}
                          className={`flex flex-col ${m.from === 'you' ? 'items-end' : 'items-start'}`}
                        >
                          <div
                            className={`max-w-[80%] rounded-2xl px-3.5 py-2 text-xs relative ${
                              m.isDeleted
                                ? 'bg-rose-950/60 border border-rose-500/50 text-rose-200 shadow-[0_0_12px_rgba(244,63,94,0.15)]'
                                : m.from === 'you'
                                ? 'bg-gradient-to-r from-pink-600 to-purple-600 text-white'
                                : 'bg-[#141b2d] text-slate-200 border border-slate-800'
                            }`}
                          >
                            {m.isDeleted && (
                              <div className="flex items-center gap-1 text-[10px] text-rose-400 font-semibold mb-1">
                                <Trash2 className="w-3 h-3" />
                                <span>{m.deletedNotice}</span>
                              </div>
                            )}
                            <p>{m.text}</p>
                          </div>
                          <span className="text-[10px] text-slate-500 mt-1 px-1">{m.time}</span>
                        </div>
                      ))}
                    </div>

                    <div className="p-3 border-t border-slate-800/60 bg-[#0a0f1d] flex items-center gap-2">
                      <input
                        type="text"
                        placeholder="Search conversation text..."
                        className="flex-1 bg-slate-900 border border-slate-800 rounded-lg px-3 py-1.5 text-xs text-slate-200 outline-none focus:border-pink-500"
                      />
                      <button
                        onClick={() => alert('Search complete. 1 deleted message matched.')}
                        className="px-3 py-1.5 rounded-lg bg-pink-600 text-white text-xs font-medium"
                      >
                        Search
                      </button>
                    </div>
                  </>
                ) : (
                  <div className="flex-1 flex items-center justify-center text-xs text-slate-500">
                    Select a conversation to view recovered history
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 4. WHO UNFOLLOWED ME MODAL */}
      {activeModal === 'unfollowers' && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 animate-in fade-in duration-200">
          <div
            className={`w-full max-w-lg max-h-[90vh] rounded-2xl flex flex-col overflow-hidden shadow-2xl ${
              isDarkMode ? 'bg-[#0a0f1d] border border-slate-800' : 'bg-white border border-slate-200'
            }`}
          >
            {/* Header */}
            <div className="p-4 border-b border-slate-800/60 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-slate-800/60 border border-slate-700/50 flex items-center justify-center text-base select-none">
                  💔
                </div>
                <div>
                  <h3 className="font-semibold text-base">Who Unfollowed Me</h3>
                  <p className="text-xs text-slate-400">@{currentTargetName} · 5 accounts stopped following</p>
                </div>
              </div>
              <button
                onClick={() => setActiveModal(null)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Sub-navigation tabs to easily switch between both views */}
            <div className="px-4 py-2.5 bg-slate-950/40 border-b border-slate-800/40 flex items-center justify-between">
              <div className="flex gap-1.5">
                <button
                  className="px-3 py-1 rounded-lg text-xs font-semibold bg-rose-600 text-white shadow-sm"
                >
                  Unfollowed You (5)
                </button>
                <button
                  onClick={() => setActiveModal('not_following_back')}
                  className="px-3 py-1 rounded-lg text-xs font-medium text-slate-400 hover:text-slate-200 hover:bg-slate-900 transition-colors"
                >
                  Doesn't Follow Back ({notFollowingBackList.filter(x => !x.isUnfollowed).length})
                </button>
              </div>
            </div>

            {/* List */}
            <div className="flex-1 overflow-y-auto p-4 space-y-2.5">
              {unfollowersList.map((u) => (
                <div
                  key={u.id}
                  className={`p-3.5 rounded-xl border flex items-center justify-between transition-all ${
                    isDarkMode ? 'bg-[#0f1629] border-slate-800/80 hover:border-slate-700' : 'bg-slate-50 border-slate-200'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-slate-800 to-slate-700 flex items-center justify-center font-bold text-slate-300">
                      {u.username[0].toUpperCase()}
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-slate-100">@{u.username}</h4>
                      <p className="text-xs text-slate-400">{u.name} · {u.followersCount} followers</p>
                    </div>
                  </div>

                  <div className="text-right">
                    <span className="text-xs text-rose-400 font-medium block">
                      Unfollowed {u.unfollowedDate}
                    </span>
                    <span className="text-[10px] text-slate-500">
                      {u.youFollowThem ? 'You still follow them' : 'Not following back'}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Alert toggle footer */}
            <div className="p-3.5 border-t border-slate-800/60 bg-[#070b14] flex items-center justify-between text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-rose-400" />
                <span>Notify me immediately when someone unfollows</span>
              </div>
              <button
                onClick={() => setUnfollowAlertsEnabled(!unfollowAlertsEnabled)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors cursor-pointer ${
                  unfollowAlertsEnabled ? 'bg-rose-600' : 'bg-slate-800'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    unfollowAlertsEnabled ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 5. WHO DOESN'T FOLLOW ME BACK MODAL */}
      {activeModal === 'not_following_back' && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 animate-in fade-in duration-200">
          <div
            className={`w-full max-w-lg max-h-[90vh] rounded-2xl flex flex-col overflow-hidden shadow-2xl ${
              isDarkMode ? 'bg-[#0a0f1d] border border-slate-800' : 'bg-white border border-slate-200'
            }`}
          >
            {/* Header */}
            <div className="p-4 border-b border-slate-800/60 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-slate-800/60 border border-slate-700/50 flex items-center justify-center text-base select-none">
                  🙅‍♂️
                </div>
                <div>
                  <h3 className="font-semibold text-base">Who Doesn't Follow Me Back</h3>
                  <p className="text-xs text-slate-400">
                    @{currentTargetName} · {notFollowingBackList.filter(x => !x.isUnfollowed).length} non-reciprocal accounts
                  </p>
                </div>
              </div>
              <button
                onClick={() => setActiveModal(null)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Sub-navigation tabs & Search */}
            <div className="px-4 py-2.5 bg-slate-950/40 border-b border-slate-800/40 flex flex-col gap-2.5">
              <div className="flex gap-1.5">
                <button
                  onClick={() => setActiveModal('unfollowers')}
                  className="px-3 py-1 rounded-lg text-xs font-medium text-slate-400 hover:text-slate-200 hover:bg-slate-900 transition-colors"
                >
                  Unfollowed You (5)
                </button>
                <button
                  className="px-3 py-1 rounded-lg text-xs font-semibold bg-amber-600 text-white shadow-sm"
                >
                  Doesn't Follow Back ({notFollowingBackList.filter(x => !x.isUnfollowed).length})
                </button>
              </div>

              {/* Search bar */}
              <div className="relative">
                <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  value={nfbSearchQuery}
                  onChange={(e) => setNfbSearchQuery(e.target.value)}
                  placeholder="Filter non-followers by username..."
                  className="w-full pl-9 pr-3 py-1.5 text-xs rounded-lg bg-[#0f1629] border border-slate-800 text-slate-200 placeholder:text-slate-500 outline-none focus:border-amber-500"
                />
              </div>
            </div>

            {/* List of accounts not following back */}
            <div className="flex-1 overflow-y-auto p-4 space-y-2.5">
              {notFollowingBackList
                .filter((item) =>
                  nfbSearchQuery
                    ? item.username.toLowerCase().includes(nfbSearchQuery.toLowerCase()) ||
                      item.name.toLowerCase().includes(nfbSearchQuery.toLowerCase())
                    : true
                )
                .map((acc) => (
                  <div
                    key={acc.id}
                    className={`p-3.5 rounded-xl border flex items-center justify-between transition-all ${
                      acc.isUnfollowed
                        ? 'opacity-60 bg-[#0b0e17] border-slate-900'
                        : isDarkMode
                        ? 'bg-[#0f1629] border-slate-800/80 hover:border-amber-500/30'
                        : 'bg-slate-50 border-slate-200'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-amber-600/30 to-rose-600/30 border border-amber-500/20 flex items-center justify-center font-bold text-amber-300">
                        {acc.username[0].toUpperCase()}
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5">
                          <h4 className="text-sm font-semibold text-slate-100">@{acc.username}</h4>
                          {acc.verified && (
                            <span className="text-[10px] text-blue-400 font-bold">✓</span>
                          )}
                        </div>
                        <p className="text-xs text-slate-400">
                          {acc.name} · {acc.followersCount} followers
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleToggleUnfollow(acc.id)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                          acc.isUnfollowed
                            ? 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                            : 'bg-rose-600/20 hover:bg-rose-600 text-rose-300 hover:text-white border border-rose-500/30'
                        }`}
                      >
                        {acc.isUnfollowed ? 'Unfollowed ✓' : 'Unfollow'}
                      </button>
                    </div>
                  </div>
                ))}
            </div>

            {/* Bottom summary bar */}
            <div className="p-3.5 border-t border-slate-800/60 bg-[#070b14] flex items-center justify-between text-xs text-slate-400">
              <span>Clean up non-reciprocal accounts safely</span>
              <button
                onClick={() => {
                  setNotFollowingBackList(prev => prev.map(x => ({ ...x, isUnfollowed: true })));
                }}
                className="px-3 py-1.5 rounded-lg bg-amber-600 hover:bg-amber-500 text-white font-medium transition-colors"
              >
                Unfollow All
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 6. HIDE MY FOLLOWERS MODAL */}
      {activeModal === 'hide_followers' && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 animate-in fade-in duration-200">
          <div
            className={`w-full max-w-lg max-h-[90vh] rounded-2xl flex flex-col overflow-hidden shadow-2xl ${
              isDarkMode ? 'bg-[#0a0f1d] border border-slate-800' : 'bg-white border border-slate-200'
            }`}
          >
            {/* Header */}
            <div className="p-4 border-b border-slate-800/60 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-slate-800/60 border border-slate-700/50 flex items-center justify-center text-base select-none">
                  🔒
                </div>
                <div>
                  <h3 className="font-semibold text-base">Hide My Followers</h3>
                  <p className="text-xs text-slate-400">@{currentTargetName} · List cloaking & stealth shielding</p>
                </div>
              </div>
              <button
                onClick={() => setActiveModal(null)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Shield Status Banner */}
            <div className="p-3.5 bg-indigo-950/20 border-b border-indigo-900/30 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span className="text-slate-200 font-medium">Privacy Cloak: Enabled</span>
              </div>
              <span className="text-[11px] px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-medium">
                Active Protocol
              </span>
            </div>

            {/* Cloaking Settings Toggles */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {/* Option 1: Hide Followers List */}
              <div
                className={`p-3.5 rounded-xl border flex items-center justify-between transition-all ${
                  isDarkMode ? 'bg-[#0f1629] border-slate-800' : 'bg-slate-50 border-slate-200'
                }`}
              >
                <div className="pr-4">
                  <h4 className="text-sm font-semibold text-slate-100">Conceal Followers List</h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Hides your full followers list. Visitors will see: "Follower list is hidden by account owner"
                  </p>
                </div>
                <button
                  onClick={() => setHideFollowersPublic(!hideFollowersPublic)}
                  className={`relative inline-flex h-6 w-11 shrink-0 items-center rounded-full transition-colors cursor-pointer ${
                    hideFollowersPublic ? 'bg-indigo-600' : 'bg-slate-800'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      hideFollowersPublic ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>

              {/* Option 2: Hide Following List */}
              <div
                className={`p-3.5 rounded-xl border flex items-center justify-between transition-all ${
                  isDarkMode ? 'bg-[#0f1629] border-slate-800' : 'bg-slate-50 border-slate-200'
                }`}
              >
                <div className="pr-4">
                  <h4 className="text-sm font-semibold text-slate-100">Conceal Following List</h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Prevents mutual friends and outside profiles from checking accounts you follow
                  </p>
                </div>
                <button
                  onClick={() => setHideFollowingMutuals(!hideFollowingMutuals)}
                  className={`relative inline-flex h-6 w-11 shrink-0 items-center rounded-full transition-colors cursor-pointer ${
                    hideFollowingMutuals ? 'bg-indigo-600' : 'bg-slate-800'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      hideFollowingMutuals ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>

              {/* Option 3: Stealth Count Masking */}
              <div
                className={`p-3.5 rounded-xl border flex items-center justify-between transition-all ${
                  isDarkMode ? 'bg-[#0f1629] border-slate-800' : 'bg-slate-50 border-slate-200'
                }`}
              >
                <div className="pr-4">
                  <h4 className="text-sm font-semibold text-slate-100">Stealth Count Masking</h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Replaces exact numerical follower counts with "Hidden" or "~" on profile header
                  </p>
                </div>
                <button
                  onClick={() => setStealthCountMask(!stealthCountMask)}
                  className={`relative inline-flex h-6 w-11 shrink-0 items-center rounded-full transition-colors cursor-pointer ${
                    stealthCountMask ? 'bg-indigo-600' : 'bg-slate-800'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      stealthCountMask ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>

              {/* Option 4: Close Friends Only */}
              <div
                className={`p-3.5 rounded-xl border flex items-center justify-between transition-all ${
                  isDarkMode ? 'bg-[#0f1629] border-slate-800' : 'bg-slate-50 border-slate-200'
                }`}
              >
                <div className="pr-4">
                  <h4 className="text-sm font-semibold text-slate-100">Close Friends Network Only</h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Only users on your Close Friends green-list can see mutual connections
                  </p>
                </div>
                <button
                  onClick={() => setCloseFriendsOnly(!closeFriendsOnly)}
                  className={`relative inline-flex h-6 w-11 shrink-0 items-center rounded-full transition-colors cursor-pointer ${
                    closeFriendsOnly ? 'bg-indigo-600' : 'bg-slate-800'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      closeFriendsOnly ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>

              {/* Status Notice */}
              {hasAppliedCloaking && (
                <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/30 flex items-center gap-2 text-xs text-emerald-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Follower concealment applied to @{currentTargetName}. Changes are active.</span>
                </div>
              )}
            </div>

            {/* Bottom summary and Save */}
            <div className="p-3.5 border-t border-slate-800/60 bg-[#070b14] flex items-center justify-between text-xs text-slate-400">
              <span>Instant client cloaking enabled</span>
              <button
                onClick={() => {
                  setHasAppliedCloaking(true);
                  setTimeout(() => {
                    alert(`Privacy cloaking applied successfully for @${currentTargetName}! Followers list is now hidden.`);
                  }, 150);
                }}
                className="px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-medium transition-colors cursor-pointer shadow-sm"
              >
                Apply Cloaking
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 7. GHOST FOLLOWERS MODAL */}
      {activeModal === 'ghost_followers' && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 animate-in fade-in duration-200">
          <div
            className={`w-full max-w-lg max-h-[90vh] rounded-2xl flex flex-col overflow-hidden shadow-2xl ${
              isDarkMode ? 'bg-[#0a0f1d] border border-slate-800' : 'bg-white border border-slate-200'
            }`}
          >
            {/* Header */}
            <div className="p-4 border-b border-slate-800/60 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-slate-800/60 border border-slate-700/50 flex items-center justify-center text-base select-none">
                  👻
                </div>
                <div>
                  <h3 className="font-semibold text-base">Ghost Followers Detection</h3>
                  <p className="text-xs text-slate-400">
                    @{currentTargetName} · {ghostFollowersList.filter(x => !x.isRemoved).length} inactive accounts detected
                  </p>
                </div>
              </div>
              <button
                onClick={() => setActiveModal(null)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Metric pill bar */}
            <div className="p-3 bg-purple-950/20 border-b border-purple-900/30 flex items-center justify-around text-center text-xs">
              <div>
                <span className="block text-base font-bold text-rose-400">0.0%</span>
                <span className="text-[10px] text-slate-400">Engagement</span>
              </div>
              <div className="w-[1px] h-6 bg-slate-800" />
              <div>
                <span className="block text-base font-bold text-amber-400">-18%</span>
                <span className="text-[10px] text-slate-400">Feed reach penalty</span>
              </div>
              <div className="w-[1px] h-6 bg-slate-800" />
              <div>
                <span className="block text-base font-bold text-purple-400">140d</span>
                <span className="text-[10px] text-slate-400">Avg Inactivity</span>
              </div>
            </div>

            {/* Search */}
            <div className="px-4 py-2.5 bg-slate-950/40 border-b border-slate-800/40">
              <div className="relative">
                <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  value={ghostSearchQuery}
                  onChange={(e) => setGhostSearchQuery(e.target.value)}
                  placeholder="Search ghost followers by username..."
                  className="w-full pl-9 pr-3 py-1.5 text-xs rounded-lg bg-[#0f1629] border border-slate-800 text-slate-200 placeholder:text-slate-500 outline-none focus:border-purple-500"
                />
              </div>
            </div>

            {/* List */}
            <div className="flex-1 overflow-y-auto p-4 space-y-2.5">
              {ghostFollowersList
                .filter((item) =>
                  ghostSearchQuery
                    ? item.username.toLowerCase().includes(ghostSearchQuery.toLowerCase()) ||
                      item.name.toLowerCase().includes(ghostSearchQuery.toLowerCase())
                    : true
                )
                .map((g) => (
                  <div
                    key={g.id}
                    className={`p-3.5 rounded-xl border flex items-center justify-between transition-all ${
                      g.isRemoved
                        ? 'opacity-50 bg-[#0b0e17] border-slate-900'
                        : isDarkMode
                        ? 'bg-[#0f1629] border-slate-800/80 hover:border-slate-700'
                        : 'bg-slate-50 border-slate-200'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center font-bold text-slate-400">
                        {g.username[0].toUpperCase()}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="text-sm font-semibold text-slate-100">@{g.username}</h4>
                          <span className="text-[10px] px-1.5 py-0.5 rounded bg-rose-500/20 text-rose-400 font-medium">
                            {g.ghostScore}
                          </span>
                        </div>
                        <p className="text-xs text-slate-400 mt-0.5">
                          {g.inactiveTime} · {g.interactions}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleToggleRemoveGhost(g.id)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                          g.isRemoved
                            ? 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                            : 'bg-rose-600/20 hover:bg-rose-600 text-rose-300 hover:text-white border border-rose-500/30'
                        }`}
                      >
                        {g.isRemoved ? 'Removed ✓' : 'Remove Ghost'}
                      </button>
                    </div>
                  </div>
                ))}
            </div>

            {/* Bottom summary bar */}
            <div className="p-3.5 border-t border-slate-800/60 bg-[#070b14] flex items-center justify-between text-xs text-slate-400">
              <span>Cleaning ghosts restores healthy post engagement</span>
              <button
                onClick={() => {
                  setGhostFollowersList(prev => prev.map(x => ({ ...x, isRemoved: true })));
                }}
                className="px-3 py-1.5 rounded-lg bg-rose-600 hover:bg-rose-500 text-white font-medium transition-colors"
              >
                Clean All Ghosts
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 5. PRIVACY MODAL */}
      {activeModal === 'privacy' && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div
            className={`w-full max-w-md rounded-2xl p-5 shadow-2xl ${
              isDarkMode ? 'bg-[#0a0f1d] border border-slate-800' : 'bg-white border border-slate-200'
            }`}
          >
            <div className="flex items-center justify-between pb-3 border-b border-slate-800/60 mb-4">
              <div className="flex items-center gap-2">
                <Lock className="w-5 h-5 text-pink-400" />
                <h3 className="font-semibold text-base">Privacy & Encryption Policy</h3>
              </div>
              <button
                onClick={() => setActiveModal(null)}
                className="p-1 rounded-lg text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3 text-xs leading-relaxed text-slate-300">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <p>
                  <strong>Zero Credentials Requested:</strong> Instatrace never asks for your Instagram password, two-factor code, or private security keys.
                </p>
              </div>

              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <p>
                  <strong>Volatile In-Memory Session:</strong> All queries and cached watch/DM graph logs are held strictly in temporary client browser memory and wiped upon session close.
                </p>
              </div>

              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <p>
                  <strong>Public Graph Telemetry:</strong> Features inspect publicly broadcasted CDN metadata and delivery receipts to calculate activity metrics without unauthorized access.
                </p>
              </div>
            </div>

            <div className="mt-5 pt-4 border-t border-slate-800/60 flex justify-end">
              <button
                onClick={() => setActiveModal(null)}
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-pink-600 to-rose-600 text-white text-xs font-semibold"
              >
                I Understand
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
