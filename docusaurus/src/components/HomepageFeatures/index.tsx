import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  emoji: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Multi-Platform Publishing',
    emoji: '📱',
    description: (
      <>
        Post once, publish to many client social media accounts. Manage Instagram, 
        Facebook, Google Business, X (Twitter), LinkedIn, TikTok, and YouTube from one dashboard.
      </>
    ),
  },
  {
    title: 'AI-Powered Content Creation',
    emoji: '🤖',
    description: (
      <>
        Use AI to easily generate content and always stay on-brand. Create engaging 
        posts, captions, and visual content that resonates with your audience.
      </>
    ),
  },
  {
    title: 'Audience Growth Tools',
    emoji: '📈',
    description: (
      <>
        Help clients grow their audience and build fans. Boost client sales with 
        easy-to-use shoppable bios and engagement features.
      </>
    ),
  },
  {
    title: 'ROI Reporting',
    emoji: '📊',
    description: (
      <>
        Show ROI by reporting on key social media metrics. Track performance, 
        engagement, and conversion data to demonstrate value to clients.
      </>
    ),
  },
  {
    title: 'Multi-Location Management',
    emoji: '🏢',
    description: (
      <>
        Perfect for franchises and multi-location businesses. Post to any number 
        of locations using dynamic content and easy customization.
      </>
    ),
  },
  {
    title: 'White-Label Solution',
    emoji: '🎨',
    description: (
      <>
        Resell social media management software under your own brand. Build client 
        trust with a platform branded as your own while reselling additional products.
      </>
    ),
  },
];

function Feature({title, emoji, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <div className={styles.featureEmoji}>{emoji}</div>
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
