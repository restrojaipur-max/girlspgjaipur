export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  imageAlt: string;
  category: string;
  readTime: string;
  date: string;
  tips: string[];
  emoji: string;
  author: string;
  authorRole: string;
  content: BlogSection[];
  relatedSlugs: string[];
  keywords: string[];
}

export interface BlogSection {
  type: 'paragraph' | 'heading' | 'list' | 'tip';
  text?: string;
  items?: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'diy-room-decor-budget-pg',
    title: 'DIY Room Decor Ideas on a Budget for PG Living',
    excerpt:
      "Transform your PG room into a cozy, Instagram-worthy space without breaking the bank. From fairy lights to wall art and clever storage hacks — here's everything you need.",
    image: 'https://images.unsplash.com/photo-1596712346434-8cfc652be14a',
    imageAlt: 'Cozy room decorated with fairy lights, plants, and wall art on a budget',
    category: 'Room Decor',
    readTime: '5 min read',
    date: 'Mar 20, 2026',
    tips: ['Fairy lights', 'Wall art prints', 'Indoor plants', 'Storage hacks'],
    emoji: '✨',
    author: 'Priya Sharma',
    authorRole: 'Interior Enthusiast & PG Resident',
    keywords: ['PG room decor', 'budget room decoration', 'DIY room ideas', 'PG living tips', 'Jaipur PG'],
    relatedSlugs: ['make-pg-feel-like-home'],
    content: [
      {
        type: 'paragraph',
        text: "Moving into a PG can feel a little impersonal at first — plain walls, basic furniture, and a room that doesn't quite feel like yours. But with a little creativity and a small budget, you can transform your PG room into a cozy, Instagram-worthy space that truly reflects your personality.",
      },
      {
        type: 'heading',
        text: '1. Fairy Lights — The Instant Mood Maker',
      },
      {
        type: 'paragraph',
        text: 'Fairy lights are the single best investment for any PG room. A set of warm white LED fairy lights draped along the headboard, around a mirror, or across the ceiling instantly adds warmth and a dreamy glow. They\'re affordable (₹200–₹500 on Amazon), use minimal electricity, and make your room look 10x cozier.',
      },
      {
        type: 'tip',
        text: '💡 Pro Tip: Use command strips to hang fairy lights without damaging the walls — perfect for PG rooms where you can\'t drill holes.',
      },
      {
        type: 'heading',
        text: '2. Wall Art Prints — Personality Without Permanent Damage',
      },
      {
        type: 'paragraph',
        text: 'Blank walls are a missed opportunity. Download and print aesthetic quotes, botanical illustrations, or travel maps from free sites like Unsplash or Pinterest. Frame them in simple ₹100 frames from Daiso or local stationery stores. Arrange them in a gallery wall above your desk or bed for an instant personality boost.',
      },
      {
        type: 'list',
        items: [
          'Botanical prints (monstera, eucalyptus)',
          'Motivational quotes in minimalist fonts',
          'City maps of your hometown or dream destination',
          'Polaroid-style photo prints of your memories',
          'Abstract watercolor prints',
        ],
      },
      {
        type: 'heading',
        text: '3. Indoor Plants — Life and Color on a Budget',
      },
      {
        type: 'paragraph',
        text: "Plants are the easiest way to add life to a room. Even if you're not a plant person, there are varieties that practically take care of themselves. Money plants, succulents, and snake plants are perfect for PG rooms — they need minimal sunlight and water, and they purify the air too.",
      },
      {
        type: 'list',
        items: [
          'Money plant in a glass jar of water (₹20 from any nursery)',
          'Succulents in terracotta pots (₹50–₹100)',
          'Snake plant — thrives in low light (₹150–₹200)',
          'Bamboo in a vase — brings good luck!',
        ],
      },
      {
        type: 'heading',
        text: '4. Clever Storage Hacks — Organized and Aesthetic',
      },
      {
        type: 'paragraph',
        text: 'PG rooms are often small, so smart storage is key. Use over-door organizers for shoes and accessories, under-bed storage boxes for seasonal clothes, and wall-mounted hooks for bags and jackets. Aesthetic storage doesn\'t have to be expensive — wicker baskets, fabric bins, and wooden crates from local markets work beautifully.',
      },
      {
        type: 'tip',
        text: '💡 Pro Tip: A pegboard above your desk is a game-changer — hang stationery, headphones, small plants, and even a small mirror on it.',
      },
      {
        type: 'heading',
        text: '5. Textiles — The Quickest Room Transformer',
      },
      {
        type: 'paragraph',
        text: "Don't underestimate the power of a good throw blanket, a couple of cushions, or a bedside rug. These soft furnishings add texture, warmth, and color to any room. Look for them at Sarojini Nagar, local Jaipur markets, or budget stores like Miniso and Home Centre.",
      },
      {
        type: 'paragraph',
        text: "Remember, your PG room is your personal sanctuary — a place to recharge, study, and be yourself. Even small changes can make a huge difference to how you feel in your space. Start with one corner, one wall, or one shelf, and build from there. Happy decorating! ✨",
      },
    ],
  },
  {
    slug: 'make-pg-feel-like-home',
    title: 'How to Make Your PG Feel Like Home',
    excerpt:
      "Moving away from home can feel overwhelming. Here are practical tips to add personal touches, build a daily routine, and create a comfort zone that truly feels like yours.",
    image: '/assets/images/blog2.png',
    imageAlt: 'Warm personal touches in a PG room with photos, plants and cozy textiles',
    category: 'Lifestyle',
    readTime: '4 min read',
    date: 'Mar 12, 2026',
    tips: ['Personal touches', 'Routine building', 'Comfort essentials', 'Community bonding'],
    emoji: '🏡',
    author: 'Ananya Verma',
    authorRole: 'Lifestyle Writer & PG Resident',
    keywords: ['PG life tips', 'make PG feel like home', 'girls PG Jaipur', 'PG living comfort', 'student accommodation Jaipur'],
    relatedSlugs: ['diy-room-decor-budget-pg'],
    content: [
      {
        type: 'paragraph',
        text: "Moving away from home for the first time — whether for college or work — is one of the most exciting yet emotionally challenging transitions in life. Your PG room might feel unfamiliar and impersonal at first, but with a few intentional choices, you can turn it into a space that genuinely feels like home.",
      },
      {
        type: 'heading',
        text: '1. Bring a Piece of Home With You',
      },
      {
        type: 'paragraph',
        text: "The fastest way to make a new space feel familiar is to fill it with things that remind you of home. Pack a few framed photos of your family and friends, your favorite mug, a small idol or religious item if that's important to you, and maybe a soft toy or blanket from your childhood room. These small anchors of familiarity can make a huge difference on tough days.",
      },
      {
        type: 'heading',
        text: '2. Build a Daily Routine',
      },
      {
        type: 'paragraph',
        text: "Routine is the foundation of comfort. When everything feels new and uncertain, a predictable daily schedule gives you a sense of control and normalcy. Wake up at the same time, have a morning ritual (chai, journaling, a short walk), and wind down with a consistent evening routine. Over time, these habits will make your PG feel like a familiar, safe space.",
      },
      {
        type: 'list',
        items: [
          'Morning: Wake up, stretch, have chai or coffee',
          'Daytime: Study/work, take breaks, eat meals at regular times',
          'Evening: Wind down, connect with family, light reading',
          'Night: Consistent sleep time for better rest',
        ],
      },
      {
        type: 'heading',
        text: '3. Create Your Comfort Corner',
      },
      {
        type: 'paragraph',
        text: "Designate one corner of your room as your personal comfort zone — a place where you go to relax, read, or just breathe. This could be your bed with extra cushions, a small chair by the window, or even just a floor cushion with good lighting. Having a dedicated 'me space' within your room makes it feel more intentional and personal.",
      },
      {
        type: 'tip',
        text: '💡 Pro Tip: Add a small scented candle or a reed diffuser to your comfort corner. Familiar scents are incredibly powerful in triggering feelings of comfort and home.',
      },
      {
        type: 'heading',
        text: '4. Connect With Your Fellow Residents',
      },
      {
        type: 'paragraph',
        text: "Home isn't just a place — it's also the people in it. Take the initiative to introduce yourself to your fellow PG residents. Share a meal, watch a show together, or simply chat over chai in the common area. Building even one or two genuine friendships in your PG can completely transform your experience from lonely to lovely.",
      },
      {
        type: 'heading',
        text: '5. Personalize Your Space Within the Rules',
      },
      {
        type: 'paragraph',
        text: "Most PGs have rules about what you can and can't do to the room. Work within those boundaries creatively. Use removable wall stickers, command strips for hanging things, and freestanding furniture or decor items. You'd be surprised how much personality you can add without a single nail in the wall.",
      },
      {
        type: 'paragraph',
        text: "Remember, feeling at home is a process, not an overnight transformation. Be patient with yourself, give yourself time to adjust, and know that it gets better every week. Before you know it, you'll be the one welcoming new residents and helping them feel at home too. 🏡",
      },
    ],
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getRelatedPosts(slug: string): BlogPost[] {
  const post = getBlogPostBySlug(slug);
  if (!post) return [];
  return blogPosts.filter((p) => post.relatedSlugs.includes(p.slug));
}
