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
        Post once, publish to many social media accounts. Manage Instagram, 
        Facebook, Google Business Profile, X, LinkedIn, and TikTok from one dashboard.
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
