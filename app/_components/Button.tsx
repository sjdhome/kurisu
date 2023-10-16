import style from './Button.module.css';

export default function Button({children} : {children: React.ReactNode}) {
	return (
		<span className={style.button}>{children}</span>
	)
}