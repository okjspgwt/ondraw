//Setting
Ext.define('OnDraw.view.Setting',{
	extend : 'Ext.Panel',
	xtype : 'Setting',

	config : {
		layout : 'vbox',

		items : [ {
			xtype : 'titlebar',
			docked : 'top',
			title : '설정',
			items : [ {
				xtype : 'button',
				text : '로그아웃',
				ui : 'nomal',
				align : 'right',
				id : 'btn_Logout',
			}, {
				xtype : 'button',
				text : '뒤로',
				ui : 'back',
				align : 'left',
			} ]
		}, {
			xtype : "spacer",
			height : '20px',
		}, {
			xtype : 'panel',
			height : '200px',
			style : 'background-color:#eee',
			items : [ {
				xtype: 'button',
				text: '개발자 도와주기',
				id: 'btnList1',
				ui: 'plain', 
			}, {
				xtype: 'button',
				text: '정보 ',
				id: 'btnList2',
				ui: 'plain', 
			}, {
				xtype: 'button',
				text: '공지사항 ',
				id: 'btnList3',
				ui: 'plain', 
			} ]
		}, {
			xtype : 'panel',
			html : '<p>아이디 :  박상도</p> <p>이메일 :  parksangdo @ parksangdo.com </p>',
			style : 'font-size:0.7em;color:#999;padding:15px;font-weight:bold;',
		}, {
			xtype : 'panel',
			docked : 'bottom',
			html : '<p>© Hy-olleh</p> ',
			style : 'font-size:0.6em;color:#999;padding:15px;text-align:center;',
		} ]
	}
});