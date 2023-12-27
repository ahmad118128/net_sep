import { persianDateAndNumber } from '@src/helper/utils/dateUtils';
import { booleanIcon } from './utils';
import trashIcon from '@iconify-icons/ph/trash';
import notePencilIcon from '@iconify-icons/ph/note-pencil';

export function adminListTableData({ onChange }: any) {
	return [
		{
			id: '1',
			label: '',
			type: 'action',
			actions: [
				{
					action: 'delete',
					icon: trashIcon,
					color: 'redNoBg',
					style: '',
				},
				{
					action: 'edit',
					icon: notePencilIcon,
					color: 'neutralNoBg',
					style: '',
				},
			],
			style: 'px-3 w-2/12   ',
			size: '',
			scroll: '',
		},
		{
			id: '',
			label: 'table.userName',
			type: 'username',
			function: false,
			style: 'px-3 w-2/12   ',
			size: '',
			scroll: '',
		},
		{
			id: '',
			label: 'table.email',
			type: 'email',
			function: false,
			style: 'px-3 w-2/12   ',
			size: '',
			scroll: '',
		},
		{
			id: '',
			label: 'table.firstNameLastName',
			type: ['first_name', 'last_name'],
			function: false,
			style: 'px-3 w-2/12   ',
			size: '',
			scroll: '',
		},
		{
			id: '',
			label: 'table.active',
			type: 'is_active',
			function: false,
			style: 'px-3 w-2/12   ',
			status: 'is_active',
			size: '',
			scroll: '',
		},
		{
			id: '',
			label: 'table.metaAdmin',
			type: 'is_meta_admin',
			function: booleanIcon,
			style: 'px-3 w-2/12   ',
			size: '',
			scroll: '',
		},
		{
			id: '',
			label: 'table.dateOfCreated',
			type: 'created_at',
			dir: 'rtl',
			icon: false,
			function: persianDateAndNumber,
			style: ' w-2/12 break-words',
			size: '',
			scroll: '',
		},
		{
			id: '',
			label: 'table.lastLogin',
			type: 'last_login',
			dir: 'rtl',
			icon: false,
			function: persianDateAndNumber,
			style: ' w-2/12 break-words',
			size: '',
			scroll: '',
		},
	];
}
