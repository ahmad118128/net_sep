import { dateAndNumber } from '@src/helper/utils/dateUtils';
import { booleanIcon } from './utils';
import trashIcon from '@iconify-icons/ph/trash';
import notePencilIcon from '@iconify-icons/ph/note-pencil';

export function adminListTableData({ onChange }: any) {
	return [
		{
			id: '1',
			rowType: 'status',
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
			rowType: 'none',
			label: 'table.userName',
			type: 'username',
			function: false,
			style: 'px-3 w-2/12   ',
			size: '',
			scroll: '',
		},
		{
			id: '',
			rowType: 'status',
			label: 'table.email',
			type: 'email',
			function: false,
			style: 'px-3 w-2/12   ',
			size: '',
			scroll: '',
		},
		{
			id: '',
			rowType: 'status',
			label: 'table.firstNameLastName',
			type: ['first_name', 'last_name'],
			function: false,
			style: 'px-3 w-2/12   ',
			size: '',
			scroll: '',
		},
		{
			id: '',
			rowType: 'status',
			label: 'table.active',
			type: 'is_active',
			status: {
				load: 'CircleBg',
				key: 'is_active ',
				color: ['bg-green-600', 'bg-gray-400'],
			},

			function: false,
			style: 'px-3 w-2/12   ',
			size: '',
			scroll: '',
		},
		{
			id: '',
			rowType: 'status',
			label: 'table.metaAdmin',
			type: 'is_meta_admin',
			function: booleanIcon,
			style: 'px-3 w-2/12   ',
			size: '',
			scroll: '',
		},
		{
			id: '',
			rowType: 'status',
			label: 'table.dateOfCreated',
			type: 'created_at',
			dir: 'rtl',
			icon: false,
			function: dateAndNumber,
			style: ' w-2/12 break-words',
			size: '',
			scroll: '',
		},
		{
			id: '',
			rowType: 'status',
			label: 'table.lastLogin',
			type: 'last_login',
			dir: 'rtl',
			icon: false,
			function: dateAndNumber,
			style: ' w-2/12 break-words',
			size: '',
			scroll: '',
		},
	];
}
