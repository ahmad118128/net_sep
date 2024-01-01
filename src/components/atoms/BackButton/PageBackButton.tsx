import ToolTip from '../Tooltip';
import { BackButton, BackButtonProps } from './BackButton';
import { useTranslation } from 'react-i18next';

export function PageBackButton({ withLabel, onClick }: BackButtonProps) {
	const { t } = useTranslation();
	return (
		<div className="flex justify-end mb-4">
			{!withLabel ? (
				<ToolTip tooltip={t('global.pageBack')} position="right">
					<BackButton />
				</ToolTip>
			) : (
				<BackButton withLabel={withLabel} onClick={onClick} />
			)}
		</div>
	);
}
