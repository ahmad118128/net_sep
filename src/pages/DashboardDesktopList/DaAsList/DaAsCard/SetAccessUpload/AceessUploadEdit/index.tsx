import { IDaAs } from '@src/services/users/types';
import { IconButton } from '@ui/atoms/BaseButton';
import { SetAccessUpload } from '..';
import { OnClickActionsType } from '../../types';
import trashIcon from '@iconify-icons/ph/trash';

type PropsType = {
	user: IDaAs;
	onClickActions?: OnClickActionsType;
};
export function AccessUplaodEdit({ onClickActions, user }: PropsType) {
	return (
		<div className="flex">
			<div className="w-2/12 flex justify-center items-center">
				<IconButton
					icon={trashIcon}
					color="redNoBg"
					onClick={() => onClickActions('delete', user as IDaAs)}
				/>
			</div>

			<div className="w-2/12 text-center break-words">
				<SetAccessUpload daas={user as IDaAs} onClickActions={onClickActions} />
			</div>
		</div>
	);
}
