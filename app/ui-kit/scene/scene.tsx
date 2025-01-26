import { useCallback, type PropsWithChildren } from 'react';

import './scene.css';
import { Clickable } from '../clickable/clickable';

import goBackImage from '../../assets/go-back.png';

export interface ISceneProps extends PropsWithChildren {
  backgroundImage: string,
}

export function Scene({ backgroundImage, children }: ISceneProps) {
  const goBack = useCallback(() => {
    history.back();
  }, []);
  return <div id='scene'>
    <div id='black-overlay' />
    {<Clickable src={goBackImage} height='8%' top='2%' left='2%' onClick={goBack} />}
    <img id='background' src={backgroundImage} />
    {children}
  </div>;
}
