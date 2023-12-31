import moreIcon from '@iconify-icons/ph/dots-three-outline-fill';
export function scannedFileListTableData() {
	return [
		{
			label: 'table.fileName',
			type: 'file_name',
			title: '',
			component: '',
			function: false,
			style: 'px-3 w-2/12   ',
			size: '',
			scroll: '',
		},
		{
			label: 'table.type',
			type: 'file_content_type',
			component: '',
			style: 'px-3 w-2/12 uppercase',
			size: '',
			scroll: '',
		},
		{
			label: 'table.numberOfScans',
			type: 'yara_scanner_status',
			status: {
				load: 'CircleBgBorder',
				key: 'yara_scan_result',
			},
			function: false,
			style: 'px-3 w-2/12 uppercase',
			size: '',
			scroll: '',
		},
		{
			label: 'table.userStatus',
			type: 'clamav_scanner_status',
			status: {
				load: 'CircleBgBorder',
				key: 'clamav_scan_result',
			},
			component: '',
			function: false,
			style: 'px-3 w-2/12 uppercase',
			size: '',
			scroll: '',
		},
		{
			label: 'table.userStatus',
			type: 'antiviruses_scanner_status',
			status: {
				load: 'CircleBgBorder',
				key: 'antiviruses_scan_result',
			},
			component: '',
			function: false,
			style: 'px-3 w-2/12 uppercase',
			size: '',
			scroll: '',
		},
		{
			label: 'table.moreDetail',
			type: 'action',
			actions: [
				{
					action: '',
					icon: moreIcon,
					color: 'neutralNoBg',
					style: '',
				},
			],
			component: '',
			function: false,
			style: 'px-3 w-2/12 uppercase',
			size: '',
			scroll: '',
		},
	];
}
