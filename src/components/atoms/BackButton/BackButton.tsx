import { useNavigate } from 'react-router-dom';
import arrowLineLeft from '@iconify-icons/ph/arrow-line-left';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '@context/settings/languageContext';

import { BaseButton, IconButton } from '../BaseButton';

export type BackButtonProps = {
	withLabel?: boolean;
	onClick?: () => void;
	className?: string;
};

export function BackButton({ withLabel, onClick, className }: BackButtonProps) {
	const navigate = useNavigate();
	const { lang } = useLanguage();
	const { t } = useTranslation();

	const handleClick = () => {
		if (!onClick) {
			navigate(-1);
		} else {
			onClick();
		}
	};
	const directionConfig = {
		endIcon: lang === 'fa' ? arrowLineLeft : null,
		startIcon: lang === 'en' ? arrowLineLeft : null,
		onClick: handleClick,
		className: className,
	};

	return !withLabel ? (
		<IconButton
			onClick={handleClick}
			icon={arrowLineLeft}
			size="xl"
			type="button"
			color="teal"
			className={className}
		/>
	) : (
		<BaseButton label={t('global.pageBack')} {...directionConfig} />
	);
}
