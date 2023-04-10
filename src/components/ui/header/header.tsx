import './header.css';

type HeaderProps = {
  title: string;
};

export function Header({ title }: HeaderProps) {
  return <h1 className='header'>{title}</h1>;
}
