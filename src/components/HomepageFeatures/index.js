import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Seamless Integration',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Our API is crafted to ensure a smooth integration with your existing systems, 
        enabling you to send and receive order and fulfillment data with minimal setup. 
        Leverage simple, clear API endpoints to enhance your operational efficiency and accuracy.
      </>
    ),
  },
  {
    title: 'Real-Time Updates',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Stay updated with real-time notifications about order shipments and status changes.
        Our API provides detailed fulfillment updates, ensuring that you always have the most 
        current information at your fingertips. This helps in managing customer expectations and 
        improves service reliability.
      </>
    ),
  },
  {
    title: 'Robust Security',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Security is a top priority. Our API employs robust security measures to protect 
        your data and ensure the integrity and confidentiality of your transactions. 
        Safeguard your critical business data with state-of-the-art encryption and compliance standards.
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
