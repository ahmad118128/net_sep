import { IDaAs } from '@src/services/users/types';
import { IconButton } from '@ui/atoms/BaseButton';

export function index({ onClickActions }) {
	return (
		<>
			<div className="w-1/12 flex justify-center items-center">
				{!isHeader && onClickActions && (
					<IconButton
						icon={trashIcon}
						color="redNoBg"
						onClick={() => onClickActions('delete', daas as IDaAs)}
					/>
				)}
			</div>

			<div className="w-1/12 text-center break-words">
				{!isHeader && onClickActions ? (
					<SetAccessUpload daas={daas as IDaAs} onClickActions={onClickActions} />
				) : (
					<Typography size="body3">{daasConfig.can_upload_file}</Typography>
				)}
			</div>
		</>
	);
}
