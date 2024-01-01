import moreIcon from '@iconify-icons/ph/dots-three-outline-fill';
import { ROUTES_PATH } from '@src/routes/routesConstants';
import { dateAndNumber } from '@src/helper/utils/dateUtils';
import { UserScanCount } from './UsersDaAsList/UserDaAsCard/UserScanCount';
export function monitoringTableData() {
	return [
		{
			label: 'table.observeUserBehavior',
			type: 'action',
			actions: [
				{
					action: ROUTES_PATH.monitoring,
					icon: moreIcon,
					color: 'neutralNoBg',
					style: '',
				},
			],
			component: '',
			function: false,
			style: 'px-3 w-2/12   ',
			size: '',
			scroll: '',
		},
		{
			label: 'table.nameOfTheUser',
			type: 'email',
			component: '',
			function: false,
			style: 'px-3 w-2/12   ',
			size: '',
			scroll: '',
		},
		{
			label: 'table.dateOfCreated',
			dir: 'rtl',
			type: 'created_at',
			component: '',
			function: dateAndNumber,
			style: 'px-3 w-2/12   ',
			size: '',
			scroll: '',
		},
		{
			label: 'table.numberOfScans',
			type: 'component',
			component: (props: any) => <UserScanCount email={props.item.email} />,
			function: false,
			style: 'px-3 w-2/12   ',
			size: '',
			scroll: '',
		},

		{
			id: '',
			label: 'table.userStatus',
			type: 'is_running',
			status: {
				load: 'CircleBg',
				key: 'is_running',
				color: ['bg-green-600', 'bg-gray-400'],
			},
		},
	];
}
