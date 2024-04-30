import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Seamless Integration',
    Svg: require('@site/static/img/api-interface.svg').default,
    description: (
      <>
        Our API is crafted to ensure a smooth integration with your existing systems, 
        enabling you to send and receive order and fulfillment data with minimal setup. 
      </>
    ),
  },
  {
    title: 'Real-Time Updates',
    Svg: require('@site/static/img/mobile-app.svg').default,
    description: (
      <>
        Stay updated with real-time notifications about orders.
        Our API provides customer with detailed fulfillment updates, ensuring customer expectations are met and 
        improves service reliability.
      </>
    ),
  },
  {
    title: 'Robust Security',
    Svg: require('@site/static/img/safe-and-stable.svg').default,
    description: (
      <>
        Security is a top priority. Our API employs robust security measures to protect 
        your data and ensure the integrity and confidentiality of your transactions. 
      </>
    ),
  },
];


function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
