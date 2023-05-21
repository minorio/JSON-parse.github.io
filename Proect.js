let btn = document.querySelector('button');
let textarea = document.querySelector('textarea');
let centerBox = document.querySelector('.center-box');
let table = document.querySelector('table');
let myjson = {};
const modal = document.querySelector('.modal-box');
const closeButton = document.querySelector('.close-button');
const modalTable = document.querySelector('.modal-content table');

window.onload = function () {
	table.onclick = function (event) {
		if (event.target.className === 'view') {
			modalTable.innerHTML = '';

			let trHead = document.createElement('tr');
			let trBody = document.createElement('tr');

			const targetId = event.target.id;
			const modalData = myjson.CyberPunk.find(
				(item) => item.attachments.id == targetId
			).attachments.data;
			const modalkeys = Object.keys(modalData);
			const newModalTh = getModalTableRow(modalkeys, trHead);
			const newModalTr = getModalTableRow(modalData, trBody);

			modalTable.appendChild(newModalTh);
			modalTable.appendChild(newModalTr);

			modal.classList.add('modal-visible');
		}
	};

	modal.onclick = function () {
		modal.classList.remove('modal-visible');
	};

	closeButton.onclick = function () {
		modal.classList.remove('modal-visible');
	};

	btn.onclick = function () {
		centerBox.classList.add('hide-center-box');

		if (textarea.value !== '') {
			myjson = JSON.parse(textarea.value);
			const headTr = document.createElement('tr');
			console.log(myjson);
			const nameColumns = Object.keys(myjson);
			const tableHeadColumn = getTableColumnName(nameColumns, headTr);

			table.appendChild(tableHeadColumn);

			const arrayName = Object.keys(myjson)[0];

			for (i = 0; i < myjson[arrayName].length; i++) {
				let tr = document.createElement('tr');
				const newTr = getTableRows(myjson[arrayName][i], tr);

				table.appendChild(newTr);
			}
		} else {
			alert('Вы не ввели JSON-код!');
			centerBox.classList.remove('hide-center-box');
		}
	};
};
