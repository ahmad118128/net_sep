import trashIcon from '@iconify-icons/ph/trash';
import { SetAccessTime } from '@src/pages/DashboardDesktopList/DaAsList/DaAsCard/SetAccessTime';
import { AccessUplaodEdit } from './DaAsCard/SetAccessUpload/AceessUploadEdit';
import { DaAsCard } from './DaAsCard';
import { LoadingSpinner } from '@ui/molecules/Loading';
import { NoResult } from '@ui/molecules/NoResult';
import gear from '@iconify-icons/ph/gear';

export function desktopTableData({ onChange, t }: any) {
	return [
		{
			id: '',
			label: 'table.accessSettingsTime',
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
					icon: gear,
					color: 'neutralNoBg',
					style: '',
				},
			],
			function: false,
			style: 'px-3 w-3/12 ',
			size: '',
			scroll: '',
		},
		{
			id: '',
			label: 'table.accessSettingsTime',
			type: 'component',
			component: (props: any) => (
				<SetAccessTime
					id={props.item.id as string}
					onClickActions={onChange}
					timeLimitValue={props.item.daas_configs.time_limit_value_in_hour || 0}
					timeLimitDuration={props.item.daas_configs.time_limit_duration}
				/>
			),

			function: false,
			style: 'px-3 w-3/12   ',
			size: '',
			scroll: '',
		},
		{
			id: '',
			label: 'table.usedTime',
			type: 'usage_in_minute',
			dir: 'rtl',
			component: '',
			function: false,
			style: 'px-3 w-2/12   ',
			size: '',
			scroll: '',
		},
		{
			id: '',
			label: 'table.desktop',
			type: '',
			component: '',
			function: false,
			style: 'px-3 w-2/12   ',
			size: '',
			scroll: '',
		},
		{
			id: '',
			label: 'table.desktopV',
			type: '',
			component: '',
			function: false,
			style: 'px-3 w-2/12   ',
			size: '',
			scroll: '',
		},
		{
			id: '',
			label: 'table.status',
			type: '',
			component: '',
			function: false,
			style: 'px-3 w-2/12   ',
			size: '',
			scroll: '',
		},
		{
			id: '',
			label: 'table.defaultSetting',
			type: '',
			component: '',
			function: false,
			style: 'px-3 w-2/12   ',
			size: '',
			scroll: '',
		},
		{
			id: '',
			label: 'table.email',
			type: 'email',
			component: '',
			function: false,
			style: 'px-3 w-3/12   ',
			size: '',
			scroll: '',
		},
	];
}
