import './clickable.css';

export interface IClickableProps {
  src: string,
  height?: string
  top?: string,
  left?: string,
  onClick?: () => void;
}

export function Clickable({ src, height = '50%', top = '0', left = '0', onClick }: IClickableProps) {
  return <img
    className='clickable'
    src={src}
    onClick={onClick}
    style={{ height, top, left }}
  />;
}
