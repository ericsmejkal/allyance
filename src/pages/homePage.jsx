import React from 'react'
import MetaTags from 'react-meta-tags'
import metaImage from '../assets/images/allyance__meta-image--landingpage.jpg'

import { Mission } from '../molecules/mission'
import { LargeHero } from '../organisms/hero'
import { CaseFeed } from '../organisms/caseFeed'

function HomePage(props) {
  return (
    <main className="atomic-page">
      <MetaTags>
        <title>allyance – strength in numbers.</title>
        <meta
          name="description"
          content="We need your help to develop this platform - to hold the system accountable for the world's ongoing injustices. If you would like to join the fight, sign up to see how you can help."
        />
        <meta property="og:title" content="allyance – strength in numbers." />
        <meta property="og:image" content={metaImage} />
      </MetaTags>
      <LargeHero />
      <Mission />
      <CaseFeed page="home" />
    </main>
  )
}

export default HomePage
