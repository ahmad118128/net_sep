import { IconButton } from '@ui/atoms/BaseButton';
import notePencilIcon from '@iconify-icons/ph/note-pencil';
import trashIcon from '@iconify-icons/ph/trash';

export function UserAdminAction({ onClickActions, user }) {
	return (
		<div className="flex">
			<IconButton icon={trashIcon} color="redNoBg" onClick={() => onClickActions('delete', user)} />
			<IconButton
				icon={notePencilIcon}
				color="neutralNoBg"
				onClick={() => onClickActions('edit', user)}
			/>
		</div>
	);
}
