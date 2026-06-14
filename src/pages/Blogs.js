import React, { memo } from 'react';
import { AnimatedSection } from '../components';
import { YOUTUBE_SERIES, SOCIAL_LINKS, COLORS } from '../utils/constants';

/* ── YouTube Embed with responsive wrapper ── */
const YouTubeEmbed = memo(({ url, title }) => (
  <div
    style={{
      position: 'relative',
      paddingBottom: '56.25%',
      height: 0,
      overflow: 'hidden',
      borderRadius: 'var(--border-radius-md)',
      background: '#000',
    }}
  >
    <iframe
      src={url}
      title={title}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        border: 'none',
      }}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
      loading="lazy"
    />
  </div>
));
YouTubeEmbed.displayName = 'YouTubeEmbed';

/* ── Topic Tags ── */
const TopicTags = memo(({ topics, color }) => (
  <div
    style={{
      display: 'flex',
      flexWrap: 'wrap',
      gap: 8,
      marginBottom: 20,
    }}
  >
    <span
      className="label"
      style={{
        color: color,
        fontSize: 11,
        marginRight: 4,
        alignSelf: 'center',
      }}
    >
      Topics:
    </span>
    {topics.map((topic) => (
      <span
        key={topic}
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: 12,
          fontWeight: 600,
          color: color,
          background: `${color}12`,
          padding: '4px 12px',
          borderRadius: 20,
        }}
      >
        {topic}
      </span>
    ))}
  </div>
));
TopicTags.displayName = 'TopicTags';

/* ── Social Icon SVGs ── */
const SocialIcon = ({ type, size = 20 }) => {
  const icons = {
    linkedin: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    youtube: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
    instagram: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678a6.162 6.162 0 100 12.324 6.162 6.162 0 100-12.324zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405a1.441 1.441 0 11-2.88 0 1.441 1.441 0 012.88 0z" />
      </svg>
    ),
  };
  return icons[type] || null;
};

/* ── Main Blogs Page ── */
const BlogsPage = memo(() => (
  <main id="main-content" role="main">

    {/* ── Hero Header ── */}
    <section
      style={{
        paddingTop: 140,
        paddingBottom: 80,
        background: 'linear-gradient(180deg, var(--color-cream) 0%, var(--color-white) 100%)',
        textAlign: 'center',
      }}
    >
      <div className="container">
        <AnimatedSection>
          <h1 className="heading-xl" style={{ marginBottom: 16 }}>
            Insights &{' '}
            <span style={{ color: COLORS.electric }}>Stories</span>
          </h1>
          <p className="body-lg" style={{ maxWidth: 500, margin: '0 auto' }}>
            Learn from experts, innovators, and entrepreneurs
          </p>
        </AnimatedSection>
      </div>
    </section>

    {/* ── YouTube Series ── */}
    <section
      className="section-padding"
      aria-labelledby="youtube-heading"
      style={{ background: 'var(--color-white)' }}
    >
      <div className="container">
        <AnimatedSection>
          <h2
            id="youtube-heading"
            className="heading-lg"
            style={{ textAlign: 'center', marginBottom: 72 }}
          >
            YouTube{' '}
            <span style={{ color: COLORS.electric }}>Series</span>
          </h2>
        </AnimatedSection>

        {YOUTUBE_SERIES.map((series, i) => (
          <AnimatedSection key={series.title} delay={0.1}>
            <article
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 'clamp(32px, 5vw, 64px)',
                alignItems: 'center',
                marginBottom: i < YOUTUBE_SERIES.length - 1 ? 80 : 0,
                paddingBottom: i < YOUTUBE_SERIES.length - 1 ? 80 : 0,
                borderBottom: i < YOUTUBE_SERIES.length - 1 ? '1px solid var(--color-light-gray)' : 'none',
              }}
              className="blog-series-row"
            >
              {/* Text — alternates sides */}
              <div style={{ order: i % 2 === 0 ? 1 : 2 }}>
                <h3 className="heading-md" style={{ marginBottom: 16 }}>
                  {series.title}
                </h3>
                <p className="body-sm" style={{ marginBottom: 24, lineHeight: 1.75 }}>
                  {series.desc}
                </p>
                <TopicTags topics={series.topics} color={series.color} />
                <a
                  href={series.embedUrl.replace('/embed/videoseries?list=', '/playlist?list=')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  style={{
                    padding: '12px 24px',
                    fontSize: 14,
                    gap: 8,
                  }}
                >
                  Watch Playlist
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d="M3 11L11 3M11 3H5M11 3V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>

              {/* Video embed */}
              <div style={{ order: i % 2 === 0 ? 2 : 1 }}>
                <YouTubeEmbed url={series.embedUrl} title={series.title} />
              </div>
            </article>
          </AnimatedSection>
        ))}
      </div>
    </section>

    {/* ── Latest Updates (LinkedIn) ── */}
    <section
      className="section-padding"
      aria-labelledby="updates-heading"
      style={{ background: 'var(--color-cream)', textAlign: 'center' }}
    >
      <div className="container" style={{ maxWidth: 640 }}>
        <AnimatedSection>
          <h2 id="updates-heading" className="heading-lg" style={{ marginBottom: 16 }}>
            Latest{' '}
            <span style={{ color: COLORS.mint }}>Updates</span>
          </h2>
          <p className="body-md" style={{ marginBottom: 40 }}>
            Follow our journey and stay updated with our latest insights, events, and community highlights on LinkedIn.
          </p>
          <a
            href={SOCIAL_LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            style={{ padding: '16px 36px', fontSize: 16, gap: 10 }}
          >
            View LinkedIn Posts
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M3 11L11 3M11 3H5M11 3V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </AnimatedSection>
      </div>
    </section>

    {/* ── Stay Connected ── */}
    <section
      className="section-padding"
      aria-labelledby="connected-heading"
      style={{ background: 'var(--color-white)', textAlign: 'center' }}
    >
      <div className="container" style={{ maxWidth: 560 }}>
        <AnimatedSection>
          <h2 id="connected-heading" className="heading-md" style={{ marginBottom: 32 }}>
            Stay Connected
          </h2>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: 20,
              flexWrap: 'wrap',
            }}
          >
            {[
              { type: 'linkedin', label: 'LinkedIn', url: SOCIAL_LINKS.linkedin, bg: '#0A66C2' },
              { type: 'youtube', label: 'YouTube', url: SOCIAL_LINKS.youtube, bg: '#FF0000' },
              { type: 'instagram', label: 'Instagram', url: SOCIAL_LINKS.instagram, bg: '#E4405F' },
            ].map((social) => (
              <a
                key={social.type}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Follow InnoMission on ${social.label}`}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 10,
                  padding: '14px 28px',
                  borderRadius: 'var(--border-radius-md)',
                  background: social.bg,
                  color: '#FFF',
                  fontFamily: 'var(--font-body)',
                  fontWeight: 600,
                  fontSize: 15,
                  textDecoration: 'none',
                  transition: 'transform var(--duration-normal) var(--ease-out-expo), box-shadow var(--duration-normal) var(--ease-out-expo)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = '0 12px 28px rgba(0,0,0,0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <SocialIcon type={social.type} size={18} />
                {social.label}
              </a>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  </main>
));

BlogsPage.displayName = 'BlogsPage';

export default BlogsPage;
