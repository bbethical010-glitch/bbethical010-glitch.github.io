import React from 'react'
import { SOCIAL_CHANNELS, type SocialChannel } from '../constants/social'

function renderSocialIcon(id: string) {
  switch (id) {
    case 'instagram':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4.2" />
          <circle cx="17.3" cy="6.7" r="1.1" fill="currentColor" stroke="none" />
        </svg>
      )
    case 'x':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
          <path d="M4.5 4.5 L19.5 19.5 M19.5 4.5 L4.5 19.5" />
        </svg>
      )
    case 'threads':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M12 3c-4.5 0-7 2.7-7 7.2 0 4.6 2.6 10.8 8 10.8 3.6 0 5.8-2 5.8-4.6 0-2.3-1.6-3.6-4-3.6-2 0-3.3 1-3.3 2.4 0 .9.6 1.6 1.6 1.6" />
          <path d="M9.5 10.3c.4-1.6 1.8-2.3 3.3-2.3 2.3 0 3.7 1.5 3.7 4" />
        </svg>
      )
    case 'reddit':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <ellipse cx="12" cy="13.5" rx="8" ry="6.5" />
          <circle cx="8.8" cy="13" r="1.3" fill="currentColor" stroke="none" />
          <circle cx="15.2" cy="13" r="1.3" fill="currentColor" stroke="none" />
          <path d="M8.5 16.5c1 1 2.2 1.4 3.5 1.4s2.5-.4 3.5-1.4" strokeLinecap="round" />
          <path d="M12 7.5V4M12 4c-1.2 0-2 .8-2 1.8M12 4c1.2 0 2 .8 2 1.8" />
        </svg>
      )
    default:
      return null
  }
}

function handleBurstClick(e: React.MouseEvent<HTMLAnchorElement>) {
  const btn = e.currentTarget
  btn.classList.remove('bursting')
  // Force browser reflow to restart animation on rapid re-click
  void btn.offsetWidth
  btn.classList.add('bursting')
}

function handleAnimationEnd(e: React.AnimationEvent<HTMLAnchorElement>) {
  e.currentTarget.classList.remove('bursting')
}

/**
 * PLACEMENT 1 — FOOTER CONNECT STRIP
 * Sits between the 3-column links grid and the bottom copyright bar.
 */
export function FooterSocialStrip() {
  return (
    <div className="connect-strip">
      <div className="connect-label">
        <h4 className="font-anton uppercase tracking-wide">FOLLOW THE CHAOS</h4>
        <span className="font-oswald uppercase">✓ OFFICIAL, VERIFIED ACCOUNTS ONLY</span>
      </div>
      <div className="chaos-row">
        {SOCIAL_CHANNELS.map((channel: SocialChannel) => (
          <div key={channel.id} className="chaos-unit">
            <a
              className="chaos-btn"
              style={{ '--accent': channel.accent } as React.CSSProperties}
              href={channel.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={channel.ariaLabel}
              data-cursor
              onClick={handleBurstClick}
              onAnimationEnd={handleAnimationEnd}
            >
              <span className="verified-dot" aria-hidden="true">✓</span>
              {renderSocialIcon(channel.id)}
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

/**
 * PLACEMENT 2 — ABOUT / PRESS KIT OFFICIAL CHANNELS GRID
 * Card row placed where the existing "For press enquiries..." line sits.
 */
export function AboutOfficialChannels() {
  return (
    <div className="border-t border-purple/20 pt-8 my-8">
      <h3 className="section-heading font-anton text-2xl md:text-3xl uppercase mb-1">
        OFFICIAL CHANNELS
      </h3>
      <p className="section-sub font-oswald text-sm text-muted mb-6">
        The only verified accounts for Meme Capsule. Anything else using this name is unaffiliated.
      </p>

      <div className="channels-grid">
        {SOCIAL_CHANNELS.map((channel: SocialChannel) => (
          <a
            key={channel.id}
            className="channel-card"
            style={{ '--accent': channel.accent } as React.CSSProperties}
            href={channel.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={channel.ariaLabel}
            data-cursor
            onClick={handleBurstClick}
            onAnimationEnd={handleAnimationEnd}
          >
            {renderSocialIcon(channel.id)}
            <div className="platform font-oswald text-xs uppercase text-muted tracking-wider mb-1">
              {channel.platform}
            </div>
            <div className="handle font-oswald font-semibold text-sm text-text">
              {channel.handle}
            </div>
            <div className="verified-tag font-oswald font-bold text-[10px] tracking-wider uppercase">
              ✓ VERIFIED
            </div>
          </a>
        ))}
      </div>

      <p className="press-note font-oswald text-sm text-muted mt-6">
        For press enquiries, review copies, or collaborations:{' '}
        <a
          href="mailto:support@memecapsule.wtf"
          className="text-purple hover:text-gold transition-colors underline underline-offset-4"
          data-cursor
        >
          support@memecapsule.wtf
        </a>
      </p>
    </div>
  )
}
