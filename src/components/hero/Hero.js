import config from '../../config.json';

import styles from './Hero.module.scss';

import {ContributePlaylist} from '../contribute/ContributePlaylist';
import {SecondaryButton} from '../button/SecondaryButton';
import {Social} from '../social/Social';

export const Hero = ({children}) => {
  const scrollTo = () => {
    const main = document.querySelector('#main');

    if (!main) {
      return;
    }

    main.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <article className={`w-full relative ${styles.height} bg-black`}>
      {children}

      <div className={`flex justify-center items-center flex-col mt-8 ${styles.position}`}>
        <div className="mx-4 text-center">
          <h1 className={`font-bold text-3xl xs:text-4xl sm:text-6xl lg:text-8xl mb-2 sm:mb-4 text-white tracking-wide ${styles.title}`}>
            {config.title}
          </h1>
          <p className="sm:text-2xl lg:text-3xl mb-8 text-white">{config.description}</p>
          <div className="flex flex-col items-center sm:flex-row sm:justify-center">
            <ContributePlaylist label="Share your playlist"></ContributePlaylist>
            <SecondaryButton action={scrollTo} color="bg-black bg-opacity-80 text-white hover:text-black hover:bg-purple-400">
              Get playlists
            </SecondaryButton>
          </div>
        </div>

        <Social></Social>
      </div>
    </article>
  );
};
